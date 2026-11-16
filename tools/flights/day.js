// Everything flying one route on one day, plus Google's price-insight line ("cheaper than usual" etc.).
// Usage: node flights/day.js FROM TO YYYY-MM-DD
//   default: nonstops only.   MAXH=12 node flights/day.js ...  lists every flight under 12 hours instead.
const { searchUrl, launch, openResults } = require('./page.js');
const { parse, minutes } = require('./parse.js');

const [, , from, to, date] = process.argv;
if (!date) { console.error('usage: node flights/day.js FROM TO YYYY-MM-DD'); process.exit(2); }
(async () => {
  const b = await launch();
  const { txt } = await openResults(b, searchUrl({ legs: [{ date, from, to }] }));
  const insight = txt.split('\n').filter(l => /Prices are currently|cheaper than usual|more expensive than usual|typical for/i.test(l)).slice(0, 2);
  const maxH = process.env.MAXH ? +process.env.MAXH : null;
  const fl = parse(txt).filter(f => (maxH ? minutes(f.dur) <= maxH * 60 : f.stops === 'Nonstop'));
  console.log(`${from}->${to} ${date} | ${insight.join(' / ') || 'no price insight'} | ${maxH ? `under ${maxH}h` : 'nonstops'}: ${fl.length}`);
  const seen = new Set();
  const byDep = (a, c) => minutes12(a.dep) - minutes12(c.dep);
  for (const f of fl.sort(byDep)) {
    const k = f.dep + f.airline + f.price; if (seen.has(k)) continue; seen.add(k);
    console.log(`  ${f.dep.padEnd(9)} -> ${f.arr.padEnd(10)} ${f.airline.slice(0, 24).padEnd(24)} ${f.dur.padEnd(14)} ${f.stops.padEnd(8)} ${f.price}`);
  }
  await b.close();
})().catch(e => { console.error('ERR', e.message); process.exit(1); });

// "7:05 PM" or "19:05" -> minutes after midnight, for sorting
function minutes12(t) {
  const m = /(\d{1,2}):(\d{2})\s?([AP]M)?/.exec(t || ''); if (!m) return 0;
  let h = +m[1] % (m[3] ? 12 : 24); if (m[3] === 'PM') h += 12;
  return h * 60 + +m[2];
}
