// Run many flight searches and keep the cheapest options per search. Resumable: rerun to finish what's left.
// Usage: node flights/batch.js <specs.json> <out.json> [workers=2]
// specs.json: an array of specs (see tfs.js), each with a unique "id". Build one with specgen.js.
// Per id the output holds: url, n, cheapest, cheapest_nonstop, cheapest_under_cap (spec.maxMin, default 1080 min),
// top (first 10 rows), at (timestamp), blocked ("captcha" | "consent" | null). Prices are trip totals.
const fs = require('fs');
const { searchUrl, launch, newContext, loadResults, hasResults, blockedBy } = require('./page.js');
const { parse, minutes } = require('./parse.js');

const [, , specFile, outFile, nw] = process.argv;
if (!specFile || !outFile) { console.error('usage: node flights/batch.js <specs.json> <out.json> [workers]'); process.exit(2); }
const specs = JSON.parse(fs.readFileSync(specFile, 'utf8'));
const res = fs.existsSync(outFile) ? JSON.parse(fs.readFileSync(outFile, 'utf8')) : {};
const cheapest = arr => [...arr].sort((x, y) => x.price - y.price)[0] || null;

(async () => {
  const b = await launch();
  const todo = specs.filter(s => !res[s.id]).map(s => ({ spec: s, tries: 0 }));
  console.log(`${todo.length} to run, ${specs.length - todo.length} already done`);
  const worker = async () => {
    let ctx = await newContext(b);
    let p = await ctx.newPage();
    while (todo.length) {
      const job = todo.shift(), s = job.spec;
      if (p.isClosed()) p = await ctx.newPage();
      const url = searchUrl(s);
      try {
        const txt = await loadResults(p, url);
        const fl = parse(txt);
        const blocked = blockedBy(txt);
        // An empty page is usually a stuck session, not a sold-out route: requeue it (up to twice) and
        // move this worker to a fresh browser context, which is what clears it.
        if (!hasResults(txt) && !blocked && job.tries < 2) {
          job.tries++; todo.push(job); console.log(`${s.id} empty, requeued`);
          await ctx.close().catch(() => {}); ctx = await newContext(b); p = await ctx.newPage(); continue;
        }
        res[s.id] = { ...s, url, n: fl.length, cheapest: cheapest(fl), cheapest_nonstop: cheapest(fl.filter(f => f.stops === 'Nonstop')),
          cheapest_under_cap: cheapest(fl.filter(f => minutes(f.dur) <= (s.maxMin || 1080))), top: fl.slice(0, 10), at: new Date().toISOString(), blocked };
        console.log(`${s.id} n=${fl.length} min=${res[s.id].cheapest?.price ?? '-'} nonstop=${res[s.id].cheapest_nonstop?.price ?? '-'}${blocked ? ' BLOCKED:' + blocked : ''}`);
      } catch (e) { console.log(`${s.id} ERR ${e.message.slice(0, 80)}`); }
      fs.writeFileSync(outFile, JSON.stringify(res, null, 1));
      await new Promise(r => setTimeout(r, 500 + Math.random() * 700)); // light pacing between searches
    }
  };
  await Promise.all(Array.from({ length: +(nw || 2) }, worker));
  await b.close();
})().catch(e => { console.error('ERR', e.message); process.exit(1); });
