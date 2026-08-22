---
destination:
dates:
duration_days:
architecture:
threat_tier:
status: draft
---

# Trip: <destination>

This file is generated and filled in by the `plan-trip` skill. Frontmatter
`architecture` takes `hub-and-spoke` or `circuit`, set during Stage 2. Fill every
bracketed placeholder before treating a section as done, and leave a section
under "Open questions" rather than guessing at an answer.

## Intake

The answered questionnaire — one line per question, in the asker's own words
where it matters (budget band, comfort-with-attention level, hard constraints
are easy to flatten into something they didn't say).

- **Destination(s):** [known, or the shortlist if still open]
- **Total days:** [number]
- **Travel party:** [solo / partner / friends / family — headcount]
- **Home timezone:** [ ]
- **Remote-work constraint:** [yes/no — if yes, note the working-hours window]
- **Energy pattern / novelty appetite:** [high-novelty pace vs. slower/decompression-heavy]
- **Budget band:** [rough tier, not a number unless the asker gave one]
- **Comfort-with-attention level:** [low-profile vs. doesn't care]
- **Hard constraints:** [dates that can't move, mobility limits, visa issues, anything non-negotiable]

## Architecture decision

**Model:** hub-and-spoke | circuit

**Reasoning:** [Cite the cognitive-load rule and the 8-day novelty-peak sizing
from [[trip_architecture]]. State why this trip's day count, party,
and destination shape favor one model over the other. If circuit, name the
anchor+satellite compromise used to blunt the packing/check-in tax.]

## Day skeleton

Day blocks, not hour-by-hour. Front-load novelty on arrival, respect the
decompression window, protect days 5–8 as the peak, and plan a deliberate
consolidation/reset before the trip's back half runs out.

| Day | Block | Notes |
|---|---|---|
| 1 | Arrival / decompression | [jet-lag protocol notes if crossing time zones] |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | Novelty peak begins | |
| 6 | | |
| 7 | | |
| 8 | Novelty peak / signature day | |
| ... | Consolidation / reset | |
| Last | Departure — protect the ending, no rushed last day | |

## Threat calibration

**Tier:** [per [[situational_awareness]]]

**Posture notes:** [baseline behavior, situational awareness adjustments for
this destination/party]

**Digital-axis notes:** [device, connectivity, and data-exposure posture —
only what this destination/trip actually calls for]

## Gear & capsule checklist

Delta only — what's different from the reader's default capsule
([[clothing_capsule]], [[gear_kit]]), not a full
manifest.

- [ ]
- [ ]
- [ ]

## Bookings

Nothing here is invented. Log only what the traveler has actually confirmed;
leave placeholders for what's still pending rather than filling in guessed
prices, dates, or providers.

| Item | Status | Notes |
|---|---|---|
| Flights | pending / booked | |
| Lodging (hub) | pending / booked | |
| Lodging (spokes) | pending / booked | |

## Open questions

Everything the intake didn't resolve. Don't let this section go empty just to
look finished — an honest open-questions list is more useful than a
prematurely closed one.

-
