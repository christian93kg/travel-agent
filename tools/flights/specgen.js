// Build a specs.json for batch.js from a small plan: every origin × destination × date (× return date) × cabin.
// Usage: node flights/specgen.js <plan.json> > specs.json
// plan.json:
// {
//   "prefix": "lis",                         id prefix (optional)
//   "origins": ["JFK", "EWR"],
//   "destinations": ["LIS"],
//   "dates": ["2027-04-09", "2027-04-10"]     or { "from": "2027-04-08", "to": "2027-04-12" }
//   "returnDates": ["2027-04-17"],            optional: makes round trips (same shape as "dates")
//   "cabins": [1],                            1 economy, 2 premium economy, 3 business, 4 first
//   "adults": 1, "maxStops": 1, "airline": "TP", "maxMin": 900      all optional
// }
const fs = require('fs');

function expand(d) {
  if (!d) return [];
  if (Array.isArray(d)) return d;
  const out = [];
  for (let t = new Date(d.from + 'T00:00:00Z'); t <= new Date(d.to + 'T00:00:00Z'); t.setUTCDate(t.getUTCDate() + 1)) out.push(t.toISOString().slice(0, 10));
  return out;
}

function specgen(plan) {
  const specs = [];
  const opt = { ...(plan.maxStops !== undefined && { maxStops: plan.maxStops }), ...(plan.airline && { airline: plan.airline }) };
  const rets = expand(plan.returnDates);
  for (const o of plan.origins) for (const d of plan.destinations) for (const date of expand(plan.dates)) for (const cabin of plan.cabins || [1]) {
    for (const ret of rets.length ? rets : [null]) {
      if (ret && ret <= date) continue;
      const legs = [{ date, from: o, to: d, ...opt }];
      if (ret) legs.push({ date: ret, from: d, to: o, ...opt });
      const id = [plan.prefix, `${o}-${d}`, date, ret, `c${cabin}`].filter(Boolean).join('|');
      specs.push({ id, legs, cabin, adults: plan.adults || 1, ...(plan.maxMin && { maxMin: plan.maxMin }) });
    }
  }
  return specs;
}

module.exports = { specgen, expand };

if (require.main === module) {
  if (!process.argv[2]) { console.error('usage: node flights/specgen.js <plan.json> > specs.json'); process.exit(2); }
  const specs = specgen(JSON.parse(fs.readFileSync(process.argv[2], 'utf8')));
  console.error(`${specs.length} specs`);
  console.log(JSON.stringify(specs, null, 1));
}
