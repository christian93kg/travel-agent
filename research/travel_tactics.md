# Plane, airport and train tactics: research prompt and results

> Research snapshot compiled 2026-11-06 from public sources (links inline). Fares, rules and programs change: re-check anything before you book.

Related: [Flight booking, seats, connections](flight_booking.md) · [Award travel and loyalty mechanics](award_travel.md).

Focus: practical, "tactile" rules rather than points mechanics.

## Prompt

```text
GIVEN: I am building a reusable, public trip-planning method for independent travellers. It already covers booking windows, fare families, passenger rights, award mechanics and hotel booking channels. What it lacks is the practical, in-the-moment layer: specific, checkable tricks a traveller can act on at booking, at check-in, at the airport, on board, and on trains. I want "tactile" rules with numbers in them (days out, hours before departure, row numbers, which side of the train), not general advice. Prefer airline/rail operator pages, regulator data, and established sources (One Mile at a Time, The Points Guy, Head for Points, View from the Wing, Seat61, Going). Treat listicles and affiliate content as low confidence. Never invent a number: if a figure is an average or varies by route, say so.

TASK: Research and document:
1. Seat selection on planes: how to pick the best seat on common narrowbodies (A220, A320 family, 737) and widebodies (787, A350, 777); window alignment (seats with no or offset windows); rows to avoid (last row recline, galley/lavatory noise, exit-row restrictions); when seat maps and free seat selection open (e.g. at check-in, 24h before); how to spot likely empty middle seats or empty rows; whether choosing a seat at the back of the plane improves odds of an empty neighbour.
2. Check-in and boarding: check-in opening times by major airline, boarding group order and how to move up legally, gate-check patterns, how full flights affect cabin-bag policing.
3. Carry-on rules: personal-item and cabin-bag size and weight limits for major European and US airlines, which airlines weigh bags at the gate, and bag dimensions that pass on all of them.
4. Airport tactics: security fast-lane access routes (status, cabin, paid), realistic time-before-departure guidance at large hubs, Mobile Passport Control and e-gates, lounge day-pass value thresholds.
5. On-board comfort: practical, sourced tactics for sleep, hydration and jet lag on board that are not already standard advice (keep this short).
6. Trains in Europe: best seats by train type (ICE, TGV/TGV Lyria, Railjet, Frecciarossa, EuroCity, SBB IC2000/Giruno); quiet and family zones; 1st vs 2nd class value per operator; seat reservation rules (when required, when free); booking-open dates per operator (DB, SNCF, Trenitalia, ÖBB, SBB) and when saver fares are cheapest; night-train cabin choice for a solo traveller.
7. Points timing: when to transfer (only after live space), how long transfers take by bank and program, transfer-bonus seasonality, award-release times of day where known.
8. Myth check: test common "hacks" (incognito mode/clearing cookies, booking on Tuesdays, VPN to another country, booking at midnight, "the 54-day rule", throwaway tickets) with a verdict of True / Partly / Myth and the evidence.

FORMAT: Markdown, one section per numbered topic. Each tip is a rule card: Rule (one imperative line containing a number or concrete condition) | When it applies | Evidence (source URL, source type, date) | Confidence (high/medium/low) | Verdict (True/Partly/Myth, where relevant). End with: (a) a one-page cheat sheet of the 20 most useful rules, ranked; (b) facts that change often and must be re-verified; (c) conflicts between sources; (d) what you could not find.
```

## Research Results

Returned 2026-11-06. The report below is reproduced as returned (headings demoted two levels), with light edits for a public audience.

### Tactile Travel Rules: A Sourced Playbook for Booking, Airport, On-Board and European Rail (verified to 6–7 November 2026)

The useful in-the-moment rules come mostly from operator pages, not from "hacks". The biggest wins are the published horizons (DB 12 months, SNCF TGV 6 months since 11 March 2026, SBB Supersaver 6 months, ÖBB Sparschiene 180 days), bag dimensions that pass every major carrier (personal item ≤40×25×15 cm, cabin bag ≤55×35×20 cm and ≤8 kg), and boarding-group rules. Most famous booking hacks (incognito, Tuesday, midnight) are myths or rest on averages only.

#### TL;DR
- **Book rail on the release date, not "early":** DB opens 12 months out (6 months for most international trips), SNCF TGV 6 months, SBB Supersaver 6 months, ÖBB Sparschiene 180 days. Each gap around the mid-December timetable change opens in mid-October, so the 12-month horizon shrinks then.
- **Pack to the intersection:** a 40×25×15 cm under-seat bag passes Ryanair, Wizz, easyJet, Lufthansa, Air France/KLM, BA and United. A 55×35×20 cm, ≤8 kg cabin bag passes every published overhead limit checked. Lufthansa says outright that it checks weight; Ryanair has sizers at every gate.
- **Ignore browser and day-of-week tricks; act on seat maps and boarding rules instead:** incognito, Tuesday and midnight booking are myths. "54 days" and VPNs are only partly true. For an empty neighbour, pick the rearmost seat in your best cabin with one open seat beside it. On United, a window seat boards in Group 3, ahead of middles (Group 4) and aisles (Group 5).

---

#### How to read the rule cards
Each card gives **Rule | When it applies | Evidence (URL, source type, date) | Confidence | Verdict** (Verdict only where a claim is being tested). Confidence levels:
- **High:** operator or regulator page.
- **Medium:** established specialist source (Seat61, OMAAT, TPG, VFTW, Going, Which?).
- **Low:** listicle, affiliate or retailer page, forum, or a single uncorroborated source.

"Undated" means the operator page shows no publication date; it was viewed November 2026.

---

#### 1. Seat selection on planes

| Rule | When it applies | Evidence | Confidence |
|---|---|---|---|
| To maximise the odds of an empty neighbour, pick the **rearmost** seat in the best cabin you can access, ideally one with exactly one open seat beside it. If you have exit-row access, take the rearmost exit-row seat. | Any flight not sold out; works best in economy-plus / exit sections | https://onemileatatime.com/insights/sit-next-to-empty-seat-plane/ (specialist blog, undated) | Medium |
| Assume **aisles fill first, then windows, then middles**. A middle seat left open between two booked seats is the likeliest to stay empty. | Seat maps viewed after booking / at check-in | Same OMAAT article | Medium |
| Don't count on booking window + aisle for two people to block a middle on **Air France/KLM, Iberia or WestJet**. Readers report these systems now force adjacent seats on one booking. | Two travellers on one booking | https://onemileatatime.com/insights/book-aisle-window-seat-hope-empty-middle/ (blog + reader comments, Feb 2026) | Low (reader reports) |
| Before paying for any "window", check the exact airline-and-variant map for a **"no window" / "misaligned window"** flag. SeatGuru is no longer available; frequent flyers now use aeroLOPA, ExpertFlyer (which overlays aeroLOPA) or Seatmaps. | All aircraft; windows are fixed by the airframe, while seat pitch is set by the airline | https://onemileatatime.com/community/ask-the-community/seat-guru-replacement/ (forum, Aug 2026); https://thepointsguy.com/news/avoid-window-seat-without-window/ (TPG, undated; gives an example of a seat 11A flagged "There is no window at this seat") | Medium |
| If you board into a windowless "window" seat on a lightly loaded flight, ask crew to move **after the doors close**. If you paid for the seat, ask for the selection fee back and keep screenshots. | Paid seat selection | https://checktheseat.com/blog/missing-windows-misaligned-window-seats (seat-map vendor, 2026); https://www.airtraveler.club/... (blog, undated) | Low |
| For sleep on a red-eye, choose a window **toward the front or middle, away from galleys and lavatories**. Avoid the bulkhead if you want to sleep (it suits infants better). | Overnight flights | https://travelbulletin.com/transportation/air-travel/choosing-best-airplane-seat (trade press, undated) | Low–Medium |
| Check exit-row eligibility (e.g. minimum age) before choosing an exit row. Rules vary by airline. | Exit rows | Same Travel Bulletin piece | Medium |

**Not established by this research** (see section (d)): row-by-row numbers for the A220, A320 family, 737, 787, A350 and 777. They depend on each airline's configuration and must be read off aeroLOPA for the exact tail/variant. No universal "row X has no window" figure holds across airlines, and none is given here.

---

#### 2. Check-in and boarding

##### Check-in windows

| Rule | When it applies | Evidence | Confidence |
|---|---|---|---|
| **British Airways:** online check-in opens **24 h** before departure. It closes **1 h** before, or **2 h** for flights departing the USA. | BA flights | https://www.airhelp.com/en/airlines/british-airways/online-check-in/ (claims site, 2026); https://www.mrplaneguy.com/post/plane-guide-to-airline-check-in (blog, 2026) | Medium (secondary, consistent) |
| **Lufthansa:** online check-in opens **23 h** before departure. | LH flights | https://airadvisor.com/en/airline-check-in (claims site, undated); https://www.myticketstoindia.com/... (agency blog) | Low–Medium |
| **Air France:** online check-in opens **30 h** before departure. | AF flights | AirAdvisor table (undated) | Low |
| **Delta / American:** online check-in opens **24 h** before departure. | US majors | AirAdvisor table (undated) | Low–Medium |
| **easyJet:** if you bought a seat, check in up to **30 days** ahead; otherwise from 24 h. **Ryanair:** **60 days** ahead with a reserved seat, otherwise 24 h; closes **2 h** before. | European low-cost carriers (LCCs) | https://www.mrplaneguy.com/post/plane-guide-to-airline-check-in (blog, 2026) | Low–Medium |
| Buying a seat on Ryanair or easyJet buys an earlier check-in window, not just a seat. If you'll be offline in the 24 h before departure, the cheapest seat can be worth it. | LCC travel without connectivity | Derived from the rows above | Medium (derived) |

##### Boarding order and how to move up legally

| Rule | When it applies | Evidence | Confidence |
|---|---|---|---|
| **United:** choose a **window or exit-row seat to board in Group 3**, ahead of middles (Group 4) and aisles (Group 5). Basic Economy boards in **Group 6**. In effect since 26 October 2023. | United economy | https://thepointsguy.com/news/united-airlines-new-boarding-process-window-middle-aisle (TPG, Oct 2023); NPR, 19 Oct 2023 | Medium–High |
| **United:** everyone in economy on one booking boards with the best group any of them holds, *except* Basic Economy, which stays in Group 6. **Group 2** includes United Chase cardholders (not the Gateway card) and buyers of Premier Access. | Families / companions | TPG; AFAR | Medium |
| **Delta:** Basic Economy is **Zone 8 (last)**. Holding a Delta Gold, Platinum or Reserve Amex lifts you to **Zone 5** on any fare. Zones 1–4 use the Sky Priority lane. | Delta | https://www.delta.com/us/en/check-in-security/boarding-priority (airline page, undated, viewed Nov 2026) | High |
| **American:** 9 groups since **1 May 2025**. Basic Economy is Group 9. Joining AAdvantage (free) gets you **Group 6** on standard Main Cabin fares. Boarding starts **35 min** before departure on the A319/A320 and **40 min** on the 737, A321 and widebodies. | American | https://thepointsguy.com/news/american-airlines-tweaks-boarding-order (TPG, published 1 May 2025, updated 3 Sep 2026); https://onemileatatime.com/guides/american-airlines-basic-economy/ | Medium |

##### Gate-check patterns and cabin-bag policing

| Rule | When it applies | Evidence | Confidence |
|---|---|---|---|
| On **Lufthansa**, expect weight checks: the airline states it checks "amount, weight and dimensions" of carry-ons at the airport. A bag taken at the gate costs "significantly" more than at check-in (no amount published) and can be paid by card only. | LH, 8 kg limit | https://www.lufthansa.com/hu/en/carry-on-baggage (airline page, undated) | High |
| On **Ryanair**, assume your bag *will* be sized: sizers are "placed at every boarding gate". An oversize bag at the gate costs **€/£70–75**. A 10 kg bag at the gate without Priority costs **€/£46–75**. Pre-buy the bag instead. | Ryanair | https://www.ryanair.com/us/en/useful-info/help-centre/fees (airline page, undated) | High (but see conflicts) |
| Ryanair raised its staff bonus per oversize bag caught from **€1.50 to €2.50** in November 2025 and removed the €80 monthly cap (Euronews, 29 Aug 2025). Michael O'Leary told The Times "I think we will up the rate of commission, from €2.50 to €3.50 or so", a planned rise not confirmed as implemented, so expect enforcement on full flights. | Ryanair | Euronews, 29 Aug 2025; Euro Weekly News, 17 May 2026 / Yahoo News UK, citing Michael O'Leary in The Times | Low–Medium |
| On **Wizz Air**, an oversize free bag at the gate costs **€30**. It can still fly in the cabin if it fits 55×40×23 cm and there is overhead space. An oversize or overweight Priority trolley costs **€60** and goes in the hold. | Wizz | Wizz baggage FAQ (airline sub-site, undated) | Medium (amounts vary across versions of the page) |
| **US majors (UA, AA, DL)** publish no carry-on weight limit; policing is by size and bin space. | US domestic | Secondary guides only | Low–Medium |

**Not found:** systematic data showing that fuller flights trigger stricter cabin-bag policing. The Ryanair bonus scheme and Lufthansa's own statement are the only operator-level signals. Gate-check frequency by load factor is not published.

---

#### 3. Carry-on rules (current as of Nov 2026)

| Airline | Free under-seat / personal item | Overhead cabin bag | Weight | Evidence | Confidence |
|---|---|---|---|---|---|
| Ryanair | 40×30×20 cm, all fares | 55×40×20 cm, Priority only | 10 kg (cabin bag); no published limit on the small bag | https://sizeproof.app/airlines/ryanair/ (quotes Ryanair page, confirmed 26 Oct 2026); Ryanair fees page | High |
| easyJet | 45×36×20 cm incl. handles/wheels | 56×45×25 cm, paid or eligible fare | 15 kg | https://www.which.co.uk/reviews/airlines/article/most-generous-airline-hand-luggage-aF9jK9M1uoMk (Which?, 2026) | Medium (see conflicts) |
| Wizz Air | 40×30×20 cm | 55×40×23 cm with WIZZ Priority | 10 kg each | Which? 2026; Wizz FAQ | Medium–High |
| Lufthansa | 40×30×15 cm | 55×40×23 cm (not on Economy Basic short/medium-haul; must be bought online) | 8 kg (Economy/Premium Economy; 2×8 kg in Business) | https://www.lufthansa.com/hu/en/carry-on-baggage; https://www.lufthansa.com/ba/en/prepare-for-your-trip/travel-classes/economy-basic (airline pages, undated) | High |
| Air France | 40×30×15 cm | 55×35×25 cm (0–1 depending on fare) | 12 kg total in Economy/Premium; 18 kg in Business | https://wwws.airfrance.us/information/bagages/bagage-cabine-soute (airline, undated) | High |
| KLM | small bag | 55×35×25 cm (none on Light fares in Europe) | 12 kg total in Economy; 18 kg in Business | https://www.klm.com/information/baggage/hand-baggage-allowance (airline, undated) | High |
| British Airways | 40×30×15 cm | 56×45×25 cm (Basic fares may now be personal-item only; verify) | Weight not shown on the page viewed (see conflicts) | https://www.britishairways.com/content/information/baggage-essentials (airline, viewed Nov 2026) | Medium |
| United | 17×10×9 in (≈43×25×22 cm) | 22×14×9 in; **not on domestic Basic Economy** (included on Basic only to Canada, South America, transatlantic and transpacific international) | None published | https://www.thepointsguy.com/airline/backpack-carry-on-or-personal-item (TPG, quoting United) | Medium–High |
| American | 18×14×8 in | 22×14×9 in, **included on Basic Economy** | None published | Same TPG article (quotes AA) | Medium–High |
| Delta | no published dimensions ("fits under the seat") | 22×14×9 in, **included on Basic Economy** | None published | Same TPG article; https://skysonar.com/... (notes Delta publishes no personal-item size) | Medium |

**Rule cards:**

| Rule | When it applies | Evidence | Confidence |
|---|---|---|---|
| Use a personal item **no larger than 40×25×15 cm** (e.g. a small backpack). This is the intersection of the smallest published limits: Ryanair/Wizz 40×30×20, LH/AF/BA 40×30×15, and United's 25 cm width. | Any mix of carriers in this table | Derived from the table above | High (derived; Delta unpublished) |
| Use a cabin bag **no larger than 55×35×20 cm and ≤8 kg**. This passes Ryanair Priority, Wizz Priority, easyJet large, LH, AF/KLM, BA and the US 22×14×9 in standard (the 35 cm width is set by AF/KLM, 20 cm depth by Ryanair, 8 kg by LH). | Fares that include a cabin bag | Derived | High (derived) |
| On **United domestic Basic Economy**, carry only a personal item. A rollaboard is not included. | UA Basic | TPG | Medium–High |
| On **Lufthansa Economy Basic**, buy the 8 kg bag **online**; it can't be bought at the airport. | LH Basic | Lufthansa Economy Basic page | High |
| Bag dimensions **include wheels and handles** at easyJet. Wizz's 55×40×23 cm Priority trolley size excludes them, but handles and wheels must not add more than 5 cm. | LCCs | Which? 2026 | Medium |

---

#### 4. Airport tactics

| Rule | When it applies | Evidence | Confidence |
|---|---|---|---|
| Non-EU nationals: from **10 April 2026** the EU **Entry/Exit System (EES)** is fully operational at Schengen external borders. Passport stamps are replaced by fingerprints and a facial image at the first crossing. Budget **extra time at passport control** on your first post-registration entry. | Short stays in the 29 EES countries | https://home-affairs.ec.europa.eu/news/entryexit-system-will-become-fully-operational-10-april-2026-2026-03-30_en (European Commission, 30 Mar 2026); https://www.abta.com/tips-and-advice/planning-and-booking-a-holiday/upcoming-changes-travel-europe (trade body, 2026) | High |
| Don't assume EES runs uniformly. The EES law allowed member states to suspend operations for up to a further **150 days** after 10 April. Greece announced a suspension of EES registration for British visitors, and the UK juxtaposed crossings were not fully live on 10 April. | UK/third-country travellers in 2026 | https://commonslibrary.parliament.uk/research-briefings/cbp-10676/ (UK Parliament research briefing, 2026) | High |
| US citizens (and eligible Canadians) re-entering the US: download CBP's free **Mobile Passport Control (MPC)** app. One submission covers you plus **up to 11 others**. Use the dedicated MPC lane, but expect to speak to an officer and show your physical passport. | Participating US airports, 14 Preclearance locations, 4 seaports, 4 Washington-state pedestrian land crossings (since 20 Apr 2026) | https://www.cbp.gov/travel/us-citizens/mobile-passport-control (CBP, undated); https://www.cbp.gov/newsroom/local-media-release/cbp-launches-mobile-passport-control-four-land-border-pedestrian (CBP, 20 Apr 2026); Google Play listing (updated 22 Oct 2026) | High |
| At peaks, standard customs lanes back up while **MPC lanes stay lightly used**. If you lack Global Entry, MPC is the free shortcut. | US arrivals | https://thepointsguy.com/news/what-is-mobile-passport-control (TPG, 2026, quoting CBP) | Medium |
| Know when check-in and bag drop close: BA **45 min** before short-haul and **60 min** before long-haul. Lufthansa reportedly **40 min** short-haul / **60 min** long-haul. Arrive so you clear security well before the boarding cut-off, not the check-in cut-off. | Europe | AirAdvisor; myticketstoindia (secondary) | Low–Medium |

**Not established by this research:** security fast-lane access routes by status, cabin or paid product at specific hubs; realistic time-before-departure guidance at large hubs; e-gate eligibility under EES; lounge day-pass prices. In place of a sourced threshold, a rule with no numbers: buy a day pass only when its price is below what you'd otherwise spend in the terminal plus the value you place on the time and seat. Treat this as a method, not a finding.

---

#### 5. On-board comfort (short)

| Rule | When it applies | Evidence | Confidence |
|---|---|---|---|
| For sleep, choose a window toward the front/middle away from galleys and lavatories, and avoid the bulkhead. | Overnight flights | Travel Bulletin (undated) | Low–Medium |
| On night trains, sleeper and couchette tickets on ÖBB Nightjet **include breakfast**, and every Nightjet ticket includes a reserved place. | Nightjet | https://www.nightjet.com/en/buchung/tarifinformationen/nightjet-sparschiene (operator, undated) | High |

**Not found:** sourced, non-standard tactics for hydration and jet lag on board. Standard advice was not restated, per the brief.

---

#### 6. Trains in Europe

##### Booking-open horizons and saver fares

| Rule | When it applies | Evidence | Confidence |
|---|---|---|---|
| **DB:** book Super Sparpreis/Sparpreis up to **12 months** ahead, limited by the June and December timetable changes. The 12-month horizon was extended from 6 months in October 2024. | DB domestic ICE/IC/EC | https://int.bahn.de/en/offers/saver-fare-flexible-fare/super-saver-fare (operator, undated); https://www.deutschebahn.com/de/presse/... (DB press release, Oct 2024) | High |
| **DB international:** bookable **6 months** ahead online (12 months for Belgium, the Netherlands, Luxembourg and Switzerland). | DB cross-border | https://int.bahn.de/en/faq/group-saver-fare-europe-advance-purchase (operator FAQ, undated); https://int.bahn.de/en/offers/additional-services/seat-reservation-long-distance-services | High |
| **DB timetable change:** the next timetable is "usually released in mid-October". For 2026, trains after the **13 December 2026** change became bookable around **15 October 2026**. | Christmas/New Year trips | DB FAQ; https://reisetopia.de/news/deutsche-bahn-super-sparpreis-tickets-deutschland/ (German travel news, Oct 2026) | High / Medium |
| **SNCF:** all TGV INOUI, OUIGO and international SNCF high-speed trains are bookable **6 months** ahead since **11 March 2026**. | French high-speed | https://www.groupe-sncf.com/en/group/about-us/companies/sncf-voyageurs/tgv-inoui-tickets-six-months-ahead (operator, 18 Mar 2026) | High |
| **SNCF Prems** fares are the cheap advance fares; prices rise toward departure like airfares. Paris–Nice by TGV starts at **€29 in 2nd class / €45 in 1st** booked ahead (route-specific, varies). | TGV | https://www.seat61.com/trains-and-routes/paris-to-nice-by-train.htm (Seat61, undated) | Medium |
| **SBB:** Supersaver tickets go on sale **up to 6 months** ahead (formerly 60 days). For travel after the mid-December change they appear only once timetables are published. **Saver Day Passes are always 6 months** ahead. | Swiss domestic | https://www.sbb.ch/en/help-and-contact/products-services/tickets/switzerland/supersaver-tickets-saver-day-passes.html (operator, undated); https://www.sbb.ch/en/offers/supersaver-ticket | High |
| **SBB:** Supersaver discounts are **up to 50%**, in 1st and 2nd class. If you hold 2nd class, buy a **Supersaver Class Upgrade** (up to 6 months ahead) instead of a full 1st-class ticket. | Swiss travel | Same SBB pages; https://www.sbb.ch/en/tickets-offers/tickets/point-to-point-tickets-switzerland/class-upgrades-supersaver-class-upgrades/supersaver-class-upgrade.html | High |
| **ÖBB:** Sparschiene is bookable **up to 6 months (180 days)** ahead, online and in-app only for Austria. The ÖBB page states **Nightjet up to 360 days**; EuroNight and other night trains 180 days. | Austria / Nightjet | https://www.oebb.at/en/tickets-kundenkarten/oesterreich-europa/sparschiene (operator, undated) | High (but see conflicts) |
| **ÖBB:** if your plans may change, choose **Sparschiene Komfort** on Nightjet. It is refundable free **up to 15 days** before travel; plain Sparschiene is non-refundable. | Nightjet | https://www.nightjet.com/en/buchung/tarifinformationen/nightjet-sparschiene (operator, undated) | High |
| **Trenitalia:** most fares are generally on sale **up to 6 months** ahead (exceptions apply). Super Economy is reportedly sold until **midnight 9 days before** departure. | Frecciarossa etc. | https://www.thetrainline.com/en/train-companies/trenitalia (retailer, 2026); https://ca.trip.com/trains/italy/companies/trenitalia/frecciarossa/ (agency) | Medium / Low (see conflicts) |
| **Trenitalia:** board early. Coach doors close **1 minute** before departure on Frecciarossa, Frecciargento, Frecciabianca, IC and ICNight, and late passengers can be refused. | Italy long-distance | https://www.raileurope.com/en/trains/frecciarossa (retailer, undated) | Medium |

##### Seat reservation rules

| Rule | When it applies | Evidence | Confidence |
|---|---|---|---|
| **DB ICE:** reservation is optional at **€5.50 (2nd) / €6.90 (1st)** if not bought with the ticket. It is included with a 1st-class Flexpreis. Without one, sit in any seat whose LED display shows no reservation for your section. | Domestic ICE/IC | https://int.bahn.de/en/offers/additional-services/seat-reservation-long-distance-services (operator, undated); https://www.seat61.com/trains-and-routes/ice.htm (Seat61) | High |
| **ICE to/from France:** reservation is **compulsory and included**. | ICE Paris routes | Seat61 ICE page | Medium |
| **TGV:** reservation is compulsory and **always included** in the ticket. | All TGV | https://www.seat61.com/trains-and-routes/tgv.htm (Seat61, undated) | Medium |
| **SBB Saver/Supersaver:** a seat reservation is **never included**; it costs extra. | Swiss trains | SBB help page | High |
| **Nightjet:** every ticket includes a reserved place, including the Sparschiene 2nd-class seat. | Nightjet | Nightjet pages | High |

##### Best seats, quiet and family zones

| Rule | When it applies | Evidence | Confidence |
|---|---|---|---|
| **Railjet (new generation):** quiet zone in **cars 1 and 9**, family area in **cars 6 and 7**. Seats at car ends sit higher and may give better views. | ÖBB Railjet nG | https://www.seat61.com/reference/trainseatplans/railjet-newgen-seat-map.pdf (Seat61 seat plan, undated) | Medium |
| **Railjet (original and later types):** family zone in **car 1**, quiet zone in **car 3**. On the original type, **car 7** (1st/Business) is also quiet. | ÖBB Railjet | Seat61 seat plans (original and later type) | Medium |
| Railjets are push-pull and can run either way, so you **can't guarantee forward-facing** seats. | Railjet | Seat61 seat plan notes | Medium |
| ÖBB lists quiet and family zones on Railjet and ICE, but **none on EuroCity/InterCity**. On Railjet 1st class the quiet zone is "partially" provided. | ÖBB-operated trains | https://www.oebb.at/en/reiseplanung-services/im-zug/abteile-komfortklassen (operator, undated) | High |
| **ICE:** reserve "Großraumwagen + Ruhebereich" (open saloon + quiet zone) to work or sleep. The ICE 3 "lounge" seats behind the driver's cab are 1st or 2nd class depending on direction of travel and can't be targeted reliably online. | ICE 3 | Seat61 ICE page; FlyerTalk thread (forum, older) | Medium / Low |
| **TGV Duplex:** sit **upstairs** for views; some retailers let you request deck. Forward-facing selection exists only on some single-deck TGV Est routes. | TGV | Seat61 France and TGV pages | Medium |
| **TGV Lyria:** in **1st class**, choose your exact seat from a seat map on sncf-connect.com or Trainline. | Paris–Switzerland | https://www.seat61.com/trains-and-routes/lyria.htm (Seat61) | Medium |
| **Frecciarossa:** pick a seat from the seat map (Trainline app) on all classes **except Executive**. Pick the "Area Silenzio" where offered. | Trenitalia | Trainline Trenitalia page; https://everyrail.com/blog/frecciarossa (blog) | Medium / Low |
| **SBB IC2000:** quiet zones were introduced in both classes in 2008, then cut back to **some 1st-class coaches only**. The business zone is typically behind the locomotive. | SBB double-deck IC | https://en.wikipedia.org/wiki/IC_2000 (encyclopedia, citing SBB archives) | Low–Medium |

##### 1st vs 2nd class value

| Rule | When it applies | Evidence | Confidence |
|---|---|---|---|
| On DB ICE, **2nd class is fine** for most trips. Buy 1st only when the 1st-class Sparpreis gap is small; 1st-class Flexpreis includes the reservation. | Germany | Seat61 ICE page; int.bahn.de reservation page | Medium |
| In Switzerland, compare the **Supersaver 1st-class** price and the **Supersaver Class Upgrade** before paying full 1st. | Switzerland | SBB pages | High |
| ÖBB Railjet **Business** is a surcharge on top of 1st-class. It adds leather, adjustable seats and a quiet atmosphere; book it at the counter, with the train attendant, or online. | Railjet | ÖBB comfort classes page | High |

##### Night-train cabin choice (solo)

| Rule | When it applies | Evidence | Confidence |
|---|---|---|---|
| Book Nightjet sleepers early: the ÖBB page says up to **360 days** ahead, and sleeper cabins sell out first. Choose Sparschiene Komfort if you need the **15-day** free-refund option. | Nightjet | ÖBB Sparschiene page; Nightjet fare page | High |

**Not found from primary sources:** single-vs-double sleeper pricing, women-only couchette rules, and Seat61's solo-traveller guidance. Verify on nightjet.com at booking.

---

#### 7. Points timing

| Rule | When it applies | Evidence | Confidence |
|---|---|---|---|
| **Transfer only after you've found bookable award space.** Transfers are irreversible, and programmes like ANA **don't hold award seats** while points are in transit. | All flexible-currency transfers | https://www.point.me/insights/amex-points-transfer-partners/ (search tool blog, 2026) | Medium |
| **Amex Membership Rewards:** most airline and hotel partners are **instant**. TPG's transfer-time guide lists "ANA Mileage Club \| 1:1 \| 48 hours" and notes "Even the laggards only take 48 hours at most"; TPG's quick list also gives 48 h for Cathay Pacific Asia Miles and Iberia Plus. | Amex MR | https://thepointsguy.com/loyalty-programs/american-express-membership-rewards-transfer-times (TPG, 2026); https://onemileatatime.com/guides/amex-membership-rewards-points-transfer-times/ (OMAAT, Oct 2026) | Medium |
| **Chase Ultimate Rewards:** most partners are instant, including United, Hyatt, BA, Flying Blue, Iberia and Southwest. Some sources show Wyndham taking **up to the next business day**. | Chase UR | https://frequentmiler.com/how-long-does-it-take-to-transfer-points-to-airline-and-hotel-programs/ (Frequent Miler, ongoing); https://thriftytraveler.com/guides/points/credit-card-transfer-partners/ | Medium |
| Link every loyalty account to your bank programme **before** you need it, so a first-time link doesn't delay a live award. | Any bank | TPG Amex transfer guide | Medium |
| Amex charges an excise fee of **0.06 cents per point (capped at $99)** on transfers to US airlines; per TPG, "if you transfer 30,000 Membership Rewards points to Delta Air Lines, you'll need to pay an $18 fee". Factor it into the award's cost. | Amex → Delta/JetBlue | TPG Amex transfer-times guide | Medium |

**Not found:** transfer-bonus seasonality and award-release times of day. No sourced, checkable pattern was located; see section (d).

---

#### 8. Myth check

| Claim | Verdict | Evidence | Confidence |
|---|---|---|---|
| Searching in **incognito / clearing cookies** gets cheaper fares | **Myth** | Going: "Searching incognito or clearing cookies does nothing to your fare"; price changes reflect fare buckets selling out (https://www.going.com/guides/when-do-flight-prices-drop, 2026). Thrifty Traveler agrees. | Medium–High |
| **Booking on a Tuesday** is cheapest | **Myth** (as a rule); the *departure* day matters | Going says there is no best booking day and that Tue/Wed/Sat *departures* are cheaper (https://www.going.com/guides/the-best-time-to-book-a-cheap-flight, 2026). But Expedia's 2025 Air Hacks Report (with Airlines Reporting Corporation, 28 Jan 2025) says Sunday booking saves "6%" domestic and "17%" international "compared to booking on a Monday or Friday". Studies disagree, so no day is reliable. | Medium |
| **Booking at midnight** / a set time of day is cheaper | **Myth** | Going: "There's no specific time of day when prices drop"; pricing responds to demand, not the clock (Going, 2026) | Medium |
| **"The 54-day rule"** | **Partly**. It's an old CheapAir *average* for US domestic fares, not a rule | CheapAir's figure has moved over time: **54 days** (2015 data, 1.3 bn fares), now **42 days** with a "prime booking window" of **74–21 days** (https://www.cheapair.com/blog/the-best-time-to-buy-flights/). Other averages: Google Flights **39 days**, Expedia **34–86 days**. All are domestic US averages; international and peak-season windows differ. | Medium |
| **VPN to another country** lowers fares | **Partly** | Point-of-sale pricing is real: Thrifty Traveler documented a ~$700 gap on one Colombian route between US and Argentine points of sale. But controlled tests (Experte, Tom's Guide, The Alviator Oct 2025) mostly found **no savings or higher prices**. Changing the airline site's country setting achieves the same without a VPN. | Medium |
| **Throwaway / hidden-city tickets** save money | **Partly**. It works on price but breaches contracts of carriage and is increasingly policed | VFTW (1 Sep 2026): American blocked online check-in and questioned a passenger who *planned to fly every segment*, after apparently matching the purchaser's address to the connecting city. American won a Fort Worth jury verdict against Skiplagged in October 2024 ($4.7 m copyright damages plus $4.7 m disgorgement, none on trademark; KERA, 17 Oct 2024), made a final **$9.4 m** judgment by Judge Mark T. Pittman in May 2025 (Law360, 7 May 2025), but that case concerned branding/data, not the act of skipping. Never check bags or book a return on the same ticket. | Medium |

---

#### (a) One-page cheat sheet: the 20 most useful rules, ranked

1. **Pack a ≤40×25×15 cm personal item**: it passes Ryanair, Wizz, easyJet, LH, AF/KLM, BA and United.
2. **Cabin bag ≤55×35×20 cm and ≤8 kg** passes every published overhead limit checked.
3. **DB: book on the release date, up to 12 months ahead** (6 months for most international trips); post-December-change dates open in mid-October.
4. **SNCF TGV/OUIGO: book from 6 months out** (since 11 March 2026).
5. **SBB Supersaver: from 6 months out**; reservations never included.
6. **ÖBB Sparschiene: 180 days**; Nightjet up to 360 days per ÖBB. Choose Komfort for a free refund up to 15 days before.
7. **Transfer points only after you see bookable award space**, and never to ANA speculatively.
8. **United: take a window seat to board in Group 3**, ahead of middles and aisles.
9. **Delta: a co-brand Amex moves you to Zone 5 even on Basic** (Basic is otherwise Zone 8).
10. **Rearmost seat in your best cabin, with one open seat beside it**, gives the best odds of an empty neighbour.
11. **Check aeroLOPA for the exact variant before paying for a window seat**; some windows are missing.
12. **On Ryanair, pre-buy Priority**: the gate fee is €/£70–75 and sizers are at every gate.
13. **On Lufthansa Economy Basic, buy the 8 kg bag online**; it isn't sold at the airport, and bags are weighed.
14. **United domestic Basic: personal item only.** AA and Delta Basic include a carry-on.
15. **Ryanair: buy a seat to check in up to 60 days ahead** (easyJet: 30 days).
16. **Non-EU travellers: allow extra passport-control time on the first EES entry** since 10 April 2026. Implementation still varies.
17. **US returnees: use the free MPC app** (you plus up to 11 others).
18. **Railjet nG: quiet cars 1 and 9, family cars 6 and 7.**
19. **Frecciarossa: be aboard 1 minute early**, when the doors close. Seat-select in the app except in Executive.
20. **Ignore incognito, Tuesday and midnight tricks**; shift the departure day instead (Tue/Wed/Sat departures are typically cheaper).

---

#### (b) Facts that change often and must be re-verified before each trip
- **Ryanair gate fees and Priority prices:** the airline's own pages show €/£69.99 in one place and €/£70–75 in another; Priority is quoted at both €8–32 and €12.49–36.
- **Wizz Air gate fees:** €30/€60 on one FAQ version; €65–75 on secondary sites.
- **British Airways Basic hand-baggage allowance**, and whether a cabin weight limit is still published.
- **American Airlines Basic Economy boarding for elites** and any 2026 change to seat-selection rules.
- **Lufthansa Economy Basic** contents (personal item only on short/medium-haul).
- **EES operating status** by country and crossing (the suspension option, Greece, the UK juxtaposed crossings), and ETIAS start dates.
- **MPC locations:** CBP keeps adding them.
- **Booking horizons around the December timetable change** (DB, SNCF, ÖBB, SBB, Trenitalia), and SNCF's block-release dates.
- **Bank transfer times and ratios:** Amex US moved Emirates Skywards to "5 Membership Rewards points = 4 Skywards miles" on 16 Sep 2025 (Frequent Miler and OMAAT, quoting Amex), and Head for Points (18 Dec 2025) reports Amex UK cutting Emirates "from 4:3 to 2:1" from 1 Feb 2026; a Cathay ratio change was not confirmed.
- **Check-in opening times:** most figures here are secondary; confirm on the airline's site.

---

#### (c) Conflicts between sources
- **SNCF horizon:** the Seat61 pages fetched still say "up to 4 months". Riviera Radio reported 5 months. SNCF Groupe states **6 months since 11 March 2026**. The operator page is used here.
- **Nightjet horizon:** the ÖBB Sparschiene page says **360 days**, but DB's FAQ, Nightjet marketing copy and the ÖBB Sparschiene Europa legal text say **6 months/180 days**. Treat 180 days as reliable and 360 as possible on some trains.
- **SBB Supersaver:** older guides and forums (and Trainline) still say 60 days, or "at least 30 days". SBB's own pages say **6 months**.
- **Trenitalia horizon:** Trainline and Rail Europe say ~6 months/180 days; several blogs say 90–120 days or 4 months. Unresolved without a Trenitalia page; assume the timetable must be published first.
- **Best booking day:** Going (no best day) vs Expedia 2025 (Sunday) vs CheapAir's 2024 international study (Tue/Wed).
- **CheapAir's "best day":** 54, 49, 42 and 76 days appear in different CheapAir years and posts. All are averages.
- **ANA transfer time from Amex:** TPG says ~48 h, Johnny Jet 2–4 business days, point.me "72-hour" timing. **Iberia from Amex:** TPG's own pages differ (instant in its transfer table, 48 h in its quick list); an older Johnny Jet post says 4–7 days.
- **easyJet small-bag weight:** Which? and others say 15 kg; one retailer guide says no weight limit.
- **Ryanair gate fee:** €/£69.99 vs €/£70–75 on different Ryanair pages.
- **EU personal-item "law":** some secondary sites describe a guaranteed 40×30×15 cm free item under "new EU rules". Its legal status was not verified here, so don't rely on it.
- **United WILMA date:** one aggregator says October 2025; TPG, NPR and United's filings say **October 2023**.

---

#### (d) What could not be found (or not to primary-source standard)
- Row-level guidance for specific aircraft (A220, A320 family, 737, 787, A350, 777): last-row recline, missing-window rows, galley and lavatory rows. These are airline-configuration specific; use aeroLOPA per tail.
- When free seat selection opens by airline (e.g. at 24 h check-in for basic fares), beyond the Ryanair/easyJet early check-in windows.
- A sourced method for predicting empty rows, beyond OMAAT's seat-order logic.
- Security fast-lane access by status, cabin or paid product per hub; realistic arrival times at large hubs; TSA/airport wait data.
- E-gate eligibility for non-EU nationals under EES.
- Lounge day-pass prices and value thresholds.
- Non-standard sleep, hydration and jet-lag tactics from credible sources.
- Which side of the train to sit on for views on specific routes; Giruno and EuroCity seat layouts; Frecciarossa quiet/family zone coach numbers from Trenitalia.
- Night-train solo cabin pricing and women-only compartment rules from primary sources.
- Transfer-bonus seasonality and award-release times of day.
- Operator pages for United and American boarding (relied on TPG and secondary sources).

---

#### Caveats
- Many airline pages show no publication date; "undated" entries were viewed in November 2026 and can change without notice.
- All fare and timing figures (e.g. CheapAir/Expedia/Google day counts, Paris–Nice from €29) are **averages or route-specific** and don't predict any single itinerary.
- Low-confidence rows (forums, retailers, agencies) are included only where no operator source was found, and are labelled as such.
