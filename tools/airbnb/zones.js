// Neighbourhood search: page through one city search, tag each listing with the nearest zone
// whose radius contains it (haversine distance), then open listing details for the cheapest
// well-rated in-zone listings. One request at a time, 4-8 s apart.
//
// Usage: node airbnb/zones.js <zones.json> <out.json>
// zones.json: { location, checkin, checkout, adults = 1, propertyType?,
//               zones: [{ name, lat, lng, radiusKm }],
//               pages = 5 (max 15), details = 8, minRating = 4.8, minReviews = 15,
//               roomsMatch?: regex (case-insensitive) tested against the rooms line, e.g. "^(1|2) bedrooms?",
//               need?: amenity keys that mark a checked listing as pass (see sweep.js) }
// Output: { at, config, n, inZone, candidates, medianNightAll, medianNightInZone,
//           zones: { <name>: { n, p25, median, p75, good_n, picks } }, inZoneList, checked }
const { connect } = require('./client');
const { listings, summarise, wellRated, amenities, meets, haversineKm, nights, pace, readJson, writeJson } = require('./lib');

const [, , cfgFile, outFile] = process.argv;
if (!cfgFile || !outFile) {
  console.error('usage: node airbnb/zones.js <zones.json> <out.json>');
  process.exit(2);
}
const cfg = { adults: 1, pages: 5, details: 8, minRating: 4.8, minReviews: 15, ...readJson(cfgFile, null) };
if (!cfg.location || !cfg.checkin || !cfg.checkout || !Array.isArray(cfg.zones) || !cfg.zones.length) {
  console.error(`${cfgFile}: needs location, checkin, checkout and a non-empty zones array`);
  process.exit(2);
}
const N = nights(cfg.checkin, cfg.checkout);
const pages = Math.max(1, Math.min(15, cfg.pages));
const roomsRe = cfg.roomsMatch ? new RegExp(cfg.roomsMatch, 'i') : null;

function nearestZone(x) {
  if (x.lat == null || x.lng == null) return null;
  let best = null;
  for (const z of cfg.zones) {
    const d = haversineKm(x, z);
    if (d <= z.radiusKm && (!best || d < best.km)) best = { name: z.name, km: Math.round(d * 100) / 100 };
  }
  return best;
}

const median = a => { const s = a.filter(v => v != null).sort((x, y) => x - y); return s.length ? s[Math.floor(s.length / 2)] : null; };

(async () => {
  const c = await connect();
  const out = { at: new Date().toISOString(), config: cfg };
  const all = new Map();
  try {
    let cursors = [undefined];
    for (let i = 0; i < cursors.length && i < pages; i++) {
      if (i) await pace();
      const args = { location: cfg.location, checkin: cfg.checkin, checkout: cfg.checkout, adults: cfg.adults };
      if (cfg.propertyType) args.propertyType = cfg.propertyType;
      if (cursors[i]) args.cursor = cursors[i];
      try {
        const t = await c.call('airbnb_search', args);
        if (i === 0) out.searchUrl = t.searchUrl;
        const pi = t.paginationInfo || {};
        if (i === 0 && Array.isArray(pi.pageCursors) && pi.pageCursors.length > 1) cursors = [undefined, ...pi.pageCursors.slice(1)];
        else if (pi.nextPageCursor && cursors.length === i + 1) cursors.push(pi.nextPageCursor);
        for (const x of listings(t, N)) {
          const z = nearestZone(x);
          all.set(x.id, { ...x, zone: z ? z.name : null, zoneKm: z ? z.km : null });
        }
        console.log(`page ${i + 1}: ${all.size} listings so far`);
      } catch (e) {
        console.log(`page ${i + 1}: ERR ${e.message.split('\n')[0]}`);
        if (i === 0) throw e;
      }
    }

    const L = [...all.values()];
    const inZone = L.filter(x => x.zone);
    const cands = wellRated(inZone, cfg.minRating, cfg.minReviews)
      .filter(x => !roomsRe || roomsRe.test(x.rooms))
      .sort((a, b) => a.total - b.total);
    Object.assign(out, {
      n: L.length, inZone: inZone.length, candidates: cands.length,
      medianNightAll: median(L.map(x => x.night)), medianNightInZone: median(inZone.map(x => x.night)),
      currency: L[0]?.currency || null,
      zones: Object.fromEntries(cfg.zones.map(z => [z.name, summarise(inZone.filter(x => x.zone === z.name), { minRating: cfg.minRating, minReviews: cfg.minReviews })])),
      inZoneList: inZone.sort((a, b) => a.total - b.total),
      checked: [],
    });
    writeJson(outFile, out);

    const pick = cands.slice(0, cfg.details);
    for (const cand of pick) {
      await pace();
      try {
        const d = await c.call('airbnb_listing_details', { id: cand.id, checkin: cfg.checkin, checkout: cfg.checkout, adults: cfg.adults });
        const row = { ...cand, amenities: amenities(d) };
        if (cfg.need) row.pass = meets(row.amenities, cfg.need);
        out.checked.push(row);
      } catch (e) { out.checked.push({ ...cand, error: e.message }); }
      console.log(`details ${out.checked.length}/${pick.length}`);
      writeJson(outFile, out);
    }
  } finally { c.close(); }

  const cur = out.currency || '';
  console.log(`listings=${out.n} inZone=${out.inZone} candidates=${out.candidates} median/night all=${cur}${out.medianNightAll ?? '-'} inZone=${cur}${out.medianNightInZone ?? '-'}`);
  for (const [name, s] of Object.entries(out.zones)) console.log(`  ${name}: n=${s.n} median=${cur}${s.median ?? '-'}/night good=${s.good_n}`);
  console.log(`wrote ${outFile}`);
})().catch(e => { console.error(e.message); process.exit(1); });
