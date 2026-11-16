// Open one result and print its booking options (fare families, sellers, bag rules as Google lists them).
// Pick the row by departure time and price as shown in a batch/tfs result.
// Usage: node flights/fares.js '<spec json>' '<departure, e.g. 1:00 PM>' <price>
const { searchUrl, launch, openResults, text } = require('./page.js');

const [, , specJson, dep, price] = process.argv;
if (!price) { console.error("usage: node flights/fares.js '<spec json>' '<dep time>' <price>"); process.exit(2); }
const priceRe = new RegExp(`[^\\d]${(+price).toLocaleString('en-US').replace(/,/g, '[,.]?')}(?!\\d)`);
(async () => {
  const b = await launch();
  const { page: p } = await openResults(b, searchUrl(JSON.parse(specJson)));
  const rows = p.locator('li').filter({ hasText: dep }).filter({ hasText: priceRe });
  const n = await rows.count();
  console.log('matching rows:', n);
  if (!n) { await b.close(); return; }
  await rows.first().click();
  for (let attempt = 0; attempt < 3; attempt++) {
    for (let k = 0; k < 25; k++) {
      await p.waitForTimeout(1000);
      const tx = await text(p);
      if (/Book with|Booking options|Select fare|Choose a fare/i.test(tx) && !/Loading results/.test(tx)) break;
    }
    if (!/Oops, something went wrong/.test(await text(p))) break;
    console.log('Google error page, reloading'); await p.reload({ waitUntil: 'domcontentloaded' });
  }
  await p.waitForTimeout(3000);
  const txt = await text(p);
  const i = txt.search(/Booking options|Select fare|Choose a fare|fare options/i);
  console.log(p.url());
  console.log(txt.slice(Math.max(0, i - 200), i + 3500));
  await b.close();
})().catch(e => { console.error('ERR', e.message); process.exit(1); });
