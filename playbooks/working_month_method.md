# Working a Month Abroad on Home-Office Hours

**What this framework claims:** When you work a full remote month from another continent but stay on your home employer's clock, the trip stops being "vacation with wifi" and becomes a scheduling problem first, a destination problem second. This is a method for evaluating candidate cities against that specific scenario — one where daily-rhythm fit and training/fitness access matter more than sightseeing density, and where a handful of unglamorous infrastructure checks (fiber upload speed, gym contract terms, kitchen-close times) decide whether the month actually works. It's a generalized scoring method plus a set of verification scripts, not a review of any particular city.

## The inversion: rhythm and gym access outrank scenery

Score candidate cities on six factors, weighted roughly like this:

| Factor | Weight |
|---|---|
| Daily-rhythm fit | 30% |
| Gym/fitness access | 25% |
| Internet quality (upload, not just "has wifi") | 15% |
| Daylight & weather | 10% |
| Cost | 10% |
| Solo logistics / social access | 10% |

Re-weight to taste, but keep rhythm and gym access on top. The logic: you're spending 8+ hours a day at a desk on a schedule set by a timezone thousands of miles away. The other 14-16 hours are when the trip either works or doesn't, and that's governed almost entirely by whether local life — kitchens, shops, transit, gyms — is open when you're actually free. A beautiful city where the gym locks you out and the kitchens close before you finish work is a worse month than an unremarkable one that fits your clock.

## Timezone-offset arithmetic

Do this before anything else:

1. **Convert your home-office hours to local time** at the destination, for at least two shift variants (your standard hours, and a version shifted an hour or two earlier if your employer allows flexibility).
2. **Find the free block** that falls before and after work in local time.
3. **Check that free block against local infrastructure hours** — not generic city info, the *specific* hours of the gym, supermarket, and kitchens near where you'd actually be sitting.

If your workday lands in the local evening (common when your home timezone is many hours behind the destination), your entire morning is free — every weekday, not just weekends. That's the whole game: gyms, markets, and parks that are dead in the morning and crowded in the evening now work in your favor, and "gym crowding" should be evaluated at whatever hour you're actually free, not at generic peak hours.

**The kitchen-close and supermarket-hours check.** This is the operational filter that decides whether an evening-shifted schedule is survivable. If your shifted workday ends at, say, 22:00 local, you need a place where kitchens are still serving at 22:00. Dinner culture varies enormously by country: some Southern/Mediterranean-culture cities run kitchens to 23:30-24:00, while many Central European cities close kitchens by 21:00-21:30 — a finish time that works in one country fails in the other by an hour or more. Run the same check on groceries: find out whether the dominant local supermarket chain closes on Sundays (common across much of Europe) and whether it delivers — a Sunday closure is a non-issue if you shop mid-morning, but a real failure mode if you'd planned to shop after work.

**The "2.5-day weekend" property.** An evening-shifted schedule plus a normal two-day weekend produces more downtime than it looks like on paper. Friday's free time starts the moment work ends that evening; Saturday and Sunday are fully open; and Monday morning is free again, right up until you clock in that afternoon. Structurally that's closer to two and a half open days than two — plan your one big weekend trip to start Saturday morning, and treat Monday morning as a genuine extension of the weekend rather than a lost half-day of recovery.

## Internet: verify FTTH and upload speed, not "has wifi"

"Wifi included" is a marketing checkbox, not a specification. What matters for a day of video calls is fiber-to-the-home (FTTH) service and, specifically, the *upload* number — video calls are upload-bound, and cable- or DSL-heavy markets can post fine download numbers while upload lags badly behind.

Vetting script:

- **Before booking**, ask the host directly: "Is the internet FTTH fiber, or cable/DSL? What's the contracted speed? Can I connect by Ethernet?" Ask for a speedtest screenshot taken at your peak usage hour, in their local time.
- **On arrival, before any meeting**, run a wired speedtest, ping a server near your home region and watch the jitter, and place a full test video call at the exact local hour you'll actually be working.
- **Watch for the peak-hour congestion trap.** Mobile networks in some markets degrade sharply at evening peak while fixed fiber in the same country barely moves at the same hour. Treat a phone hotspot as emergency backup only, never your primary connection for calls, and test it separately from the apartment's fixed line.

## European gym-contract models vs. month passes

The US norm of a simple month-to-month gym membership isn't universal. In much of continental Europe, the default commercial-gym contract runs 12 months with a statutory notice period, which doesn't accommodate a 30-day visitor at all. Look specifically for chains or independent clubs that publish a flexible, "no permanence" / cancel-anytime tier — usually at a modest premium over the long-term rate, and increasingly common as budget chains compete for exactly this kind of short-term member.

When comparing options, check three things beyond the sticker price:

1. **The actual cancellation terms**, in writing — not the marketing headline.
2. **Opening hours against your real free block** — a gym that opens at 06:00 is irrelevant if your only free window is 20:00-22:00, and vice versa.
3. **Equipment depth.** Budget chains built for a local commuting-hours crowd frequently cap fixed dumbbell weight or skip specific equipment (a hack squat, a cable crossover) that a fuller free-weight gym would carry. Verify equipment in person on day one before committing to a routine built around it; a cancel-anytime contract makes switching gyms mid-trip a non-event if the first pick falls short.

## Accommodation verification

Listing photos and amenity tags are marketing, not verification. Filter for:

- **A real desk and a chair with back support** — not a stool or dining chair. You'll be sitting for most of an 8-hour workday, and an ergonomic detail that reads as trivial in a photo is not trivial six weeks in.
- **A room with a door that closes** — so a late call doesn't broadcast into the rest of the apartment (or a shared wall). Studios routinely fail this filter; a true one-bedroom often doesn't.
- **An in-unit washer**, if you're training or exercising most days — laundry volume adds up fast, and relying on a laundromat at that volume is friction you don't need.
- **Confirmed FTTH fiber**, per the internet section above.

Message the host directly with the desk/chair/fiber questions before paying. A host's specificity — and willingness to send an actual photo of the desk setup — is itself a useful signal about how seriously the listing takes remote workers versus how well it photographs for tourists.

## The search-geometry confound in accommodation pricing

One pricing trap worth flagging before you conclude a city is "too expensive": how you search changes what you see. A **named-city search** (typing a city's name into a booking site) surfaces mostly city-center inventory, priced accordingly. A **map-pan search** — dragging the map across the same country instead of searching by name — turns up small towns and satellite suburbs at meaningfully lower prices for comparable amenities. One informal month-long comparison across a dozen-plus European regions (same filters, same dates) found map-panned prices running roughly half of what the well-known named cities in the same areas quoted — in the sharpest case, a small coastal town roughly 40km from a major named city came in at about a third of that city's per-night rate. Treat those numbers as one traveler's scan, not a study — but the direction of the effect is easy to verify yourself in a ten-minute search. Before writing off a destination as unaffordable, pan the map around it — a short commute-equivalent to a satellite town can cut the accommodation line substantially without changing your climate, timezone, or gym-access answers.

## Tax and permanent-establishment exposure

Generic considerations, not tax advice:

- A roughly 30-day working trip abroad is typically invisible to the host country's tax authority as long as you clear its residency threshold (often ~183 days) by a wide margin, your employer isn't itself resident there, and your cost isn't recharged to a local entity.
- **Permanent-establishment (PE) risk to your employer** is usually the more relevant question than your personal income tax for a short trip. Most jurisdictions treat home-office work under roughly 30-90 days of presence, with no local revenue-generating activity, as low PE risk — but enforcement posture varies sharply by country. "Generically low risk" is not the same as "zero risk everywhere," and a handful of tax authorities are known to audit PE more aggressively than the rest.
- **Registration duties** (foreign-resident address registration, short-stay tourist registration) under roughly 90 days are frequently the accommodation provider's legal burden rather than yours in many countries — confirm this doesn't shift for your specific destination rather than assuming it by default.
- **None of this substitutes for your employer's own policy.** Most companies with any remote-work or "workation" policy have an explicit day-count limit and an approved/disallowed country list, and it will often be more conservative than the legal minimum. Check that first.

## A worked scoring pass

Score three to five shortlisted cities against the six-factor rubric above, 1-10 per factor, weighted total out of 10. The point isn't the specific cities below — it's the shape of the comparison:

| Factor (weight) | Coastal, late-dinner culture | Central, early-closing culture | Home-timezone city |
|---|---|---|---|
| Rhythm fit (30%) | High — kitchens/shops open into your evening finish | Low — kitchens close before your workday ends | High by default — no offset to manage |
| Gym access (25%) | High if flex/no-permanence contracts are common | Medium — often 12-month contracts | High — home-market gym norms apply |
| Internet (15%) | Verify FTTH per-listing | Verify FTTH per-listing | Usually a non-issue |
| Daylight/weather (10%) | Season-dependent | Season-dependent | Season-dependent |
| Cost (10%) | Map-pan before judging | Map-pan before judging | Usually higher |
| Logistics/social (10%) | Depends on solo-travel norms | Depends on solo-travel norms | Lowest friction |

Fill this in with your own candidates and your own weights. A city that wins on scenery but loses on rhythm and gym access will produce a worse month than an unglamorous one that fits your clock — that's the entire argument this method is built to operationalize.

## Where this breaks

Ranked roughly by how often each one bites, worst first: the apartment's workspace or connection underperforms what was advertised; the gym's equipment falls short of what your routine needs; mobile-network congestion catches an evening call you assumed the hotspot would cover; and working every evening quietly isolates you from the destination's daytime social life. All four are addressed above — verify on day one, keep a fallback (a 24-hour coworking desk, a second gym), and deliberately weight social effort toward mornings and weekends rather than evenings, since your evenings belong to work for the whole trip.

If your workday shifts your wake/sleep cycle later, your physical performance likely shifts with it — strength and power output for most people peaks in the late afternoon, tracking core body temperature, so a session scheduled for late morning rather than first thing may outperform an early one once you're running a delayed schedule. Weigh that against the adherence value of a fixed, low-friction time slot; a slightly suboptimal but consistent anchor beats an optimal one you skip.

## See also

- [[trip_architecture]] — the hub-and-spoke model this playbook assumes as the default trip shape
- [[rotation_templates]] — the same rhythm-first logic applied to a full-year rotation instead of a single month
- [[jet_lag_protocol]] — relevant on the return leg, not the trip itself, since a fixed local schedule for a full month is a different (milder) chronobiological case than short-trip jet lag
