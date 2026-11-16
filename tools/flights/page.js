// Browser helpers shared by the Google Flights scripts.
const cfg = require('../config.js');
const { tfs } = require('./tfs.js');

const searchUrl = spec =>
  `https://www.google.com/travel/flights/search?tfs=${tfs(spec)}&hl=${cfg.hl}&gl=${cfg.gl}&curr=${cfg.currency}`;

async function launch() {
  const { chromium } = require('playwright'); // loaded lazily so `tfs.js --url` works without it
  return chromium.launch();
}

// One context per worker. A context shared by several tabs returned mostly empty pages.
async function newContext(browser, extra = {}) {
  return browser.newContext({ locale: cfg.locale, timezoneId: cfg.timezoneId, ...extra });
}

const text = page => page.evaluate(() => document.body.innerText);

// Consent walls and bot checks, so a blocked page is not mistaken for "no flights".
const blockedBy = txt =>
  /unusual traffic|captcha|not a robot/i.test(txt) ? 'captcha' : /Before you continue to Google/i.test(txt) ? 'consent' : null;

const hasResults = txt => /\d+ results? returned/i.test(txt);

// Load a results page and wait until it has finished.
// "No results returned" also shows while a page is still loading, so it only counts after `minEmptyS` seconds.
async function loadResults(page, url, { maxS = 50, minEmptyS = 12, expand = true } = {}) {
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
  let tx = '';
  for (let t = 0; t < maxS; t++) {
    await page.waitForTimeout(1000);
    tx = await text(page);
    if (hasResults(tx) || blockedBy(tx)) break;
    if (t >= minEmptyS && /No results returned|no options/i.test(tx)) break;
  }
  await page.waitForTimeout(1500);
  if (expand && hasResults(tx)) {
    const more = page.getByRole('button', { name: /more flights/i });
    if (await more.count()) { await more.first().click().catch(() => {}); await page.waitForTimeout(2500); }
  }
  return text(page);
}

// Google sometimes serves a fresh session a page that stays empty ("No results returned") for good.
// Reloading doesn't help; a new browser context does. Try up to `tries` contexts before believing "no flights".
async function openResults(browser, url, { tries = 3, contextOptions = {}, ...opts } = {}) {
  let last;
  for (let i = 0; i < tries; i++) {
    const ctx = await newContext(browser, contextOptions);
    const page = await ctx.newPage();
    const txt = await loadResults(page, url, opts);
    last = { ctx, page, txt };
    if (hasResults(txt) || blockedBy(txt)) return last;
    if (i < tries - 1) await ctx.close();
  }
  return last;
}

module.exports = { searchUrl, launch, newContext, loadResults, openResults, hasResults, text, blockedBy };
