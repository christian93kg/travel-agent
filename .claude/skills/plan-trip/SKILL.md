---
name: plan-trip
description: Run a trip from a short intake conversation to a filled trip file — architecture (hub-and-spoke vs. circuit), a day skeleton respecting the 8-day novelty peak, threat calibration, and a gear delta checklist. Use when the user says "plan a trip", "help me plan X days in Y", "new trip", "plan my trip to <place>", or asks to scope/organize an upcoming trip.
---

# plan-trip

Turns a few answered questions into a filled trip file, built from the
frameworks and playbooks in this repo rather than generic travel advice.

## What it does

Runs intake → architecture → itinerary skeleton → threat calibration → gear
delta, in that order, pulling each stage's method from the relevant
`frameworks/` or `playbooks/` file rather than reasoning from scratch.

**`PROTOCOL.md` in this folder is the authoritative flow.** Read it before
running the skill — it has the actual questionnaire, the decision rules for
each stage, and the failure-mode shortcuts (fully-fixed itinerary, working
month). This file is the pointer, not the spec.

## Output contract

- Writes `trips/<destination-slug>-<duration>d/trip.md`, built from
  `trips/_template/trip.md`.
- Never edits anything under `frameworks/` or `playbooks/` — those are
  read-only reference for this skill, not output targets.
- Never invents bookings, prices, or confirmations as fact. Leave `Open
  questions` and the `Bookings` table honest about what's still unresolved.
