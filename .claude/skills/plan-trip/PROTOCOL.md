# plan-trip protocol

The authoritative flow for the `plan-trip` skill. Five stages, run in order,
each one reading its method from a specific framework or playbook file rather
than freehand — that's what keeps output from drifting into generic travel
advice. Skip a stage only when a failure mode below says to.

---

## Stage 1 — INTAKE

Ask only what the user hasn't already given you, and batch the remaining
questions into one message rather than a back-and-forth. Don't ask about
something they already stated in the first message, even loosely.

The questionnaire:

1. **Destination(s)** — known, or a shortlist if still open.
2. **Total days** — a number, or a range if they're flexible.
3. **Travel party** — solo, partner, friends, family; headcount.
4. **Home timezone** — needed for the jet-lag protocol in Stage 3.
5. **Remote-work constraint** — yes/no. If yes, get the working-hours window;
   it caps how aggressive the day skeleton can be on weekdays.
6. **Energy pattern / novelty appetite** — does this person want a
   high-novelty pace or a slower, decompression-heavy trip? This bends the
   Stage 3 skeleton more than any other answer.
7. **Budget band** — a rough tier is enough. Don't press for an exact number.
8. **Comfort-with-attention level** — low-profile traveler vs. doesn't care.
   Feeds Stage 4 posture notes.
9. **Hard constraints** — dates that can't move, mobility limits, visa
   issues, anything non-negotiable.

Write the answers into the trip file's `## Intake` section verbatim where it
matters — don't flatten a hedged answer ("budget's tight but I'll stretch for
one splurge night") into a clean category.

---

## Stage 2 — ARCHITECTURE

Decide hub-and-spoke vs. circuit using `frameworks/trip_architecture.md`:
the cognitive-load rule (each new check-in, each repacking cycle taxes the
same executive-function budget the trip is trying to spend on the
destination), and the 8-day novelty-peak sizing (a hub-and-spoke week protects
days 5–8 as the peak; a circuit trades that protection for breadth).

- Default to hub-and-spoke unless the trip genuinely needs breadth (multiple
  distinct regions, point-to-point trekking, a working month split across
  bases) or the traveler explicitly wants a moving trip.
- If circuit: use the anchor+satellite pattern from
  `frameworks/trip_architecture.md` to cap the number of full relocations —
  don't let it decay into a new hotel every night.
- Write the decision and the reasoning into `## Architecture decision` in the
  trip file. State *why*, not just the model name — the file should be
  legible to someone who never saw this conversation.

For non-solo parties, the cognitive-load rule still applies — it just moves
from one head to the group: navigation can be split, but decisions are made
jointly and slower, so decision fatigue compounds rather than divides. If
anything, a group tilts the call further toward hub-and-spoke; reframe the
reasoning in the party's terms rather than copying solo language.

---

## Stage 3 — ITINERARY SKELETON

Build day blocks, not an hour-by-hour schedule. Two shaping rules stack here:

- **The novelty curve** (`frameworks/travel_philosophy` framing, applied via
  `frameworks/trip_architecture.md`): decompression on days 1–4, novelty peak
  on days 5–8, and a deliberate consolidation/reset before the trip ends —
  never let the last day be a scramble. Front-load the highest-novelty spoke
  or activity into the peak window, not into day 1 when the traveler is still
  jet-lagged.
- **Jet lag** (`frameworks/jet_lag_protocol.md`): for any arrival leg crossing
  time zones, apply the protocol to the first 1–3 days — light exposure
  direction, meal timing, sleep-environment notes. Note it inline on the
  affected day rows rather than as a separate section; it's a day-1–3
  concern, not a trip-wide one.

If the trip is short enough that the 8-day curve doesn't fully apply (a
long weekend, a 4-day trip), say so explicitly rather than forcing a peak that
isn't there — compress to decompression + a single peak window + departure.
For 5–7 days, scale the phases proportionally instead: roughly the first 40%
of days to acquisition/decompression, the peak in the back half, and the final
day still protected for consolidation and departure — the curve compresses,
its order doesn't.

Boundary case — trip length equals the peak window (exactly 8 days): the
curve and a protected departure day can't both fit at full width. Shorten the
peak by one day (peak on days 5–7) and give the final day wholly to
consolidation and departure, per the peak-end rule — a compressed peak costs
less than a rushed ending. State the compression in the plan rather than
silently reshaping the template's day rows.

---

## Stage 4 — CALIBRATION

Look up the destination's threat tier in `frameworks/situational_awareness.md`
and write the tier plus posture notes into `## Threat calibration`. Posture
notes should be specific to the tier and the traveler's stated
comfort-with-attention level from intake — a tier-1 low-key destination and a
tier-3 high-attention one don't get the same paragraph. Add digital-axis notes
(device, connectivity, data-exposure posture) only to the extent this
destination and trip actually call for it — don't pad a tier-1 city trip with
opsec boilerplate it doesn't need.

---

## Stage 5 — GEAR

Point at `playbooks/clothing_capsule.md` and `playbooks/gear_kit.md` rather
than restating them. Produce a **delta checklist**: what's different from the
reader's default capsule for this specific trip (climate, activity mix,
threat tier, duration) — not a full packing list. If the trip's gear needs are
close to the default capsule, the delta can be short; don't manufacture items
to fill space.

---

## Output contract

- Write to `trips/<destination-slug>-<duration>d/trip.md`, copied from
  `trips/_template/trip.md` and filled in per the stages above. Slug the
  destination lowercase, hyphenated (`lisbon`, `tokyo-osaka`).
- Every section in the template gets filled or explicitly marked open —
  never delete a section because a stage didn't produce enough to fill it.
- `## Open questions` stays honest. If intake left something unresolved,
  it goes here, not smoothed over.
- `## Bookings` never contains invented prices, confirmation numbers, or
  dates. Only log what the traveler has actually confirmed; everything else
  is `pending`.
- Never write to anything under `frameworks/` or `playbooks/` — read-only
  reference for this skill.

---

## Failure modes

- **User gives a fully-fixed itinerary** (dates, cities, and route already
  locked). Skip Stages 2–3 — there's no architecture decision left to make.
  Go straight to Stage 4 (calibration) and Stage 5 (gear) against the
  itinerary as given, and note in `## Architecture decision` that the
  itinerary was fixed by the user rather than derived.
- **User wants a working month** (an extended stay with a remote-work
  constraint spanning weeks, not a vacation). Don't force this protocol's
  day-skeleton shape onto it — route to `playbooks/working_month_method.md`
  and use its structure for Stage 3 instead. Stages 1, 2, 4, and 5 still
  apply.
