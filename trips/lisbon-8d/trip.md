---
destination: Lisbon, Portugal
dates: 2027-05-10 to 2027-05-17
duration_days: 8
architecture: hub-and-spoke
threat_tier: 2
status: example
---

*This is an invented example. No real traveler, dates, or bookings — it exists to
demonstrate what the `plan-trip` skill produces, end to end.*

# Trip: Lisbon, Portugal

This file is generated and filled in by the `plan-trip` skill. Fill every
bracketed placeholder before treating a section as done, and leave a section
under "Open questions" rather than guessing at an answer.

## Intake

The answered questionnaire — one line per question, in the asker's own words
where it matters (budget band, comfort-with-attention level, hard constraints
are easy to flatten into something they didn't say).

- **Destination(s):** Lisbon, Portugal — first time in the country.
- **Total days:** 8.
- **Travel party:** Solo.
- **Home timezone:** US Eastern Time — inferred from "arriving on an overnight
  flight from the US East Coast," not independently confirmed. See Open
  questions.
- **Remote-work constraint:** No — pure leisure, "remote-work-free."
- **Energy pattern / novelty appetite:** Moderate novelty appetite, but
  explicitly "prone to decision fatigue" — wants some push but not a
  wall-to-wall schedule.
- **Budget band:** Mid-range.
- **Comfort-with-attention level:** Low-profile — "prefers not to stand out."
- **Hard constraints:** None stated. Flagged in Open questions rather than
  assumed to be none.

Stated interests to design around: food, walking, one day trip.

## Architecture decision

**Model:** hub-and-spoke

**Reasoning:** Single destination, solo traveler, 8 days, and the traveler
named decision fatigue directly in intake — that's the cognitive-load rule
from [[trip_architecture]] §3 in its most literal form: a solo
traveler has no one to offload navigation or logistics onto, and every extra
check-in or repack is executive-function spend that competes with the food-
and-walking experience the trip is actually for. There's no case for a
circuit here — one city, one stated day trip, no multi-region breadth to buy.
Lisbon becomes the hub for the full 8 nights; the one day trip the traveler
asked for is a spoke, not a relocation, so the trip never unpacks twice.

This also sizes correctly against the 8-day novelty-peak rule (§5 of the same
file): the 5–7 night hub window is built to match the point where novelty
peaks before hedonic adaptation sets in, and 8 days sits right at the top of
that window without running long enough to make Lisbon itself feel stale
before departure.

## Day skeleton

Day blocks, not hour-by-hour. Front-load novelty on arrival, respect the
decompression window, protect days 5–8 as the peak, and plan a deliberate
consolidation/reset before the trip's back half runs out.

A note on the fit: this trip is exactly 8 days, which is both the total
length and the width of the novelty-peak window in [[travel_philosophy]]
§2. Running the full decompression (1–4) → peak (5–8) arc inside an 8-day
trip means the peak has to compress to days 5–7, with day 8 given to
departure. That's the honest trade — per the peak-end rule in
[[trip_architecture]] §2, protecting the last 24 hours from a
rushed exit is worth more to the remembered trip than squeezing one more
peak activity into it.

| Day | Block | Notes |
|---|---|---|
| 1 | Arrival / decompression | Overnight eastbound flight from the US East Coast. Jet-lag protocol ([[jet_lag_protocol]]): target sleep onset ~1/3 into the flight on destination time, no alcohol in-flight, break the ~14–16hr fast with a high-protein breakfast at destination morning. This is a phase-advance shift, so seek bright light **after Tmin** — late morning into early afternoon outdoors, on foot, no ambitious plans. Early to bed on Lisbon time. |
| 2 | Decompression | Still inside the days 1–3 jet-lag window. Orientation walk through the hub neighborhood, one unhurried meal-anchored outing, no timed reservations yet — the goal is letting the clock finish shifting, not sightseeing output. |
| 3 | Decompression → acquisition | Learning the city's systems per the mastery-cycle framing in [[adhd_travel_design]] §"The mastery cycle, applied to destinations" — transit, the neighborhood grid, a couple of go-to food spots. Light frame, most of the day unscheduled. |
| 4 | Transition | Easing into the competence phase. One walking-heavy but low-stakes anchor (a neighborhood or riverfront route), otherwise open. Last low-key day before the peak window opens. |
| 5 | Novelty peak begins — day trip | Sintra (the stated day trip). This is the trip's engineered peak per the peak-end rule — a full day out of the hub, hills and palace grounds, genuinely different texture from hub-neighborhood walking. Train from Rossio; no overnight, returns to the same bed. |
| 6 | Novelty peak | Food-and-walking day as stated in intake — a petiscos-crawl style route through 2–3 neighborhoods, structured as 80% planned / 20% open per the decision-fatigue architecture in [[adhd_travel_design]]. |
| 7 | Novelty peak | Second signature walking day — river/Belém axis or an equivalent full-day route. Last full day before the consolidation block. |
| 8 | Consolidation / departure | Protect the ending deliberately: light morning, no new must-see items introduced, frictionless transfer to the airport. This is the "no rushed last day" rule from the template, applied literally — day 8 is departure, not a compressed extra peak day. |

## Threat calibration

**Tier:** 2 — Aware ([[situational_awareness]]). Portugal is a
low-crime, strong-rule-of-law destination overall, but Lisbon's dense tourist
corridors carry the region's standard organized-pickpocketing pattern — Tram
28 and the Alfama/Baixa foot traffic it runs through are the commonly cited
example. That's the difference between Tier 1 (no special precautions) and
Tier 2 (security as invisible background habit).

**Posture notes:** At Tier 2, this stays a set of automatic habits, not a
deliberate daily decision load — consistent with the traveler's stated
preference not to stand out. Front-pocket wallet or a bag worn body-front on
Tram 28 and other crowded transit; normal camera and phone use elsewhere.
Lisbon is a "details carry the signal" city per the regional-camouflage
pattern in `situational_awareness.md` — the gap between "obvious tourist" and
"blends in" here is a handful of specific tells (bulky athletic sneakers,
logo-heavy clothing, a phone held at arm's length while navigating), not a
wardrobe overhaul. Pre-load routes for the hub neighborhood rather than
navigating live from the phone mid-sidewalk; that alone is one of the more
diagnostic tourist tells in the source research. Match the local walking
pace, especially on the day-trip legs in Sintra's more spread-out layout.

**Digital-axis notes:** Portugal is EU/Schengen — D1, Open. Default VPN
hygiene covers this trip; no travel router, no secondary device, no
obfuscation. This destination and trip don't call for more than that.

## Gear & capsule checklist

Delta only, against the default capsule in [[clothing_capsule]]
and [[gear_kit]]. Lisbon in May is mild-to-warm with cool
evenings; Sintra runs cooler and mistier than the hub on the day-trip day.

- [ ] Confirm the primary shoe's tread on wet *calçada portuguesa* (the
      polished limestone paving) — Lisbon's hills and cobblestones are
      harder on grip than a flat city; no need for a dedicated hiking shoe,
      just check the sole before the trip, not on day 1.
- [ ] Pack the capsule's packable wind/rain shell (not the hardshell) —
      covers both Lisbon's occasional May shower and Sintra's cooler
      microclimate without the hardshell's unnecessary bulk for a mild
      climate.
- [ ] Add one small day pack, not in the default capsule — water, a layer,
      and camera for the Sintra day trip; the rest of the hub days don't
      need it.
- [ ] No digital-hardening additions — D1 tier means the default VPN-hygiene
      setup from `gear_kit.md` is sufficient; skip the travel router.

## Bookings

Nothing here is invented. Log only what the traveler has actually confirmed;
leave placeholders for what's still pending rather than filling in guessed
prices, dates, or providers.

| Item | Status | Notes |
|---|---|---|
| Flights | pending | Book a nonstop eastbound overnight (TAP / United / Delta-class carrier — check what actually flies nonstop from the traveler's home airport) aiming for a ~07:00–09:00 local arrival into Lisbon; that arrival window is what the jet-lag light-exposure plan on Day 1 above assumes. No route or price confirmed yet. |
| Lodging (hub) | pending | Central hub neighborhood (Baixa / Chiado / Alfama-adjacent) walkable to the metro and to Rossio station for the Sintra train. No property confirmed. |
| Lodging (spokes) | n/a | Hub-and-spoke architecture — Sintra is a day trip, not an overnight relocation, so no spoke lodging applies. |

## Open questions

Everything the intake didn't resolve. Don't let this section go empty just to
look finished — an honest open-questions list is more useful than a
prematurely closed one.

- Home airport/city on the US East Coast wasn't specified — it determines
  nonstop availability and the actual flight-time math behind the Day 1
  jet-lag timing above, which currently assumes a generic eastbound overnight
  routing.
- The day trip is assumed to be Sintra, the default Lisbon highlight, but the
  traveler only said "one day trip" — worth confirming against alternatives
  (Cascais, Óbidos, Évora) before booking the train or a tour.
- No hard constraints were given. Portugal is Schengen and a US passport
  covers a short stay visa-free, but if the traveler has other European trips
  in the same rolling 180-day window, the Schengen day-count budget should be
  checked before these dates are locked in.
