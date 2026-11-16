# Claude working rules — travel-agent

This repo is a travel-planning method (published frameworks + playbooks) and
an agent that runs it. Read `_start_here.md` first — it's the 60-second
orientation and the map of what's in here.

---

## Entry point

**The `plan-trip` skill is the main entry point.** Almost anything that looks
like "help me plan a trip" should invoke it rather than being answered
freehand — its `PROTOCOL.md` (`.claude/skills/plan-trip/PROTOCOL.md`) encodes
the intake → architecture → itinerary → calibration → gear pipeline, each
stage pulling its method from a specific framework or playbook file instead of
generic travel advice. Read `SKILL.md` first for the pointer, then
`PROTOCOL.md` for the actual flow before running it.

## Read-only vs. editable

- **`frameworks/` and `playbooks/` are read-only reference.** They're the
  published methodology this repo teaches — hub-and-spoke architecture, the
  8-day novelty peak, jet-lag protocols, threat tiers, capsule wardrobes,
  gear kits, points strategy. Users fork this repo to *use* the method, not to
  rewrite it. Don't edit files in these directories while running `plan-trip`
  or answering a planning question.
- **`trips/` is where the work happens.** Every trip the skill plans lives at
  `trips/<destination-slug>-<duration>d/trip.md`, scaffolded from
  `trips/_template/trip.md`. This is the only directory `plan-trip` writes to.

## The pipeline

1. **Intake** — a short questionnaire, batched, asking only what wasn't
   already given.
2. **Architecture** — hub-and-spoke vs. circuit, decided from
   `frameworks/trip_architecture.md`.
3. **Itinerary** — a day skeleton respecting the 8-day novelty peak, with
   `frameworks/jet_lag_protocol.md` applied to arrival days.
4. **Calibration** — destination threat tier from
   `frameworks/situational_awareness.md`, posture and digital-axis notes.
5. **Gear** — a delta checklist against `playbooks/clothing_capsule.md` and
   `playbooks/gear_kit.md`, not a full manifest.

Full detail lives in `.claude/skills/plan-trip/PROTOCOL.md` — this section is
the map, not the spec.

## Tools (optional)

`tools/` holds discovery pipelines (see `tools/README.md`). `plan-trip` may run
them only in Stage 3b, when the user asks for a logistics scan:

- Flights: `tools/flights/` (Google Flights in headless Chromium). Keep batches
  small and paced; don't run more than a few workers.
- Lodging: `tools/airbnb/` runs only through `airbnb/sandbox.sh` (Landlock:
  no access to this repo or `$HOME`, outbound port 443 only), one search at a
  time. Never call the Airbnb MCP server outside the sandbox.
- Every price is a dated snapshot. It goes in the trip's `## Options (dated
  snapshots)`, never in `## Bookings`.
- If a tool fails or isn't installed, say so and leave the item `pending`.

## Git commit attribution

Commit as yourself. Don't add a "Co-Authored-By: Claude" (or any
Claude/Anthropic) trailer to commit messages, PR descriptions, or other
git-related output for this repo.

## Forking this publicly

`.gitignore` ignores everything under `trips/` except `_template/` and
`lisbon-8d/`, so real trips stay local by default. If you change that and
commit your own trips, `trips/` is not scrubbed for you — keep real personal data (passport numbers, exact addresses, booking
confirmations, anything you wouldn't want public) out of anything you commit.
