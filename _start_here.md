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
| [[travel_philosophy]] | Why to front-load experiences and how trip duration maps to a memory-dividend curve — the reasoning underneath everything else in this repo. |
| [[trip_architecture]] | Hub-and-spoke vs. circuit, the cognitive-load rule, and the 8-day novelty peak that sizes a trip. |
| [[adhd_travel_design]] | Designing trip pace and structure for novelty-seeking / interest-driven brains — decision fatigue, mastery cycles, activation. |
| [[jet_lag_protocol]] | Light, temperature, and food timing to reset circadian clocks on arrival, by direction of travel. |
| [[situational_awareness]] | Threat-tier calibration and baseline/anomaly awareness for a destination. |

## playbooks/ — the execution layer

Read-only reference, more tactical than `frameworks/`.

| File | What it covers |
|---|---|
| [[clothing_capsule]] | A capsule wardrobe system sized to trip length and climate. |
| [[gear_kit]] | The travel gear kit — what earns a spot in the bag and why. |
| [[gear_intake_workflow]] | How to evaluate a new piece of gear before it replaces something in the kit. |
| [[working_month_method]] | Structuring an extended remote-work stay, not a vacation-paced trip. |
| [[rotation_templates]] | Packing rotation templates for different trip lengths. |
| [[points_and_seasons]] | Points/miles redemption strategy and shoulder-season timing by region. |
| [[social_field_guide]] | Reading and operating in unfamiliar social contexts while traveling. |
| [[pre_trip_opsec]] | Preparation before departure — what to lock down before you leave. |
| [[in_transit_security]] | Situational security posture while moving. |
| [[communication_protocols]] | How and when to communicate location/status while traveling. |

## trips/ — where your work goes

[trips/_template/trip.md](trips/_template/trip.md) is the skeleton `plan-trip` fills in.
[trips/lisbon-8d/trip.md](trips/lisbon-8d/trip.md) is a worked example — read it before your first
real trip to see the method's output, not just its rules. Your own trips land
at `trips/<destination-slug>-<duration>d/trip.md`.

See `CLAUDE.md` for the full agent operating rules and the read-only/editable
split between `frameworks/`, `playbooks/`, and `trips/`.
