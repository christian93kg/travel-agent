# Gear Intake Workflow

**What this workflow does:** a lot of gear decisions get stuck because "I'll figure out the right brand eventually" quietly turns into never researching it. This is the intake-table method for closing that gap — one row per undecided gear slot, a priority tag, and a process for batching enough rows together to research them in one focused session instead of one item at a time.

## Standing rules

These apply to every row in the table, regardless of category:

- **Multi-use minimum.** A clothing item should cover at least 3 of your defined use-modes (see [[clothing_capsule]]); a piece of gear should collapse at least 2 single-purpose items into one.
- **Neutral by default.** No logos, no luxury-brand markers, no graphic prints — check candidates against the tier framework in [gray-man tier framework](../frameworks/situational_awareness.md) before locking in a pick.
- **Volume-disciplined.** Decide your total kit volume/weight budget up front, and log the volume/weight class for every row. A great pick that blows the budget isn't actually a pick.
- **BIFL bias.** Default toward durable, repairable, buy-once gear. The logic borrows from Bill Perkins' *Die With Zero*: experiences are the point of the budget, but the gear that enables experiences should last long enough that the budget keeps flowing to experiences instead of to replacing broken gear.
- **The 90/25 rule.** If an option gets you 90% of the effectiveness of the top pick at 25% of the price, take the cheaper one as the default tiebreaker — save full price for the cases where the gap is real.
- **No hard price ceiling per row.** Quality dictates the floor, not a budget cap. The volume/weight discipline above is what keeps the kit in check, not price.

## The table

One row per undecided slot. Columns:

| Column | What goes here |
|---|---|
| Slot | The gear category (e.g. "packable shell," "e-reader") |
| Currently using | What you have now, if anything, and why it's being reconsidered |
| Candidates known | Brands/models already on your radar, before research |
| Vol/weight class | Rough size/weight bucket — keeps the volume budget honest |
| Tier check | Pass/fail/TBD against the gray-man tier framework |
| Multi-use score (1–5) | How many use-modes this realistically covers |
| Priority (H/M/L/skip) | See below |
| Decision status | Open / researching / decided, with a link once it's decided |

**Priority key.** **H** — research now, goes in the next batch. **M** — research after the H batch lands. **L** — nice-to-have; drop if the batch is getting unwieldy. **skip** — out of scope; note why so it doesn't get re-added later.

### Blank example

| Slot | Currently using | Candidates known | Vol/weight | Tier check | Multi-use | Priority | Decision status |
|---|---|---|---|---|---|---|---|
| Packable towel | none | PackTowl, Sea to Summit DryLite | small | n/a | 3 | L | open |
| Travel router | none | GL.iNet Beryl AX, Slate AX | small | n/a | 4 | H | open |
| Daypack | current pack reads as outdoor-tourist gear in dense cities | Bellroy, Aer, no-name commuter pack | Tier-1/2 target | TBD | TBD | H | open |
| Sunglasses | drugstore pair | TBD | small | Tier 1–4 if unbranded | 3 | M | open |

## Batching into a research session

Don't research one row at a time — it's slow, and each search loses the comparison context of the others. Instead, let H-priority rows accumulate and batch them:

1. **Wait for 8–12 H-priority rows.** Fewer than that and a batched session doesn't save much time; more than that and depth per category starts dropping.
2. **Group by category, not by priority alone.** Clothing-core rows research better together — they share fabric and durability sources — as do tech-kit rows, as do sleep/comfort rows. A reasonable three-batch split: clothing capsule core, tech kit, sleep/comfort/fitness.
3. **Write one research prompt per batch** listing every H row in that batch, stating what's already decided so the research doesn't re-litigate settled picks, and asking for the same comparison axes across every candidate — durability, price, tier fit, multi-use fit — so the results come back in a shape you can drop straight into the table.
4. **Run the session as a single bounded block**, not an open-ended background task — a dedicated research pass, whether that's your own focused search or a delegated one.

## Ingesting results back in

1. Read the results against the table, not in isolation — extract only what answers the specific rows in that batch.
2. Update each row's candidates, tier check, and decision status columns.
3. For rows that reach a clear winner, close them out: move the pick into [[clothing_capsule]] or [[gear_kit]] as appropriate, and mark the intake row decided.
4. For rows that didn't resolve cleanly, leave them open with the narrowed candidate list — that's still progress, even without a final pick.

## Related

- [[clothing_capsule]] — where decided clothing rows land.
- [[gear_kit]] — where decided non-clothing gear rows land.
- [gray-man tier framework](../frameworks/situational_awareness.md) — the tier framework referenced in the standing rules and the table's tier-check column.
