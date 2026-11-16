// Parse the visible text of a Google Flights results page into flight rows.
// Returns [{ dep, arr, airline, carriers, dur, stops, layover, price }]. Prices are numbers in the page currency.
// `airline` is the lead carrier; `carriers` is Google's full carrier line (codeshare and operating partners run together).
// For round-trip and multi-city searches only the first leg is listed, and the price is the trip total.
// Relies on English labels (hl=en). Accepts 12-hour ("7:05 PM") and 24-hour ("19:05") times.
const TIME = /^\d{1,2}:\d{2}(\s?[AP]M)?$/;
const TIME_ARR = /^\d{1,2}:\d{2}(\s?[AP]M)?(\+\d)?$/;
const PRICE = /^(?:[A-Z]{2,3}\s?|[^\w\s]{1,3}\s?)[\d.,]+$/; // $1,234 · €987 · CHF 1,234 · R$500

const toNumber = s => +s.replace(/[^\d]/g, '');

function parse(txt) {
  const lines = txt.split('\n').map(s => s.trim()).filter(Boolean);
  const flights = [];
  for (let i = 0; i < lines.length; i++) {
    if (!(TIME.test(lines[i]) && lines[i + 1] === '–' && TIME_ARR.test(lines[i + 2] || ''))) continue;
    const blk = lines.slice(i, i + 16);
    const pi = blk.findIndex(l => PRICE.test(l));
    if (pi < 0) continue;
    const dur = blk.find(l => /^\d+ hr( \d+ min)?$|^\d+ min$/.test(l)) || '';
    const stops = blk.find(l => /^Nonstop$|^\d+ stops?$/.test(l)) || '';
    const si = blk.indexOf(stops);
    const lay = stops && stops !== 'Nonstop' ? (blk[si + 1] || '') : '';
    flights.push({ dep: blk[0], arr: blk[2], airline: blk[3].split(/(?<=[a-z])(?=[A-Z])/)[0], carriers: blk[3], dur, stops, layover: /\d/.test(lay) ? lay : '', price: toNumber(blk[pi]) });
    i += pi;
  }
  return flights;
}

// "13 hr 25 min" -> 805
const minutes = d => { const h = /(\d+) hr/.exec(d || ''), m = /(\d+) min/.exec(d || ''); return (h ? +h[1] * 60 : 0) + (m ? +m[1] : 0); };

module.exports = { parse, minutes };
