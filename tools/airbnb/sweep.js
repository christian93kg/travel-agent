// Price sweep: one Airbnb search per job, run one at a time with 4-8 s between requests.
// Optional per-job amenity check: open listing details on the cheapest well-rated results
// until `pass` of them have every amenity in `need`, or `max` have been opened.
// Resumable: finished jobs (keyed by id) are skipped on a rerun; failed jobs are retried.
//
// Usage: node airbnb/sweep.js <jobs.json> <out.json>
// jobs.json: [{ id?, location, checkin, checkout, adults = 1, propertyType?,
//               minRating = 4.8, minReviews = 20,
//               verify?: { need: ["workspace", "wifi"], pass = 3, max = 6, minRating = 4.8, minReviews = 15 } }]
//   id defaults to "location|checkin|checkout|adults|propertyType".
//   propertyType: entire_home | private_room | shared_room | hotel_room.
//   need: keys of lib.amenities() that must be true; prefix "!" for must-be-false (e.g. "!shared").
const { connect } = require('./client');
const { listings, summarise, wellRated, amenities, meets, nights, pace, readJson, writeJson } = require('./lib');

const [, , jobsFile, outFile] = process.argv;
if (!jobsFile || !outFile) {
  console.error('usage: node airbnb/sweep.js <jobs.json> <out.json>');
  process.exit(2);
}

const jobs = readJson(jobsFile, null);
if (!Array.isArray(jobs)) { console.error(`${jobsFile}: expected a JSON array of jobs`); process.exit(2); }
for (const j of jobs) {
  if (!j.location || !j.checkin || !j.checkout) { console.error(`job missing location/checkin/checkout: ${JSON.stringify(j)}`); process.exit(2); }
  j.adults = j.adults || 1;
  j.id = j.id || [j.location, j.checkin, j.checkout, j.adults, j.propertyType || ''].join('|');
  j.nights = nights(j.checkin, j.checkout);
}
const res = readJson(outFile, {});

async function verify(c, job, L) {
  const v = { need: ['workspace', 'wifi'], pass: 3, max: 6, minRating: 4.8, minReviews: 15, ...job.verify };
  const cands = wellRated(L, v.minRating, v.minReviews).sort((a, b) => a.total - b.total);
  const checked = [], passed = [];
  for (const cand of cands) {
    if (passed.length >= v.pass || checked.length >= v.max) break;
    await pace();
    try {
      const d = await c.call('airbnb_listing_details', { id: cand.id, checkin: job.checkin, checkout: job.checkout, adults: job.adults });
      const row = { ...cand, amenities: amenities(d) };
      row.pass = meets(row.amenities, v.need);
      checked.push(row);
      if (row.pass) passed.push(row);
    } catch (e) { checked.push({ ...cand, error: e.message }); }
  }
  return { need: v.need, candidates: cands.length, checked, passed };
}

(async () => {
  const todo = jobs.filter(j => !res[j.id]?.done);
  console.log(`${todo.length} to run, ${jobs.length - todo.length} already done`);
  if (!todo.length) return;
  const c = await connect();
  let first = true;
  try {
    for (const j of todo) {
      if (!first) await pace();
      first = false;
      const args = { location: j.location, checkin: j.checkin, checkout: j.checkout, adults: j.adults };
      if (j.propertyType) args.propertyType = j.propertyType;
      try {
        const t = await c.call('airbnb_search', args);
        const L = listings(t, j.nights);
        const s = summarise(L, { minRating: j.minRating ?? 4.8, minReviews: j.minReviews ?? 20 });
        const row = { ...j, at: new Date().toISOString(), searchUrl: t.searchUrl, currency: L[0]?.currency || null, ...s, listings: L };
        if (j.verify) row.verify = await verify(c, j, L);
        row.done = true;
        res[j.id] = row;
        const cur = row.currency || '';
        const ver = row.verify ? ` verified=${row.verify.passed.length}/${row.verify.checked.length}` : '';
        console.log(`${j.id}  n=${s.n} median=${cur}${s.median ?? '-'}/night p25-p75=${cur}${s.p25 ?? '-'}-${s.p75 ?? '-'} good=${s.good_n}${ver}`);
      } catch (e) {
        res[j.id] = { ...j, at: new Date().toISOString(), error: e.message };
        console.log(`${j.id}  ERR ${e.message.split('\n')[0]}`);
      }
      writeJson(outFile, res);
    }
  } finally { c.close(); }
  console.log(`wrote ${outFile}`);
})().catch(e => { console.error(e.message); process.exit(1); });
