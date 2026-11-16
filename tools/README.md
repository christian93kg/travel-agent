# tools/ — flight and lodging discovery

Optional pipelines that `plan-trip` can use in its Stage 3b logistics scan, or that you can run by hand:

- **[flights/](#flights)**: Google Flights in headless Chromium. Any route, cabin, passenger count, round trip or multi-city. Batched, resumable, with a cheapest / cheapest-nonstop / under-a-time-cap summary per search.
- **[airbnb/](#airbnb-sandboxed)**: Airbnb search and listing details through the open-source [`@openbnb/mcp-server-airbnb`](https://www.npmjs.com/package/@openbnb/mcp-server-airbnb) MCP server, run inside a Landlock sandbox. Linux only.

> **Prices are snapshots.** Nothing here books or holds anything. A price is what one page showed at one moment; record it with the date (the trip template's `## Options (dated snapshots)` section), never in `## Bookings`.
>
> **These tools read public web pages.** No API keys are involved, so they break when a page layout changes, and using them is subject to each site's terms. Keep volume low: the defaults pace requests on purpose.

## Setup

```bash
cd tools
./setup.sh               # npm ci + Playwright's Chromium (~120 MB, once). Needs Node 20+.
./setup.sh --portable    # same, but first downloads a private Node into tools/.node (hosts without npm)
```

Settings, all optional, as environment variables:

| Variable | Default | Effect |
|---|---|---|
| `TA_CURRENCY` | `USD` | Currency Google Flights shows prices in |
| `TA_GL` | `us` | Google country (affects which sellers and fares appear) |
| `TZ` | this machine's timezone | Timezone of the headless browser |

Outputs go wherever you point them; `tools/out/` is git-ignored for that purpose.

---

## Flights

| Script | What it does |
|---|---|
| `flights/day.js FROM TO DATE` | Every nonstop on one route and day, sorted by departure, plus Google's price-insight line ("Prices are currently typical"). `MAXH=12` lists all flights under 12 h instead. |
| `flights/tfs.js '<spec>'` | One search, printed as JSON. `--url` prints the Google Flights link only (no browser needed). |
| `flights/specgen.js plan.json > specs.json` | Expands origins × destinations × dates (× return dates × cabins) into a specs file. |
| `flights/batch.js specs.json out.json [workers]` | Runs every spec, resumable: rerun it to finish what's left. Default 2 workers; keep it ≤ 4. |
| `flights/summ.js out.json [idRegex] [--matrix]` | One line per search, or a route × date grid of the cheapest price. |
| `flights/aircraft.js '<spec>'` | Aircraft type and flight number for each result (opens each "Flight details" panel). |
| `flights/fares.js '<spec>' '<dep time>' <price>` | Opens one result and prints its booking options (sellers, fare families, bag fees). |

### Spec format

```json
{ "id": "lis-out", "legs": [{ "date": "2027-04-10", "from": "JFK", "to": "LIS", "maxStops": 0, "airline": "TP" }],
  "cabin": 1, "adults": 1, "maxMin": 900 }
```

- `legs`: one leg = one-way; two mirrored legs = round trip; anything else = multi-city. `maxStops` and `airline` (a code or a list) are optional per leg.
- `cabin`: 1 economy, 2 premium economy, 3 business, 4 first.
- `maxMin`: the time cap for `cheapest_under_cap` (default 1080 min = 18 h).
- On round-trip and multi-city searches Google lists the first leg's flights, and **prices are trip totals**.

### A typical run

```bash
node flights/specgen.js flights/examples/lisbon.plan.json > out/lis.specs.json   # 6 round trips
node flights/batch.js out/lis.specs.json out/lis.json 2
node flights/summ.js out/lis.json --matrix
```

`batch.js` writes after every search. Each result holds `n` (flights found), `cheapest`, `cheapest_nonstop`, `cheapest_under_cap`, `top` (first 10 rows), `at` (timestamp) and `blocked` (`"captcha"` / `"consent"` / `null`). Each flight row is `{ dep, arr, airline, carriers, dur, stops, layover, price }`.

### How it works, and its quirks

- Searches are built as Google's own `tfs` URL parameter, a protobuf that `flights/tfs.js` encodes byte-for-byte as Google does (field map in the file's header). That is what makes premium cabins, airline filters and multi-city work; the plain-language `?q=` URL ignores cabin words.
- Google sometimes serves a fresh session a page that stays on "No results returned". Reloading doesn't fix it; a new browser context does, so every script retries in a fresh context (up to 3 times) before believing a route is empty.
- Multi-city pages load slowly (15–20 s). The scripts wait for "N results returned" for up to 50 s.
- Parsing reads the page's English text, so the page language stays English whatever `TA_GL` you choose.
- If a result comes back `blocked`, stop and slow down rather than retrying in a loop.

---

## Airbnb (sandboxed)

Lodging search goes through the open-source `@openbnb/mcp-server-airbnb` MCP server (pinned at 0.3.0). The server makes plain HTTPS requests to airbnb.com, plus geocoding through photon.komoot.io / nominatim.openstreetmap.org. Every script here starts it **inside a Landlock sandbox**, so a compromised or misbehaving dependency can't read your files or reach anything but HTTPS.

**Linux only.** Landlock is a Linux kernel feature; the sandbox needs Landlock ABI 6 or newer (kernel 6.12+). Check with `python3 airbnb/landlock_exec.py --abi`.

### What the sandbox allows

| Resource | Allowed | Blocked |
|---|---|---|
| Read / execute | `/usr`, `/lib`, `/lib64`, `/bin`, `/etc`, `/proc`, `/sys/devices/system/cpu`, your Node install, `tools/node_modules` | everything else, including this repo and the rest of `$HOME` |
| Write | `tools/airbnb/scratch/` only (also the server's `HOME` and `TMPDIR`) | everything else |
| Network | outbound TCP 443 | other TCP ports, and any TCP listen |
| Processes | — | signals and abstract unix sockets to processes outside the sandbox |
| Environment | `HOME`, `TMPDIR`, `PATH`, `LANG` | every inherited variable (no tokens leak in) |
| Privileges | `NO_NEW_PRIVS` | setuid escalation |

Limits, stated plainly: Landlock doesn't cover UDP, so DNS (and any other UDP) is not restricted. `/proc` is readable, which exposes other processes' command lines. `landlock_exec.py` refuses to run rather than fall back to a weaker policy.

Run the isolation check after setup and after any change to the sandbox:

```bash
./airbnb/selftest.sh      # PASS/FAIL per check, ends with SELFTEST OK (makes no Airbnb requests)
```

### robots.txt

Airbnb's robots.txt disallows the search pages, and the MCP server respects it unless told otherwise. **`sandbox.sh` passes `--ignore-robots-txt` by default**: these scripts are meant for occasional personal trip planning, one search at a time, 4–8 s apart. Whether that fits Airbnb's terms for your use is your decision. To respect robots.txt instead (searches will then be refused):

```bash
BNB_RESPECT_ROBOTS=1 node airbnb/sweep.js ...
```

`BNB_NO_SANDBOX=1` runs the server without the sandbox. It never ignores robots.txt: the override only exists inside the sandbox.

### Scripts

| Script | What it does |
|---|---|
| `airbnb/sweep.js jobs.json out.json` | One search per job, in order, 4–8 s apart. Per job: p25 / median / p75 nightly price and the 3 cheapest well-rated listings. Optionally opens listing details until enough candidates pass an amenity check. Resumable. |
| `airbnb/zones.js zones.json out.json` | Pages through one city's results, tags each listing with the nearest neighbourhood you named (radius in km), and opens details for the cheapest well-rated in-zone listings. |
| `airbnb/details.js CHECKIN CHECKOUT id [id...]` | Amenity comparison table for specific listings (workspace, wifi speed, washer/dryer, AC, lift, kitchen, cameras, what's not included). `ADULTS`, `OUT` env. Resumable. |
| `airbnb/client.js tools` · `airbnb/client.js '<search args>'` | Raw access: list the server's tools, or run one call and print the result. `MAXC` caps output (0 = no cap). |
| `airbnb/selftest.sh` | The isolation check above. |

**Jobs file** (`sweep.js`), see `airbnb/examples/lisbon.jobs.json`:

```json
[{ "id": "lisbon-work", "location": "Lisbon, Portugal", "checkin": "2027-04-10", "checkout": "2027-04-17",
   "adults": 1, "propertyType": "entire_home",
   "verify": { "need": ["workspace", "wifi", "!shared"], "pass": 2, "max": 4 } }]
```

- `propertyType`: `entire_home`, `private_room`, `shared_room` or `hotel_room`.
- `minRating` (4.8) and `minReviews` (20) set what counts as a pick.
- `verify.need` names `amenities()` keys that must be true; prefix `!` for must-be-false. Details open on the cheapest well-rated listings until `pass` succeed or `max` have been checked.

**Zones file** (`zones.js`), see `airbnb/examples/lisbon.zones.json`: `location`, dates, `adults`, `zones: [{ name, lat, lng, radiusKm }]`, plus optional `pages` (5, max 15), `details` (8), `minRating`, `minReviews`, `roomsMatch` (a regex on the rooms line, e.g. `"^(1|2) bedrooms?"`) and `need`.

### Output

Listing rows look like `{ id, url, name, rooms, badge, rating, reviews, total, night, currency, lat, lng, priceLabel }`, where `total` is the stay total and `night` is total ÷ nights. Prices come in whatever currency the server's request returns (usually USD).

Quirks:
- Airbnb's first results page leans toward top-rated listings, so medians are first-page figures, not the whole market.
- Listing details don't reliably say whether a place is an entire home: filter with `propertyType` in the search. `shared` is a text match, so `!shared` means "not known to be shared".
- One search returns about 18 listings; `zones.js` pages further for a fuller picture of a city.

---

## Troubleshooting

- **Stopping a long run:** kill it by exact PID (`ps -eo pid,args | grep "[n]ode flights/batch.js"`, then `kill <pid>`). Don't use `pkill -f` with a broad pattern; it can match your own shell or agent session.
- **`Cannot find module 'playwright'`:** run `./setup.sh` from `tools/`.
- **Chromium missing:** `npx playwright install chromium`.
- **Empty results everywhere:** open the URL from `node flights/tfs.js --url '<spec>'` in a normal browser. If the page itself is empty, the search is the problem (dates too far out, a typo in an airport code); if not, Google's layout may have changed and `flights/parse.js` needs updating.
