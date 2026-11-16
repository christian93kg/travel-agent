// Aircraft type and flight number for each result (opens every "Flight details" panel).
// Useful for picking a newer cabin or avoiding a regional jet. Some panels time out; those are skipped.
// Usage: node flights/aircraft.js '<spec json>'
const { searchUrl, launch, openResults, text } = require('./page.js');

const spec = JSON.parse(process.argv[2] || 'null');
if (!spec) { console.error("usage: node flights/aircraft.js '<spec json>'"); process.exit(2); }
const TYPE = /(Airbus|Boeing|Embraer|Bombardier|Canadair|ATR|De Havilland|Dash 8)\s?[A-Z0-9-]/;
(async () => {
  const b = await launch();
  const { page: p } = await openResults(b, searchUrl(spec), { expand: false, contextOptions: { viewport: { width: 1400, height: 1000 } } });
  const btns = p.locator('button[aria-label^="Flight details"]');
  const n = await btns.count();
  for (let i = 0; i < n; i++) {
    try { await btns.nth(i).click({ timeout: 5000 }); await p.waitForTimeout(900); } catch (e) { console.error('skip panel', i); }
  }
  await p.waitForTimeout(1500);
  const lines = (await text(p)).split('\n').map(s => s.trim()).filter(Boolean);
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const ti = line.search(TYPE);
    if (ti < 0) continue;
    // Current layout puts it all on one line: "<airline><cabin><aircraft><flight no>", e.g.
    // "Tap Air PortugalEconomyAirbus A330-900neoTP 210". Older layouts put the aircraft on its own line.
    const fm = /([A-Z0-9]{2})\s?(\d{1,4})$/.exec(line.slice(ti));
    const aircraft = (fm ? line.slice(ti, ti + fm.index) : line.slice(ti)).trim();
    const head = line.slice(0, ti);
    const cabin = (/(Premium economy|Economy|Business|First)$/i.exec(head) || [])[1] || '';
    const ctx = lines.slice(Math.max(0, i - 3), i + 2);
    const flight = fm ? `${fm[1]} ${fm[2]}` : (ctx.find(l => /^[A-Z0-9]{2}\s?\d{1,4}$/.test(l)) || '');
    out.push({ airline: cabin ? head.slice(0, -cabin.length) : head, cabin, aircraft, flight, context: ctx.join(' | ') });
  }
  console.log(JSON.stringify({ panels: n, aircraft: out }, null, 1));
  await b.close();
})().catch(e => { console.error('ERR', e.message); process.exit(1); });
