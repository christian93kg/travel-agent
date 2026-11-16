// Shared helpers for the Airbnb tools: price parsing, search-result mapping, summaries,
// amenity extraction from listing details, distances, dates, pacing and JSON files.
// Prices are snapshots of what the search page showed, in whatever currency Airbnb chose.
const fs = require('fs');
const path = require('path');

const TOOLS_DIR = path.resolve(__dirname, '..');
const OUT_DIR = path.join(TOOLS_DIR, 'out');

// ---- money -------------------------------------------------------------------------------

const CURRENCY_RE = /(CHF|[A-Z]{2,3}\s?\$|[A-Z]{3}(?=\s?\d)|[$€£¥₹₩₪₫₱₺₽₴₦₡₲₵₸฿]|kr|zł|Kč|Ft|lei|R\$)/;

// Parse the first amount in a label such as "$1,555 for 7 nights", "€1.555 for 7 nights",
// "1 555 € for 7 nights" or "CHF 1,555.50 total". Returns a number, or null.
function money(label) {
  if (label == null) return null;
  const s = String(label);
  const m = /\d(?:[\d.,\s  ']*\d)?/.exec(s);
  if (!m) return null;
  let tok = m[0].replace(/[\s  ']/g, '');
  const lastDot = tok.lastIndexOf('.'), lastComma = tok.lastIndexOf(',');
  let dec = null;
  if (lastDot >= 0 && lastComma >= 0) dec = lastDot > lastComma ? '.' : ',';
  else {
    const sep = lastDot >= 0 ? '.' : lastComma >= 0 ? ',' : null;
    // A single separator followed by 1-2 digits is a decimal mark; otherwise a thousands mark.
    if (sep && tok.split(sep).length === 2 && tok.length - tok.lastIndexOf(sep) - 1 <= 2) dec = sep;
  }
  if (dec) {
    const grouping = dec === '.' ? ',' : '.';
    tok = tok.split(grouping).join('').replace(dec, '.');
  } else tok = tok.replace(/[.,]/g, '');
  const n = Number(tok);
  return Number.isFinite(n) ? n : null;
}

// The currency marker in a price label ("$", "€", "CHF", ...), or null.
function currency(label) {
  const m = CURRENCY_RE.exec(String(label || ''));
  return m ? m[1].replace(/\s/g, '') : null;
}

// ---- dates, distance, pacing -------------------------------------------------------------

function nights(checkin, checkout) {
  const n = Math.round((Date.parse(checkout) - Date.parse(checkin)) / 864e5);
  if (!Number.isFinite(n) || n <= 0) throw new Error(`bad dates: ${checkin} -> ${checkout}`);
  return n;
}

function haversineKm(a, b) {
  const R = 6371.0088, rad = Math.PI / 180;
  const dLat = (b.lat - a.lat) * rad, dLng = (b.lng - a.lng) * rad;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
}

// Wait baseMs plus a random 0..jitterMs, so requests are not evenly spaced.
const sleep = (baseMs, jitterMs = 0) => new Promise(r => setTimeout(r, baseMs + Math.random() * jitterMs));

// The pause between live requests: 4-8 s.
const pace = () => sleep(4000, 4000);

// ---- search results ----------------------------------------------------------------------

const parse = j => (typeof j === 'string' ? JSON.parse(j) : j || {});

// Map an airbnb_search result to flat listing rows. Rows without a price are dropped.
function listings(searchJson, n) {
  const t = parse(searchJson);
  return (t.searchResults || []).map(x => {
    const rm = /([\d.]+) out of 5 average rating,\s*([\d,.]+) review/.exec(x.avgRatingA11yLabel || '');
    const priceLabel = x.structuredDisplayPrice?.primaryLine?.accessibilityLabel || '';
    const total = money(priceLabel);
    const coord = x.demandStayListing?.location?.coordinate || {};
    return {
      id: String(x.id),
      url: x.url,
      name: x.demandStayListing?.description?.name?.localizedStringWithTranslationPreference || '',
      rooms: x.structuredContent?.primaryLine || '',
      badge: typeof x.badges === 'string' ? x.badges : x.badges?.text || '',
      rating: rm ? +rm[1] : null,
      reviews: rm ? +rm[2].replace(/[,.]/g, '') : 0,
      total,
      night: total != null && n ? Math.round(total / n) : null,
      currency: currency(priceLabel),
      lat: coord.latitude ?? null,
      lng: coord.longitude ?? null,
      priceLabel,
    };
  }).filter(x => x.total != null);
}

const quantile = (sorted, p) => (sorted.length ? sorted[Math.min(sorted.length - 1, Math.floor(p * sorted.length))] : null);

// Well-rated = rating >= minRating with >= minReviews reviews.
const wellRated = (L, minRating, minReviews) => L.filter(x => (x.rating || 0) >= minRating && x.reviews >= minReviews);

// Nightly-price spread plus the cheapest well-rated picks.
function summarise(L, { minRating = 4.8, minReviews = 20, picks = 3 } = {}) {
  const ns = L.map(x => x.night).filter(v => v != null).sort((a, b) => a - b);
  const good = wellRated(L, minRating, minReviews).sort((a, b) => a.total - b.total);
  return { n: L.length, p25: quantile(ns, 0.25), median: quantile(ns, 0.5), p75: quantile(ns, 0.75), good_n: good.length, picks: good.slice(0, picks) };
}

// ---- listing details ---------------------------------------------------------------------

// Pull the amenities that matter for a stay out of an airbnb_listing_details result.
// Everything in the "Not included" group is reported in notIncluded and never counted as present.
function amenities(detailsJson) {
  let j;
  try { j = parse(detailsJson); } catch { return { raw: true }; }
  if (j.error) return { error: String(j.error) };
  const groups = {};
  for (const d of j.details || []) {
    if (!d || typeof d.seeAllAmenitiesGroups !== 'object') continue;
    for (const [k, v] of Object.entries(d.seeAllAmenitiesGroups)) groups[k] = groups[k] ? `${groups[k]}, ${v}` : String(v);
  }
  const notIncluded = groups['Not included'] || '';
  const incl = Object.entries(groups).filter(([k]) => k !== 'Not included').map(([, v]) => v).join(' | ');
  const whole = JSON.stringify(j);
  const has = re => re.test(incl);
  const grab = (re, i = 1) => { const m = re.exec(incl); return m ? (m[i] || '').replace(/[()]/g, '').trim() : ''; };
  const ws = /Dedicated workspace([^,|]*)/i.exec(incl);
  const mb = /(\d{2,4})\s*Mbps/i.exec(incl);
  return {
    workspace: !!ws,
    workspaceNote: ws ? ws[1].replace(/[()]/g, '').trim() : '',
    mbps: mb ? +mb[1] : null,
    fastWifi: has(/Fast wifi/i),
    wifi: has(/\bwi-?fi\b/i),
    ethernet: has(/Ethernet/i),
    washer: has(/\bWasher\b/i),
    dryer: has(/(?<!hair )\bdryer\b/i),
    notIncluded,
    heating: has(/heating|radiator|heated floors/i),
    ac: has(/Air conditioning|\bAC\b/i),
    selfCheckin: has(/Self check-in/i),
    elevator: has(/Elevator/i),
    kitchen: has(/\bKitchen\b/i),
    dishwasher: has(/Dishwasher/i),
    coffee: has(/Coffee maker/i) ? grab(/Coffee maker:?([^,|]*)/i) || 'yes' : '',
    cameras: grab(/((?:Exterior|Indoor)?\s*security cameras?[^,|]*)/i),
    shared: /shared (bathroom|room|home)|private room in/i.test(whole),
    // The details payload rarely names the room type; null = not stated (filter the search with
    // propertyType: "entire_home" when it matters).
    entire: /Entire (rental unit|home|condo|loft|serviced apartment|place|guest suite|cottage|villa|townhouse)/i.test(whole) ? true : null,
  };
}

// Does an amenities() result satisfy every key in need? A key prefixed with "!" must be false.
function meets(amen, need = []) {
  return need.every(k => (k.startsWith('!') ? !amen[k.slice(1)] : !!amen[k]));
}

// ---- files -------------------------------------------------------------------------------

function readJson(file, fallback) {
  if (!fs.existsSync(file)) return fallback;
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

// Write via a temp file and rename, so an interrupted run never leaves half a JSON file.
function writeJson(file, data) {
  fs.mkdirSync(path.dirname(path.resolve(file)), { recursive: true });
  const tmp = `${file}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(data, null, 1));
  fs.renameSync(tmp, file);
}

module.exports = { TOOLS_DIR, OUT_DIR, money, currency, nights, haversineKm, sleep, pace, listings, summarise, wellRated, amenities, meets, readJson, writeJson };
