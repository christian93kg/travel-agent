// Google Flights `tfs` URL parameter: a protobuf message, URL-safe base64 encoded.
// Decoded from live Google Flights URLs. This encoder reproduces Google's own bytes.
//
//   f1  = 28                     fixed
//   f2  = 2                      fixed
//   f3  = leg (repeated, one per leg):
//           f2  date "YYYY-MM-DD"
//           f5  max stops (optional; 0 = nonstop only)
//           f6  airline IATA code (optional, repeatable)
//           f13 from  { f1: 1, f2: "IATA" }
//           f14 to    { f1: 1, f2: "IATA" }
//   f8  = 1 per adult passenger (repeated)
//   f9  = cabin: 1 economy, 2 premium economy, 3 business, 4 first
//   f14 = 1                      fixed
//   f16 = { f1: 2^64-1 }         fixed (reads as "no price limit")
//   f19 = trip type: 1 round trip, 2 one-way, 3 multi-city
//
// Spec format used by every flights script:
//   { id?, legs: [{ date, from, to, airline?, maxStops? }], cabin?: 1-4, adults?: 1, trip?: 1|2|3, maxMin?: minutes }
// A trip type is inferred when omitted: 1 leg = one-way, 2 mirrored legs = round trip, otherwise multi-city.

const varint = n => { const o = []; let v = BigInt(n); do { let c = Number(v & 0x7fn); v >>= 7n; if (v) c |= 0x80; o.push(c); } while (v); return o; };
const key = (f, wire) => varint((f << 3) | wire);
const vf = (f, n) => [...key(f, 0), ...varint(n)];               // varint field
const bf = (f, bytes) => [...key(f, 2), ...varint(bytes.length), ...bytes]; // length-delimited field
const sf = (f, s) => bf(f, [...Buffer.from(s)]);                  // string field
const place = (f, code) => bf(f, [...vf(1, 1), ...sf(2, code)]);

function leg({ date, from, to, airline, maxStops }) {
  let b = [...sf(2, date)];
  if (maxStops !== undefined) b = [...b, ...vf(5, maxStops)];
  if (airline) for (const a of [].concat(airline)) b = [...b, ...sf(6, a)];
  return bf(3, [...b, ...place(13, from), ...place(14, to)]);
}

function tripType(legs) {
  if (legs.length === 1) return 2;
  if (legs.length === 2 && legs[0].from === legs[1].to && legs[0].to === legs[1].from) return 1;
  return 3;
}

function tfs({ legs, cabin = 1, trip, adults = 1 }) {
  if (!legs || !legs.length) throw new Error('spec needs at least one leg');
  let b = [...vf(1, 28), ...vf(2, 2)];
  for (const l of legs) b = [...b, ...leg(l)];
  for (let i = 0; i < adults; i++) b = [...b, ...vf(8, 1)];
  b = [...b, ...vf(9, cabin), ...vf(14, 1), ...bf(16, [...vf(1, '18446744073709551615')]), ...vf(19, trip || tripType(legs))];
  return Buffer.from(b).toString('base64url');
}

module.exports = { tfs, tripType };

if (require.main === module) {
  // Usage: node flights/tfs.js '<spec json>'        one search, prints parsed flights as JSON
  //        node flights/tfs.js --url '<spec json>'  prints the Google Flights URL only
  const args = process.argv.slice(2);
  const urlOnly = args[0] === '--url';
  const spec = JSON.parse(urlOnly ? args[1] : args[0] || 'null');
  if (!spec) { console.error("usage: node flights/tfs.js [--url] '{\"legs\":[{\"date\":\"2027-04-10\",\"from\":\"JFK\",\"to\":\"LIS\"}]}'"); process.exit(2); }
  const { searchUrl, launch, openResults, blockedBy } = require('./page.js');
  const { parse } = require('./parse.js');
  const url = searchUrl(spec);
  if (urlOnly) { console.log(url); process.exit(0); }
  (async () => {
    const b = await launch();
    const { txt } = await openResults(b, url);
    const head = txt.split('\n').filter(l => /results returned|Departing flights|Returning|Prices are currently/.test(l)).slice(0, 5);
    console.log(JSON.stringify({ spec, url, blocked: blockedBy(txt), head, flights: parse(txt) }, null, 1));
    await b.close();
  })().catch(e => { console.error('ERR', e.message); process.exit(1); });
}
