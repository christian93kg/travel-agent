# travel-agent

A travel-planning method, published as a set of frameworks and playbooks, plus
a Claude Code agent that runs them against your own trip. Fork it, tell Claude
Code where you're going, and it plans the trip against the same reasoning this
repo documents — not against generic travel-blog advice.

## 60-second orientation

1. Read `frameworks/trip_architecture.md` — the core decision this whole
   method turns on: hub-and-spoke vs. circuit, and why the 8-day novelty peak
   should size your trip.
2. Skim `trips/lisbon-8d/` — an invented worked example of the method applied
   end to end, from intake to a filled itinerary.
3. Run the `plan-trip` skill (`.claude/skills/plan-trip/`) on your own trip.
   It asks a short intake, then builds architecture, itinerary, threat
   calibration, and a gear checklist from the frameworks below.

## frameworks/ — the method

Read-only reference. This is what `plan-trip` reasons from; it isn't meant to
be edited.

| File | What it covers |
|---|---|
| [travel_philosophy](frameworks/travel_philosophy.md) | Why to front-load experiences and how trip duration maps to a memory-dividend curve — the reasoning underneath everything else in this repo. |
| [trip_architecture](frameworks/trip_architecture.md) | Hub-and-spoke vs. circuit, the cognitive-load rule, and the 8-day novelty peak that sizes a trip. |
| [adhd_travel_design](frameworks/adhd_travel_design.md) | Designing trip pace and structure for novelty-seeking / interest-driven brains — decision fatigue, mastery cycles, activation. |
| [jet_lag_protocol](frameworks/jet_lag_protocol.md) | Light, temperature, and food timing to reset circadian clocks on arrival, by direction of travel. |
| [situational_awareness](frameworks/situational_awareness.md) | Threat-tier calibration and baseline/anomaly awareness for a destination. |

## playbooks/ — the execution layer

Read-only reference, more tactical than `frameworks/`.

| File | What it covers |
|---|---|
| [clothing_capsule](playbooks/clothing_capsule.md) | A capsule wardrobe system sized to trip length and climate. |
| [gear_kit](playbooks/gear_kit.md) | The travel gear kit — what earns a spot in the bag and why. |
| [gear_intake_workflow](playbooks/gear_intake_workflow.md) | A batching method for researching 8–12 open gear decisions in one focused pass, instead of one purchase at a time. |
| [working_month_method](playbooks/working_month_method.md) | Structuring an extended remote-work stay, not a vacation-paced trip. |
| [rotation_templates](playbooks/rotation_templates.md) | A yearly calendar of multi-month city blocks for long-stay, location-independent travel. |
| [points_and_seasons](playbooks/points_and_seasons.md) | Points/miles redemption strategy and shoulder-season timing by region. |
| [social_field_guide](playbooks/social_field_guide.md) | Reading and operating in unfamiliar social contexts while traveling. |
| [pre_trip_opsec](playbooks/opsec/pre_trip_opsec.md) | Preparation before departure — what to lock down before you leave. |
| [in_transit_security](playbooks/opsec/in_transit_security.md) | Situational security posture while moving. |
| [communication_protocols](playbooks/opsec/communication_protocols.md) | How and when to communicate location/status while traveling. |

## trips/ — where your work goes

[trips/_template/trip.md](trips/_template/trip.md) is the skeleton `plan-trip` fills in.
[trips/lisbon-8d/trip.md](trips/lisbon-8d/trip.md) is a worked example — read it before your first
real trip to see the method's output, not just its rules. Your own trips land
at `trips/<destination-slug>-<duration>d/trip.md`.

## tools/ and research/ — optional extras

[tools/](tools/README.md) holds discovery pipelines: Google Flights search and a
Landlock-sandboxed Airbnb search.
`plan-trip` uses them in its optional Stage 3b logistics scan. Results are
dated price snapshots, never bookings.
[research/](research/README.md) holds dated research reports on flight
booking, disruptions, hotels, award travel and airport/rail tactics.

See `CLAUDE.md` for the full agent operating rules and the read-only/editable
split between `frameworks/`, `playbooks/`, and `trips/`.
