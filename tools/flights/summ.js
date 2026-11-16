// Summarize a batch.js results file.
// Usage: node flights/summ.js <out.json> [idRegex]            one line per search
//        node flights/summ.js <out.json> [idRegex] --matrix   route × outbound date grid of the cheapest price
const fs = require('fs');
const args = process.argv.slice(2);
const matrix = args.includes('--matrix');
const [file, filter] = args.filter(a => a !== '--matrix');
if (!file) { console.error('usage: node flights/summ.js <out.json> [idRegex] [--matrix]'); process.exit(2); }
const r = JSON.parse(fs.readFileSync(file, 'utf8'));
const re = filter ? new RegExp(filter) : null;
const rows = Object.values(r).filter(x => !re || re.test(x.id)).sort((a, b) => (a.id > b.id) - (a.id < b.id));
const fmt = f => (f ? `${f.price} ${f.airline.slice(0, 24)} ${f.stops}${f.layover ? ' (' + f.layover + ')' : ''} ${f.dur} dep ${f.dep}` : '-');

if (!matrix) {
  for (const x of rows) console.log(`${x.id.padEnd(36)} n=${String(x.n).padEnd(4)} MIN ${fmt(x.cheapest)} | NONSTOP ${fmt(x.cheapest_nonstop)} | <=CAP ${fmt(x.cheapest_under_cap)}${x.blocked ? ' BLOCKED:' + x.blocked : ''}`);
} else {
  const route = x => x.legs.map(l => l.from).concat(x.legs[x.legs.length - 1].to).join('-') + (x.cabin > 1 ? ` c${x.cabin}` : '');
  const dates = [...new Set(rows.map(x => x.legs[0].date))].sort();
  const routes = [...new Set(rows.map(route))].sort();
  const cell = (rt, d) => { const hits = rows.filter(x => route(x) === rt && x.legs[0].date === d && x.cheapest); return hits.length ? String(Math.min(...hits.map(h => h.cheapest.price))) : '-'; };
  console.log(`| route | ${dates.join(' | ')} |`);
  console.log(`|---|${dates.map(() => '---:').join('|')}|`);
  for (const rt of routes) console.log(`| ${rt} | ${dates.map(d => cell(rt, d)).join(' | ')} |`);
}
