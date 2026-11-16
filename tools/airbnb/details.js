// Amenity comparison for a shortlist: open listing details for each id (one at a time,
// 4-8 s apart), print a comparison table and save the results as JSON.
// Resumable: ids already in the output file for the same dates are not fetched again.
//
// Usage: node airbnb/details.js <checkin> <checkout> <id> [id ...]
// Env:   ADULTS  guests (default 1)
//        OUT     output JSON (default tools/out/airbnb_details.json)
// Output: { <id>: { id, url, checkin, checkout, adults, at, amenities } }
const path = require('path');
const { connect } = require('./client');
const { amenities, nights, pace, readJson, writeJson, OUT_DIR } = require('./lib');

const [, , checkin, checkout, ...ids] = process.argv;
if (!checkin || !checkout || !ids.length) {
  console.error('usage: node airbnb/details.js <checkin> <checkout> <id> [id ...]   (env: ADULTS, OUT)');
  process.exit(2);
}
nights(checkin, checkout); // validates the dates
const adults = +(process.env.ADULTS || 1);
const outFile = process.env.OUT || path.join(OUT_DIR, 'airbnb_details.json');
const res = readJson(outFile, {});

const yn = v => (v ? 'Y' : '-');
const COLS = [
  ['id', r => r.id],
  ['wkspace', r => yn(r.amenities.workspace)],
  ['wifi', r => (r.amenities.mbps ? `${r.amenities.mbps}Mb` : r.amenities.fastWifi ? 'fast' : yn(r.amenities.wifi))],
  ['eth', r => yn(r.amenities.ethernet)],
  ['washer', r => yn(r.amenities.washer)],
  ['dryer', r => yn(r.amenities.dryer)],
  ['heat', r => yn(r.amenities.heating)],
  ['AC', r => yn(r.amenities.ac)],
  ['self-in', r => yn(r.amenities.selfCheckin)],
  ['lift', r => yn(r.amenities.elevator)],
  ['kitchen', r => yn(r.amenities.kitchen)],
  ['dishw', r => yn(r.amenities.dishwasher)],
  ['coffee', r => (r.amenities.coffee || '-').slice(0, 14)],
  ['cameras', r => (r.amenities.cameras ? 'Y' : '-')],
  ['type', r => (r.amenities.entire ? 'entire' : r.amenities.shared ? 'shared' : '?')],
  ['not included', r => (r.amenities.notIncluded || '').slice(0, 40)],
];

function table(rows) {
  const cells = rows.map(r => COLS.map(([, f]) => String(f(r))));
  const w = COLS.map(([h], i) => Math.max(h.length, ...cells.map(c => c[i].length)));
  const line = c => c.map((v, i) => v.padEnd(w[i])).join('  ').trimEnd();
  return [line(COLS.map(([h]) => h)), ...cells.map(line)].join('\n');
}

(async () => {
  const todo = ids.filter(id => {
    const r = res[id];
    return !(r && r.amenities && !r.amenities.error && r.checkin === checkin && r.checkout === checkout && r.adults === adults);
  });
  if (todo.length) {
    const c = await connect();
    try {
      for (const [i, id] of todo.entries()) {
        if (i) await pace();
        try {
          const d = await c.call('airbnb_listing_details', { id, checkin, checkout, adults });
          res[id] = { id, url: d.listingUrl || `https://www.airbnb.com/rooms/${id}`, checkin, checkout, adults, at: new Date().toISOString(), amenities: amenities(d) };
        } catch (e) {
          res[id] = { id, checkin, checkout, adults, at: new Date().toISOString(), error: e.message };
          console.error(`${id}: ${e.message.split('\n')[0]}`);
        }
        writeJson(outFile, res);
      }
    } finally { c.close(); }
  }
  const rows = ids.map(id => res[id]).filter(r => r && r.amenities && !r.amenities.error);
  if (rows.length) console.log(table(rows));
  console.log(`${rows.length}/${ids.length} listings with amenities (${ids.length - todo.length} from cache) -> ${outFile}`);
})().catch(e => { console.error(e.message); process.exit(1); });
