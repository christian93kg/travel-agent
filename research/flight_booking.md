# Flight booking, seats, connections: research prompt and results

> Research snapshot compiled 2026-11-06 from public sources (links inline). Fares, rules and programs change: re-check anything before you book.

Method context: `playbooks/points_and_seasons.md` · `frameworks/trip_architecture.md`.

## Prompt

```text
GIVEN: I am building a reusable, public trip-planning method. It already covers trip architecture, jet-lag protocol, packing, and security posture. It has nothing on the practical mechanics of booking flights. The method is for independent travellers, not travel agents. Use authoritative sources: airline and regulator pages first, then established points/travel blogs (The Points Guy, One Mile at a Time, Frequent Miler, View from the Wing, Going.com, Head for Points). Treat affiliate-driven "best card" content as low confidence.

TASK: Research and document how to book flights well, as durable tactics plus the facts behind them:
1. Booking timing: how far ahead for short-haul vs. long-haul, whether "best day to book" claims hold up, fare-sale patterns, alert tools (Google Flights, Going, others) and what each is good for.
2. Search technique: flexible dates and fare calendars, nearby-airport search, open-jaw and multi-city, airline stopover programs (which airlines offer free or cheap stopovers), when two one-ways beat a return.
3. Positioning flights and separate tickets: when they pay off, buffer rules, what protection you lose, bag-through-check limits.
4. Fare families: basic economy restrictions across major carriers, refundable vs. changeable, how fare class affects mileage/status earning.
5. Hidden-city ticketing: how it works, contractual and account risks, when it fails. Document it as a risk, not a recommendation.
6. Seats and aircraft: identifying the exact aircraft variant, seat-map tools (AeroLOPA, SeatMaps, ExpertFlyer, airline maps), seat alerts, how seat selection fees work, picking window vs. aisle by flight type.
7. Upgrades: elite, systemwide, mileage, paid bid upgrades (Plusgrade-style), and how good each is.
8. Connections: minimum connection times vs. realistic ones, protected vs. unprotected connections, airport-specific transfer pitfalls, lounge access routes (card, status, cabin, day pass).
9. Security and border programs: Global Entry, TSA PreCheck, CLEAR, mobile passport control, and the EU Entry/Exit System (EES) and ETIAS status as of your search date, from official EU sources only.

FORMAT: Markdown, one section per numbered topic. In each section, first a claims table: Claim | Source URL | Source type (official / program page / secondary) | Confidence (high/medium/low) | Date published or checked. Then "Tactics": numbered, one line each, citing the claim rows they rest on. End with three lists: (a) facts that change often and must be re-verified before booking, (b) places where sources conflict, stated plainly, (c) what you could not find. Never present a fare or price as current; label every price with its date.
```

## Research Results

Returned 2026-11-06. The report below is reproduced as returned (headings demoted two levels), with light edits for a public audience.

### How to Book Flights Well: A Durable Method for Independent Travellers (checked 7 November 2026)

The decisions that save the most money and trouble are not the old tricks. Booking on a particular weekday, for example, is worth about 1.4% at most. What matters is choosing which days you fly, booking inside the right advance window (roughly 3–8 weeks for US domestic and 7 weeks–4 months for international, per Google's 2026 data), reading the fare-family rules before you pay, and knowing exactly what protection you give up when you leave a single ticket.

#### TL;DR
- **Timing:** watch the travel dates, not the booking weekday. Google's five-year data puts the cheapest US domestic fares about 39 days out and international about 89 days out. Departing Monday and returning Tuesday or Wednesday saves about 14% versus weekend travel. Booking on the "cheapest" weekday saves only about 1.4%.
- **Fare and ticket structure:** basic economy has largely stopped earning miles and status at Delta (Main Basic), American (tickets bought from 17 Dec 2025) and United (from 2 Apr 2026, except cardholders and elites). Separate tickets and hidden-city tickets give up EU261/UK261 missed-connection protection and contract rights. Treat both as deliberate risks, not tricks.
- **Borders, November 2026:** the EU Entry/Exit System has been fully operational since 10 April 2026. ETIAS is officially scheduled for "the last quarter of 2026" but is not yet live and cannot be applied for. Global Entry costs $120, and the UK ETA costs £20 and is mandatory for visa-free visitors, including Americans.

**How to read this document.** Each section has a claims table followed by tactics. Claim IDs use the form [C*section*.*row*]. "Date" is the date the source was published where known; otherwise it is the date checked (7 Nov 2026). All prices are historical data points dated to their source, never current quotes.

---

#### 1. Booking timing

| ID | Claim | Source URL | Source type | Confidence | Date published or checked |
|---|---|---|---|---|---|
| C1.1 | Google's 2026 analysis (five years of aggregated Google Flights data, US departures) puts the cheapest US domestic fares about 39 days before departure (low range 22–57 days) and international fares about 89 days out (range 50–133). Europe trips are cheapest about 90 days out. | https://www.forbes.com/advisor/credit-cards/airfare-lowest-prices-on-these-dates-lmandp5/ | secondary (reporting Google data) | high | Google data released 5 Oct 2026; checked 7 Nov 2026 |
| C1.2 | Google: "Wednesday actually beat out Tuesday as the absolute cheapest day to book… buying on a Wednesday only saves you about 1.4% compared to Sunday, the most expensive day." | https://blog.google/products-and-platforms/products/search/holiday-travel-trends-2026/ | official (Google Keyword post "Wheels up: Trends and tips for 2026 holiday travel", James Byers) | high | 5 Oct 2026 |
| C1.3 | Google: "departing on Monday and returning on Tuesday or Wednesday saves about 14% over weekend flights (and up to 20% domestically versus departing and returning on Sunday)." | https://blog.google/products-and-platforms/products/search/holiday-travel-trends-2026/ | official (Google Keyword post "Wheels up: Trends and tips for 2026 holiday travel", James Byers) | high | 5 Oct 2026 |
| C1.4 | Holiday timing in Google's 2026 data: Thanksgiving fares lowest about 34 days out (21–57); Christmas about 56 days out (33–67). | https://www.forbes.com/advisor/credit-cards/airfare-lowest-prices-on-these-dates-lmandp5/ | secondary | high | 5 Oct 2026 data |
| C1.5 | Google's 2025 edition had Tuesday cheapest to book, 1.3% below Sunday. The "cheapest day" changes from year to year and the margin is always negligible. | https://travelmarketnews.com/best-time-to-book-flights-guide | secondary | medium | checked 7 Nov 2026 |
| C1.6 | Expedia/ARC 2025 Air Hacks (ARC sales data, Jan–Oct 2024): Sunday cheapest day to book, up to 8% vs Friday, a gap that "shrunk from last year's difference of 13%"; domestic best bought at least 34 days out. | https://www2.arccorp.com/articles-trends/the-latest/arc-expedia-2025-air-hacks-report/ | official (ARC, data owner) | high | Jan 2025 |
| C1.7 | Expedia 2025: book domestic 1–3 months ahead to save about 25% vs last-minute. International "18–29 days before" was reported as the cheapest window, which conflicts with Google. | https://www.travelpulse.com/news/airlines-airports/expedia-air-hacks-report-reveals-the-best-times-to-book-flights-with-airfares-down-in-2025 ; https://pointchaser.com/news/expedia-air-travel-hacks-report/ | secondary | medium | 28 Jan 2025 |
| C1.8 | Expedia's 2026 Canadian release named Monday the cheapest day to book (3% saving vs Saturday). A secondary summary says Expedia's US 2026 report named Friday (3% below Sunday). | https://www.expedia.com/newsroom/?p=63513 ; https://travelmarketnews.com/best-time-to-book-flights-guide | official (Expedia) / secondary | medium | 2026 |
| C1.9 | Google Flights shows a route-specific "cheapest time to book" insight and a low/typical/high price indicator with price history; these depend on Google having enough data for the route. | https://blog.google/products-and-platforms/products/search/holiday-travel-trends-2026/ ; https://www.afar.com/magazine/how-to-use-googles-cheapest-flight-tool | official / secondary | high | 2023–2026 |
| C1.10 | Google Price Guarantee: book a flight showing the badge, Google watches the price, and "Google pays you the difference if prices drop before takeoff" via Google Pay. | https://www.google.com/travel/flights/guarantee?gl=us | official (Google) | high | checked 7 Nov 2026 |
| C1.11 | Guarantee limits: only "Book on Google" itineraries showing the badge, departing the US; cannot be added after booking; terms last modified 1 Oct 2024; $5 minimum payout; at most three active guaranteed bookings. | https://withautopilot.com/blog/google-flights-price-guarantee ; https://www.tomsguide.com/news/google-search-is-rolling-out-price-guarantees-for-flights-heres-how-it-works | secondary | medium | checked 7 Nov 2026 |
| C1.12 | Going's "Price Drop" monitors an already-booked fare until departure (Going's own guide). | https://www.going.com/guides/google-flights-price-guarantee | program page (Going) | medium | checked 7 Nov 2026 |
| C1.13 | View from the Wing: the 1.4% weekday gap is "about $7 on a $500 ticket" (illustrative, Oct 2026), and you should not pass up a good fare today to wait for the historical sweet spot. | https://viewfromthewing.com/google-data-says-holiday-flights-have-a-sweet-spot-for-when-to-book-but-waiting-for-it-can-cost-you-more/ | secondary (established blog) | high | 6 Oct 2026 |

##### Tactics
1. Pick the cheapest *travel days* first (Mon–Wed departures and returns), then worry about when to buy [C1.3].
2. Ignore "book on Tuesday" advice; the best weekday changes each year and is worth about 1–2% [C1.2][C1.5][C1.13].
3. Start watching US domestic trips about 8 weeks out and aim to buy in the 3–8 week window [C1.1].
4. Start watching international and Europe trips about 4–5 months out and aim to buy 7–13 weeks out [C1.1].
5. For Thanksgiving and Christmas, buy in October or earlier rather than gambling on a late drop [C1.4][C1.13].
6. Treat data-set averages as priors, then follow the route-specific "cheapest time to book" insight once your dates are fixed [C1.9].
7. If a fare is flagged "low" for your route, buy it rather than waiting for an average sweet spot [C1.9][C1.13].
8. Set a Google Flights price-tracking alert for each candidate date pair while you are deciding [C1.9].
9. Book through Google's badge when it appears on a US-origin trip and the fare rules suit you; it is free downside protection [C1.10][C1.11].
10. After booking any changeable fare, keep monitoring (Google tracking or Going Price Drop) and re-price if the fare drops [C1.12].

---

#### 2. Search technique

| ID | Claim | Source URL | Source type | Confidence | Date published or checked |
|---|---|---|---|---|---|
| C2.1 | Google Flights' "Date grid and Price graph make it easy to find the best flight deals". The grid compares departure/return combinations; the graph plots prices over weeks or months for a fixed trip length. | https://www.google.com/travel/flights?gl=US&hl=en-US ; https://withautopilot.com/blog/google-flights-tips | official / secondary | high | checked 7 Nov 2026 |
| C2.2 | Google reports connecting itineraries can be cheaper than nonstops, and its 2026 tips advise saving by choosing connections over expensive nonstops. A 2025 summary quotes "up to 22%" cheaper with a stopover. | https://blog.google/products-and-platforms/products/search/holiday-travel-trends-2026/ ; https://traveltomorrow.com/google-flights-reveals-holiday-trends-and-insights-for-2025/ | official / secondary | medium | 2025–2026 |
| C2.3 | TAP Portugal Stopover: "free stopover for up to 10 days in Lisbon or Porto" on the outbound or inbound, with 25% off a domestic Portugal flight and offers from 150+ partners. | https://www.flytap.com/en-us/stopover | program page (airline) | high | checked 7 Nov 2026 |
| C2.4 | TAP's stopover applies to cash fares; award tickets are not eligible. It is defined as 24–240 hours on medium- and long-haul TAP itineraries. | https://travelingformiles.com/tap-air-portugal-stopover-program/ ; https://biirdee.com/blog/free-airline-stopovers-extra-country-or-free-hotel | secondary | medium | checked 7 Nov 2026 |
| C2.5 | Icelandair: stopover in Iceland at "no additional airfare" on transatlantic tickets, up to 7 nights on most fares and up to 21 nights on Economy Flex and Saga Premium Flex. The booking engine handles up to 7 nights; longer stays go through the service centre. | https://airtreks.com/stopover-programs/icelandair ; https://guidetoiceland.is/travel-info/what-to-do-during-a-stopover-in-iceland | secondary (quoting airline page across Jul 2025–Oct 2026) | medium | checked 7 Nov 2026 |
| C2.6 | Turkish Airlines runs two separate programs. Touristanbul is a free guided city tour; Turkish Airlines' official Touristanbul page gives the window as "a layover time between 6 - 24 hours", requires "departure and arrival flights under the same reservation code (PNR)" and "a Turkish Airlines ticket starting with the number 235," and says passengers "cannot use both the Touristanbul and Stopover services during the same waiting period." "Stopover in Istanbul" gives free hotel nights for connections of 20 hours to 7 days, and N and R booking classes are excluded from the hotel. | https://www.turkishairlines.com/en-sa/flights/fly-different/touristanbul/ ; https://theaviationhub.co.uk/turkish-airlines-free-istanbul-tours-and-hotels-the-2026-guide/ ; https://www.airtraveler.club/intel/turkish-airlines-free-hotel-istanbul-stopover/ | program page (airline) / secondary | high (Touristanbul) / medium (hotel) | 2026 |
| C2.7 | Turkish hotel nights: generally 1 night (4-star) in economy and 2 nights (5-star or boutique) in business. Trips starting in the US and some Asian origins get an extra night (2 economy / 3 business) under terms dated 24 Sep 2026. The request must be made at least 72 hours before the Istanbul-bound flight. | https://www.airtraveler.club/intel/turkish-airlines-stopover-istanbul-tashkent-savings/ ; https://www.airtraveler.club/intel/turkish-airlines-free-hotel-istanbul-stopover/ | secondary | medium | Sep–Oct 2026 |
| C2.8 | The Points Guy's stopover guide lists Copa's Panama Stopover (no additional airfare), Iberia's "Hola Madrid" (1–9 nights at no extra airfare) and Qantas stopover packages, alongside Icelandair, TAP and Turkish. | https://thepointsguy.com/airline/guide-to-airline-stopover-programs/ | secondary (established blog) | medium | checked 7 Nov 2026 |
| C2.9 | United's Excursionist Perk (a free one-way within a region on round-trip awards) ended for tickets issued from 21 Aug 2025. | https://biirdee.com/blog/free-airline-stopovers-extra-country-or-free-hotel | secondary | medium | 2026 |
| C2.10 | Turkish's stopover hotel requires the whole trip on Turkish ticket stock (ticket number starting 235), operated by Turkish. | https://awardwallet.com/airlines/turkish-airlines-stopover/ | secondary | medium | checked 7 Nov 2026 |

##### Tactics
1. Open the Date grid before choosing any date; shifting a day or two often matters more than any other lever [C2.1][C1.3].
2. Use the Price graph with a fixed trip length to find the cheapest week in a season [C2.1].
3. Search nearby airports and allow one connection before accepting an expensive nonstop [C2.2].
4. On transatlantic trips, price TAP via Lisbon or Porto with a free stopover as a "two countries for one fare" baseline [C2.3][C2.4].
5. Price Icelandair via Keflavík with up to 7 nights at no added airfare; buy a Flex fare if you want up to 21 [C2.5].
6. On Turkish via Istanbul, build a 20+ hour connection on purpose to get free hotel nights, and request them more than 72 hours ahead [C2.6][C2.7].
7. Check your Turkish booking class (not N or R) and ticket stock (235) before relying on the free hotel [C2.6][C2.10].
8. Do not assume stopover perks apply to award tickets or partner-issued tickets; most are cash-fare-only [C2.4][C2.5][C2.10].
9. Do not build plans on United's Excursionist Perk; it is gone for tickets issued after 21 Aug 2025 [C2.9].
10. Confirm every stopover program on the airline's own page on the day you book; terms change (Turkish revised its tiers in Sep 2026) [C2.7].

---

#### 3. Positioning flights and separate (self-transfer) tickets

| ID | Claim | Source URL | Source type | Confidence | Date published or checked |
|---|---|---|---|---|---|
| C3.1 | Under the CJEU's *Air France v Folkerts* (C-11/11, 26 Feb 2013), a missed connection on one booking is compensable when you reach the final destination 3+ hours late, even if the first leg's delay was short. | https://airadvisor.com/en/statistics/missed-connections-europe ; https://getflyclaims.com/blog/missed-connection-compensation | secondary (citing CJEU) | high | checked 7 Nov 2026 |
| C3.2 | Separately booked tickets are not treated as one journey under EU261 or UK261; there is no compensation for a missed self-connection. | https://www.airhelp.com/en-int/blog/what-are-your-rights-for-self-connecting-flights/ ; https://www.bottonline.co.uk/flight-delay-compensation/claim-guides/missed-connection-flight-compensation | secondary (claims firm / law firm) | high | 2026 |
| C3.3 | *Wegener* (C-537/17, 2018): a single booking that starts in the EU is covered for the whole journey, even when the missed connection is outside the EU on a non-EU airline. | https://robindesairs.eu/en/blog/wegener-single-ticket-non-eu-cjeu-ruling.html | secondary (citing CJEU) | high | checked 7 Nov 2026 |
| C3.4 | On separate tickets, the onward airline treats a missed self-connection as a no-show; the first airline has no liability for the second flight. | https://www.flightcontacthelp.com/guides/missed-connections ; https://www.zealconnect.com/glossary/missed-connection-compensation/ | secondary | medium | 2026 |
| C3.5 | A buffer rule of thumb for separate tickets: at least 3 hours domestic-to-domestic, 4 hours for international-to-anything, and 5+ hours if bags must be reclaimed and re-checked. | https://www.flightcontacthelp.com/guides/missed-connections | secondary (single source) | low | 2026 |
| C3.6 | Alliance membership or codeshares do not create connection protection between separate bookings. | https://www.flightcontacthelp.com/guides/missed-connections | secondary | medium | 2026 |
| C3.7 | When an OTA sells separate tickets with its own "transfer guarantee", the guarantee comes from the seller, not the airline, and has its own exclusions. | https://flyclaimer.com/missed-connection-compensation/ | secondary | medium | checked 7 Nov 2026 |

##### Tactics
1. Keep every connection on one booking whenever the price gap is small; that alone keeps rebooking duty and EU261/UK261 cover [C3.1][C3.2][C3.3].
2. Start EU-origin long-haul trips on a single ticket from an EU airport to keep *Wegener* coverage for the whole journey [C3.3].
3. Use a positioning flight only when the saving clearly beats the cost of a missed onward ticket plus a hotel night [C3.2][C3.4].
4. Position the day before, not the same day, for any long-haul or non-refundable onward ticket [C3.4][C3.5].
5. If you must self-transfer the same day, use the 3/4/5-hour buffers as a floor, not a target [C3.5].
6. Do not assume two tickets on the same alliance protect each other [C3.6].
7. Read OTA "self-transfer guarantee" terms as a commercial product with exclusions, not a legal right [C3.7].
8. Travel carry-on only on self-transfers so a late first leg does not also cost you a bag drop cut-off [C3.4][C3.5].

---

#### 4. Fare families, basic economy and mileage earning

| ID | Claim | Source URL | Source type | Confidence | Date published or checked |
|---|---|---|---|---|---|
| C4.1 | Delta: "Delta Main Basic (Basic Economy) tickets are not eligible to earn miles in the SkyMiles Program or earn MQDs towards Medallion Status." | https://www.delta.com/us/en/skymiles/program-resources/program-rules | official (airline) | high | checked 7 Nov 2026 |
| C4.2 | Delta's fare ladder: Main Basic (seat assigned after check-in, Zone 8 boarding, cancellation with a fee); Main Classic (MQD earning, 5 miles/$, eCredit on cancel, seat choice); Main Extra (7 miles/$, refundable to the original payment form). | https://news.delta.com/now-booking-delta-new-product-names-and-travel-experiences-flying-fall | official (airline newsroom) | high | 2025 |
| C4.3 | Delta extended "Basic" fares to premium cabins: Comfort Basic from Nov 2025, First Basic / Premium Select Basic / Basic Business from 8 Jul 2026. These earn reduced miles and are not upgradeable. | https://awardfares.com/blog/skymiles-guide/ ; https://withautopilot.com/blog/delta-upgrade-list | secondary | medium | 2026 |
| C4.4 | United: since 2 Apr 2026, general MileagePlus members earn zero miles on Basic Economy. Premier members and eligible cardholders earn at reduced rates (e.g., none for a general member, 2 miles/$ for Silver, 3 miles/$ for a general-member cardholder). | https://thepointsguy.com/airline/united-airlines-new-basic-business-premium-plus-fares ; https://www.nerdwallet.com/travel/learn/how-to-make-the-most-of-uniteds-basic-economy | secondary (established blogs) | high | 2026 |
| C4.5 | United Basic Economy: no full-size carry-on on domestic flights unless you hold elite status or an eligible United card; seat auto-assigned. United also launched basic versions of Polaris and Premium Plus with no upgrades. | https://www.nerdwallet.com/travel/learn/how-to-make-the-most-of-uniteds-basic-economy ; https://thepointsguy.com/airline/united-airlines-new-basic-business-premium-plus-fares | secondary | high | 2026 |
| C4.6 | American: Basic Economy tickets bought from 17 Dec 2025 earn no miles or Loyalty Points. For Basic Economy bought on or after 18 May 2026, elites lose free seat selection, complimentary upgrades and systemwide upgrades. | https://onemileatatime.com/news/american-basic-economy-much-worse-aadvantage-elites/ ; https://frequentmiler.com/american-airlines-completes-nerfing-of-basic-economy-for-elite-members/ | secondary (established blogs; AA statement 8 Apr 2026) | high | Apr 2026 |
| C4.7 | American and Delta basic fares include a full-size carry-on; United domestic basic does not. | https://withautopilot.com/blog/main-cabin-vs-basic-economy | secondary | medium | 2026 |
| C4.8 | American's Conditions of Carriage incorporate the published fare rules and filed tariffs into the contract, so fare rules are binding terms. | https://www.aa.com/i18n/customer-service/support/conditions-of-carriage.html | official (contract) | high | checked 7 Nov 2026 |

##### Tactics
1. Before buying any "basic" fare, write down the three things you lose: seat choice, changeability, and miles/status [C4.1][C4.2][C4.4][C4.6].
2. If you are chasing Delta Medallion status, never buy Main Basic; it earns zero MQDs [C4.1].
3. If you hold no United card or status, assume United Basic Economy earns nothing from 2 Apr 2026 [C4.4].
4. If you hold American elite status, buy Main Cabin to keep upgrades, SWUs and seat choice (Basic bought from 18 May 2026 loses them) [C4.6].
5. On United domestic basic, budget for the carry-on ban unless you are an elite or cardholder [C4.5][C4.7].
6. Price the step to Delta Main Classic or Extra when plans might change; Extra refunds to the original payment form [C4.2].
7. Treat premium-cabin "Basic" fares at Delta and United as non-upgradeable, lower-earning products [C4.3][C4.5].
8. Read the fare rules page at checkout; it forms part of the contract, not marketing copy [C4.8].
9. For European carriers (BA, Lufthansa Group, Air France-KLM), check each airline's fare-family page at booking; this document could not verify their current rules (see "Could not be found") [C4.8].

---

#### 5. Hidden-city ticketing (skiplagging): documented as a risk

| ID | Claim | Source URL | Source type | Confidence | Date published or checked |
|---|---|---|---|---|---|
| C5.1 | American's Conditions of Carriage list as a prohibited booking practice: "Purchasing a ticket without intending to fly all flights to gain lower fares (hidden city ticketing)". Back-to-back ticketing is also prohibited. | https://www.aa.com/i18n/customer-service/support/conditions-of-carriage.html | official (contract) | high | checked 7 Nov 2026 |
| C5.2 | Per American's conditions, when prohibited practices are found it may cancel unused portions, charge the fare that should have applied, and refuse boarding to the passenger or their bags. | https://www.yahoo.com/lifestyle/articles/everything-know-skiplagging-controversial-airfare-123000661.html | secondary (summarising contract) | medium | checked 7 Nov 2026 |
| C5.3 | United's and Delta's contracts of carriage also list hidden-city ticketing as prohibited. | https://www.afar.com/magazine/can-you-get-banned-from-flying-for-skiplagging | secondary | medium | checked 7 Nov 2026 |
| C5.4 | American has audited AAdvantage accounts for hidden-city use. One reported 2020 audit flagged 52 hidden-city tickets and demanded about $2,500 or account termination. | https://www.doctorofcredit.com/american-airlines-going-after-hidden-city-ticket-abusers/ ; https://milestomemories.com/american-airlines-hidden-city-ticketing/ | secondary | medium | 2020 |
| C5.5 | American sued Skiplagged.com in August 2023, alleging breach of its Use Agreement and Conditions of Carriage. | https://www.culsr.org/articles/american-airlines-v-skiplaggedcom | secondary (academic) | medium | checked 7 Nov 2026 |
| C5.6 | Lufthansa sued a passenger who skipped the Frankfurt–Oslo final leg of an Oslo–Seattle return, claiming €2,112. A Berlin court dismissed the claim in Dec 2018, Lufthansa appealed, then withdrew the appeal. | https://www.npr.org/2019/02/13/694352593/lufthansa-airlines-sues-customer-who-skipped-part-of-his-return-flight ; https://thepointsguy.com/news/a-small-victory-for-bargain-hunters-lufthansa-drops-lawsuit-against-skiplagging-passenger/ | secondary (news) | high | 2019 |
| C5.7 | The Lufthansa dismissal rested on the airline's price-recalculation terms lacking transparency or its damages figure being unclear. Reports say the court did not reject the airline's right to sue in principle. | https://www.npr.org/2019/02/13/694352593/lufthansa-airlines-sues-customer-who-skipped-part-of-his-return-flight ; https://simpleflying.com/was-lufthansa-successful-in-suing-a-passenger-for-skiplagging/ | secondary | medium | 2019 |
| C5.8 | Skipping a segment usually leads the airline to cancel the rest of the itinerary, which is why skiplaggers skip only the last leg. | https://thepointsguy.com/news/a-small-victory-for-bargain-hunters-lufthansa-drops-lawsuit-against-skiplagging-passenger/ | secondary | high | 2019 |
| C5.9 | Checked bags (and carry-ons gate-checked at boarding) go to the ticketed final destination, not the hidden city. | https://www.yahoo.com/lifestyle/articles/everything-know-skiplagging-controversial-airfare-123000661.html | secondary | high | checked 7 Nov 2026 |

##### Risk notes (not tactics to use; read before anyone considers it)
1. It breaches the contract you accept at purchase at American, United and Delta [C5.1][C5.3].
2. The airline can cancel your onward and return segments and re-price the ticket [C5.2][C5.8].
3. Loyalty accounts tied to the booking can be audited, debited or closed [C5.4].
4. Airlines have sued both a booking site (American v. Skiplagged) and an individual passenger (Lufthansa) [C5.5][C5.6].
5. Lufthansa's loss turned on its own drafting, not a finding that hidden-city ticketing is permitted [C5.7].
6. Any checked or gate-checked bag ends up at the final city; irregular operations can reroute you via a different hub, stranding the plan [C5.9].
7. Method position: do not recommend it. If a hidden-city fare is far cheaper, ask the airline to match or look for a different routing instead [C5.1][C5.2].

---

#### 6. Seats and aircraft

| ID | Claim | Source URL | Source type | Confidence | Date published or checked |
|---|---|---|---|---|---|
| C6.1 | SeatGuru (Tripadvisor) shut down on 31 Oct 2025 and redirects to Tripadvisor; its seat-map data had not been updated since about March 2020. | https://smartwithpoints.co.uk/p/seatguru-closes-flightseatmap-aerolopa-alternatives ; https://travel-dealz.com/blog/seat-map-tools/ | secondary | high | Oct–Nov 2025 |
| C6.2 | aeroLOPA draws seat maps to scale, down to window positions, and identifies aircraft variants. It does not label seats "good" or "bad" the way SeatGuru did. | https://onemileatatime.com/guides/aerolopa-seatmaps/ | secondary (established blog) | high | checked 7 Nov 2026 |
| C6.3 | SeatMaps.com works more like a direct SeatGuru replacement, with seat-by-seat information. | https://onemileatatime.com/guides/aerolopa-seatmaps/ ; https://travel-dealz.com/blog/seat-map-tools/ | secondary | medium | checked 7 Nov 2026 |
| C6.4 | aeroLOPA says SeatGuru's founder now works with it (self-reported). | https://www.aerolopa.com/seatguru-alternative | program page (self-interested) | low | checked 7 Nov 2026 |
| C6.5 | US DOT Family Seating Dashboard: Alaska, American, Frontier, Hawaiian and JetBlue guarantee adjacent seats for a child 13 or under and an accompanying adult at no extra cost on all fare types; Allegiant, Delta, Southwest and United do not. | https://www.transportation.gov/airconsumer/airline-customer-service-dashboard | official (US DOT) | high | checked 7 Nov 2026 |
| C6.6 | DOT conditions for seat-assigning airlines include adjacent seats being available at booking in the selected class. If the conditions are met, adjacent seats must be assigned no later than the day before the flight. | https://www.transportation.gov/airconsumer/airline-family-seating-dashboard | official (US DOT) | high | checked 7 Nov 2026 |
| C6.7 | United's published policy seats children 12 and under next to an adult, including in Basic Economy, but it is not a DOT-dashboard guarantee. | https://www.airtraveler.club/insider/group-travel/five-major-us-airlines-do-not-guarantee-free-family-seating-on-all-fares/ | secondary | medium | 2026 |
| C6.8 | Basic economy at the US majors means no free advance seat choice; seats are assigned at or after check-in. | https://news.delta.com/now-booking-delta-new-product-names-and-travel-experiences-flying-fall ; https://www.nerdwallet.com/travel/learn/how-to-make-the-most-of-uniteds-basic-economy | official / secondary | high | 2025–2026 |

##### Tactics
1. Do not use SeatGuru; it is closed and its data was frozen in 2020 [C6.1].
2. Identify the exact aircraft variant on the airline's seat map, then check its to-scale layout on aeroLOPA [C6.2].
3. Use SeatMaps.com when you want seat-by-seat notes rather than a to-scale drawing [C6.3].
4. Cross-check any third-party map against the airline's own seat map at booking; it is the only binding layout [C6.2][C6.3].
5. Families: prefer airlines with a DOT green check, and book everyone on one reservation while adjacent seats still show available [C6.5][C6.6].
6. On Delta, United or Southwest with young children, buy a fare that includes seat selection rather than relying on gate help [C6.5][C6.7].
7. Avoid basic economy whenever a specific seat (window, aisle, together) matters [C6.8].
8. Overnight long-haul: choose a window to sleep undisturbed; short daytime flights or tight connections: choose an aisle near the front (practitioner judgement, not a sourced claim).

---

#### 7. Upgrades

| ID | Claim | Source URL | Source type | Confidence | Date published or checked |
|---|---|---|---|---|---|
| C7.1 | United PlusPoints: Premier Platinum gets 40 on qualifying; Premier 1K gets 280 more (320 total) plus 20 per additional 3,000 PQPs. Silver and Gold get none. | https://thepointsguy.com/news/united-airlines-premier-status-pluspoints-changes/ | secondary (established blog) | high | Dec 2025 |
| C7.2 | United PlusPoints costs (fixed chart, travel before 1 Feb 2027): about 20 for economy to domestic first; 40 from standard economy and 80 from discounted economy (S/T/L/K/G) to Polaris; 30 from Premium Plus to Polaris; 40 per segment on partners. Points are deducted only if the upgrade clears. | https://awardwallet.com/news/united-mileageplus/premier-status-changes-2026/ ; https://thepointsguy.com/news/maximize-pluspoints | secondary | medium | 2026 |
| C7.3 | For travel on or after 1 Feb 2027, United moves PlusPoints upgrades to demand-based pricing. | https://www.forbes.com/sites/baileyberg/2026/10/30/uniteds-new-elite-status-rules-could-cost-frequent-flyers-thousands/ | secondary | medium | 30 Oct 2026 |
| C7.4 | Delta Choice Benefits: Platinum picks 1 (option of 4 Regional Upgrade Certificates); Diamond picks 3 (options of 4 Global, 8 Regional, or 2 Global + 4 Regional). 2026 certificates must be booked and flown by 31 Jan 2027. | https://www.delta.com/us/en/skymiles/medallion-program/choice-benefits ; https://thepointsguy.com/loyalty-programs/ultimate-guide-delta-choice-benefits | official / secondary | high | checked 7 Nov 2026 |
| C7.5 | American systemwide upgrades come only through Loyalty Point Rewards (from 175,000 Loyalty Points: a choice that can include 2 SWUs) or Million Miler milestones. They are valid on AA-marketed and AA-operated flights. | https://www.aa.com/web/i18n/aadvantage-program/aadvantage-status/loyalty-point-rewards.html | official (airline) | high | checked 7 Nov 2026 |
| C7.6 | aa.com: "Systemwide upgrades are not available on Basic Economy tickets bought on or after May 18, 2026." | https://www.aa.com/web/i18n/aadvantage-program/answers-support/upgrades-for-status-members.html | official (airline) | high | checked 7 Nov 2026 |
| C7.7 | American ended its fixed mileage-upgrade chart (with co-pays) on 12 Aug 2025 and replaced it with dynamically priced "Instant Upgrades" in cash or miles. These clear immediately and apply only on AA/American Eagle-operated flights booked with American. | https://www.aa.com/web/i18n/aadvantage-program/answers-support/using-miles-for-travel.html | official (airline) | high | checked 7 Nov 2026 |
| C7.8 | United MileagePlus Upgrade Awards cost miles plus a co-pay that varies by fare and region. Reported examples (2026): 22,500 miles + $125 each way economy to business; 30,000 miles + $600 LAX–SYD. Basic Economy is not upgradeable. | https://awardwallet.com/airlines/united-mileageplus/united-upgrade-with-miles/ | secondary | medium | 2026 |
| C7.9 | British Airways "Upgrade Using Avios" works on cash BA fares except the cheapest economy (O, G, Q). The price is the difference between the two cabins' reward prices (e.g., 90,000 − 60,000 = 30,000 Avios), plus surcharges and any extra UK APD. It needs reward-seat availability. | https://www.headforpoints.com/2026/02/01/how-do-you-upgrade-a-british-airways-cash-flight-with-avios/ | secondary (established blog) | high | 1 Feb 2026 |
| C7.10 | More than 50 airlines run upgrade-bid auctions, many powered by Plusgrade, including Air Canada, Aer Lingus, Aeromexico, Air New Zealand, Brussels Airlines, Copa, Ethiopian, Hawaiian, SAS, Etihad, Lufthansa, Qantas and Virgin Atlantic. American, Delta, United and Alaska do not run bid upgrades. | https://www.afar.com/magazine/you-can-bid-for-discounted-flight-upgrades-with-these-airlines | secondary | medium | 4 Mar 2026 |
| C7.11 | Plusgrade announced Discover Airlines upgrade bidding on 20 Apr 2026. | https://www.plusgrade.com/resources/discover-airlines-plusgrade-upgrade-bidding-premium-cabin/ | program page (vendor) | high | 20 Apr 2026 |
| C7.12 | From 25 Aug 2026, American's complimentary elite upgrades on some transcon and Hawaii routes (e.g., JFK–LAX) go to premium economy, not business. | https://finance.yahoo.com/economy/policy/articles/american-airlines-just-made-elite-143105661.html | secondary | medium | 2026 |

**Honest assessment.** Of these routes, *upgrade certificates* (Delta GUCs, United PlusPoints, AA SWUs) are the most valuable on long-haul, but they need high status and clear unpredictably on peak routes. *Complimentary elite upgrades* are now restricted to shorter flights and non-basic fares. *Mileage upgrades with co-pays* often cost close to a cheap business fare on the same route. *Bid upgrades* are the only path open to non-elites; treat them as an optional add-on, not a plan.

##### Tactics
1. Never buy basic fares if you intend to upgrade; every program above excludes them [C7.6][C7.8][C4.3].
2. Use United PlusPoints from full-fare economy or Premium Plus (40/30) rather than discounted economy (80) [C7.2].
3. Spend United PlusPoints on travel before 1 Feb 2027 while the fixed chart still applies [C7.3].
4. Delta Diamonds who fly long-haul should pick Global certificates; Platinums get only Regional [C7.4].
5. Diary the 31 Jan 2027 deadline for Delta 2026 certificates [C7.4].
6. Earning American SWUs requires 175,000+ Loyalty Points; ordinary travellers should not plan around them [C7.5].
7. Compare American's dynamic Instant Upgrade price with a fresh business fare before paying [C7.7].
8. Price a United mileage upgrade's co-pay against buying the higher cabin outright [C7.8].
9. Only buy BA cash fares outside O/G/Q if you plan an Avios upgrade, and check reward-seat space first [C7.9].
10. On bid-upgrade airlines, bid near the low end; you are charged only if the bid clears [C7.10][C7.11].
11. Do not expect a transcon business upgrade on American after 25 Aug 2026; the comp upgrade may be to premium economy [C7.12].

---

#### 8. Connections and lounges

| ID | Claim | Source URL | Source type | Confidence | Date published or checked |
|---|---|---|---|---|---|
| C8.1 | CBP: processing "must be completed at the first port of entry"; "Baggage not obtained after your international flight will not get to your final destination." | https://www.cbp.gov/sites/default/files/documents/WelcomeToTheUS.pdf ; https://www.afar.com/magazine/why-do-you-have-to-re-check-your-bag-on-connecting-flights | official (CBP) | high | checked 7 Nov 2026 |
| C8.2 | At Seattle-Tacoma, all international arrivals (except from preclearance airports) must clear CBP and claim checked bags at the first US port, even if connecting. Processing can take 60+ minutes at peak, and connecting passengers then re-clear TSA. | https://www.portseattle.org/page/international-connections | official (airport) | high | checked 7 Nov 2026 |
| C8.3 | Flights from a CBP preclearance airport arrive as domestic, so passengers skip the US customs and bag-recheck step on arrival. CBP's own Preclearance page says "Preclearance Operates at 16 Locations Worldwide!", with "more than 600 officers and agriculture specialists stationed at 16 Preclearance locations in 6 countries": Dublin and Shannon (Ireland), Aruba, Bermuda, Abu Dhabi (UAE), Nassau (Bahamas), and Calgary, Toronto, Billy Bishop Toronto, Edmonton, Halifax, Montreal, Ottawa, Vancouver, Victoria and Winnipeg (Canada). CBP says it precleared "more than 22 million travelers… nearly 14.6 percent of all commercial air travelers to the United States" in 2025. | https://www.cbp.gov/travel/preclearance ; https://www.afar.com/magazine/why-do-you-have-to-re-check-your-bag-on-connecting-flights | official (CBP) / secondary | high | checked 7 Nov 2026 |
| C8.4 | CBP's International Remote Baggage Screening (IRBS), piloted April 2025 with American on Sydney–LAX, lets eligible passengers skip claiming and re-checking bags. Passengers still clear passport control and TSA. | https://s202.q4cdn.com/986123435/files/doc_news/American-and-US-Customs-and-Border-Protection-pilot-innovative-baggage-screening-initiative-OPS-OTH-04-2025.pdf | official (airline press release) | high | Apr 2025 |
| C8.5 | Minimum connection times protect single-ticket bookings only; on separate tickets the MCT is irrelevant. | https://www.flightcontacthelp.com/guides/missed-connections | secondary | medium | 2026 |
| C8.6 | UK ETA transit: an ETA is needed if you pass through UK passport control. Airside transit at Heathrow or Manchester without passing passport control currently does not need one. | https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta | official (UK gov) | high | checked 7 Nov 2026 |
| C8.7 | Delta Sky Club via Amex: Platinum 10 visits and Delta Reserve 15 visits per year (a visit = 24 hours of entries); unlimited after $75,000 annual spend; guests $50. | https://www.thetravel.com/airport-lounges-quietly-restricting-access-for-cardholders-in-2026-and-1-opening-up/ | secondary | medium | 2026 |
| C8.8 | Amex Centurion from 8 Jul 2026: guests must be on the same flight; layover entry is limited to 5 hours before departure; guest fees $50 adult / $30 child. Lufthansa lounge access via Amex Platinum ended 30 Sep 2026. | https://www.thetravel.com/airport-lounges-quietly-restricting-access-for-cardholders-in-2026-and-1-opening-up/ ; https://www.insideflyer.com/posts/amex-platinum-lounge-access-expands-with-amsterdam-opening/ | secondary | medium | 2026 |
| C8.9 | Priority Pass members lost access to Chase Sapphire Lounges in August 2026. Amex's Priority Pass covers lounges only, with no restaurant credits. | https://www.thetravel.com/airport-lounges-quietly-restricting-access-for-cardholders-in-2026-and-1-opening-up/ | secondary | low | 2026 |
| C8.10 | Delta's Basic Business fares will not include Delta One Lounge or Sky Club access for travel from 19 Jan 2027. | https://withautopilot.com/blog/delta-upgrade-list | secondary | medium | 2026 |

##### Tactics
1. On any international-to-US-domestic connection, plan to collect bags, clear customs, re-check and re-clear TSA at the first US airport [C8.1][C8.2].
2. Allow well beyond the published MCT at a US port of entry; CBP alone can take 60+ minutes at peak [C8.2][C8.5].
3. Where a preclearance airport is available (e.g., in Canada or Ireland), routing through it lets you connect as a domestic arrival in the US [C8.3].
4. Check whether your route is in IRBS; if so you may skip the bag recheck, but still allow time for passport control and TSA [C8.4].
5. Treat the airline's MCT as a legal floor for protected single-ticket connections, not a comfort level [C8.5].
6. Check UK ETA transit rules before any UK connection that involves passport control, such as changing airports or landside self-transfer [C8.6].
7. Map lounge access before you fly: if you rely on a card or membership for entry, check its current visit caps, guest rules and exclusions (e.g. Amex Sky Club visit caps, Centurion guest rules, Priority Pass exclusions) [C8.7][C8.8][C8.9].
8. Do not buy Delta Basic Business expecting lounge access for travel from 19 Jan 2027 [C8.10].

---

#### 9. Security and border programs

| ID | Claim | Source URL | Source type | Confidence | Date published or checked |
|---|---|---|---|---|---|
| C9.1 | EES started progressive operations on 12 Oct 2025 in 29 European countries, collecting passport data, facial image and fingerprints at first entry or exit. | https://home-affairs.ec.europa.eu/news/new-entryexit-system-went-live-12-october-2025-10-13_en | official (EU Commission) | high | 13 Oct 2025 |
| C9.2 | "As of 10 April 2026, the EES will become fully operational," replacing passport stamping. By then over 45 million crossings had been registered and over 24,000 people refused entry. | https://home-affairs.ec.europa.eu/news/entryexit-system-will-become-fully-operational-10-april-2026-2026-03-30_en | official (EU Commission) | high | 30 Mar 2026 |
| C9.3 | EES applies to non-EU nationals on short stays (90 days in any 180) and is developed and managed by eu-LISA. | https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/smart-borders/entry-exit-system_en ; https://www.eulisa.europa.eu/news-and-events/videos/entryexit-system-being-progressively-rolled-out-across-europe | official (EU / eu-LISA) | high | checked 7 Nov 2026 |
| C9.4 | ETIAS "is scheduled to start in the last quarter of 2026. The exact start date of ETIAS will be officially communicated later this year." It will cover visa-free nationals (e.g., US citizens) visiting 30 European countries. | https://home-affairs.ec.europa.eu/news/main-differences-between-ees-and-etias-what-travellers-need-know-2026-04-28_en | official (EU Commission) | high | 28 Apr 2026 |
| C9.5 | The official ETIAS site is travel-europe.europa.eu/etias; "Starting in the last quarter of 2026, ETIAS is a new requirement for travellers who do not need a visa." | https://travel-europe.europa.eu/etias/about-etias/news-corner | official (EU) | high | checked 7 Nov 2026 |
| C9.6 | An older EU (EEAS) page says "ETIAS will cost EUR 7"; IATA and ABTA say €20. | https://www.eeas.europa.eu/eeas/coming-visa-free-country-and-travelling-europe_en ; https://www.iata.org/en/about/worldwide/europe/new-entry-requirements-eu/ | official (EEAS, older) / secondary | medium (on €20) | 2025–2026 |
| C9.7 | TSA: "The cost to enroll in Global Entry is $120 for five years of membership." PreCheck members cannot upgrade and must apply to Global Entry as new applicants. | https://www.tsa.gov/travel/frequently-asked-questions/how-can-i-switch-tsa-precheck-global-entry | official (TSA) | high | checked 7 Nov 2026 |
| C9.8 | TSA PreCheck costs "$85 or less" for five years, depending on enrolment provider (IDEMIA $79.75, CLEAR $84.95, Telos $85.00, figures as reported in 2026). CLEAR+ is listed at $219 (2026). | https://thepointsparty.com/articles/tsa-precheck-guide | secondary (quoting TSA/CBP/CLEAR) | medium | 2026 |
| C9.9 | Global Entry was reportedly suspended on 22 Feb 2026 during a partial government shutdown and reactivated on 11 Mar 2026. | https://entry.com/insights/us-global-entry-and-tsa-precheck-changes-2026-what-travelers-need-to-know | secondary (unverified) | low | 2026 |
| C9.10 | Minors 17 and under can apply for Global Entry free when a parent or guardian is enrolled or applying. | https://jetkonnect.com/trusted-traveler/tsa-precheck/ ; https://visagrade.com/global-entry-vs-tsa-precheck.html | secondary (citing CBP) | medium | 2026 |
| C9.11 | UK ETA costs £20 and allows multiple visits of up to 6 months each over 2 years (or until the passport expires). It is required for visa-free visitors including US, Canadian, Australian and EU nationals; British and Irish citizens are exempt. | https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/ ; https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta | official (UK Home Office) | high | Apr 2026 |
| C9.12 | Apply for the UK ETA at least 3 working days ahead, using only the official app or gov.uk. | https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta | official | high | checked 7 Nov 2026 |

##### Tactics
1. Non-EU travellers: expect biometric EES registration (face and fingerprints) on the first Schengen entry and allow extra time at the border [C9.1][C9.2][C9.3].
2. Do not apply for ETIAS yet; as of 7 Nov 2026 it is scheduled but not live [C9.4][C9.5].
3. Check travel-europe.europa.eu/etias before every Europe trip from late 2026; the EU has said it will announce the start date in advance [C9.4][C9.5].
4. Apply for ETIAS (when live) only on europa.eu; third-party sites add fees [C9.5][C9.6].
5. If you leave the US even occasionally, buy Global Entry ($120 as of Nov 2026) rather than PreCheck alone; it includes PreCheck [C9.7][C9.8].
6. Add children 17 and under to Global Entry while a parent applies; the fee is waived [C9.10].
7. Choose the cheapest PreCheck enrolment provider; the membership is identical [C9.8].
8. Get a UK ETA (£20 as of Apr 2026) before any UK visit or landside UK transit, at least 3 working days ahead [C9.11][C9.12][C8.6].
9. Apply early for trusted-traveller programs; federal funding lapses have reportedly paused enrolment [C9.9].

---

#### (a) Facts that change often: re-verify before booking
- Google's "cheapest day to book" and booking windows (revised yearly; Tuesday in 2025, Wednesday in 2026).
- Google Price Guarantee eligibility (US-origin, badge only) and payout terms.
- Every stopover program's terms: TAP nights and discounts, Icelandair night caps by fare, Turkish hotel nights by origin and cabin (revised Sep 2026).
- Basic economy rules and earning at Delta, United and American (changed Dec 2025, Apr 2026 and May 2026).
- United PlusPoints pricing (moves to dynamic for travel from 1 Feb 2027).
- Delta Choice Benefit options and certificate deadlines.
- American's Instant Upgrade prices and comp-upgrade cabin by route.
- Bid-upgrade participation by airline.
- DOT Family Seating Dashboard status per airline.
- Lounge access rules: Amex Sky Club visit caps, Centurion guest rules, Priority Pass exclusions.
- ETIAS start date and fee; EES procedures at specific border points.
- Global Entry, PreCheck and CLEAR fees and enrolment availability; UK ETA fee, which has risen twice: £10 at launch, £16 from 9 April 2025, then £20 from 8 April 2026 under the Home Office fee schedule updated on 18 March 2026 (per VisasNews and Gulf News secondary reports; cite the gov.uk fee schedule as the primary source).
- IRBS airport and route list.

#### (b) Where sources conflict
- **Best day to book:** Google 2026 says Wednesday (1.4% below Sunday); Expedia/ARC 2025 says Sunday (up to 8% below Friday); Expedia's 2026 Canadian release says Monday; a secondary summary says Expedia's 2026 US report names Friday. All agree the effect is small. Conclusion: ignore it.
- **International booking window:** Google says about 89 days out (range 50–133); Expedia 2025 reportedly says 18–29 days. These use different data sets (Google search prices vs ARC ticket sales) and cannot both be "the" window. This method follows Google's because it is route-tracked and more recent.
- **ETIAS fee:** an older EEAS page says €7; IATA and ABTA say €20.
- **ETIAS timing:** official EU pages say "last quarter of 2026"; a third-party tracker says no start date had been announced as of 26 Oct 2026; CIBT projects 2027. Treat the EU's own site as authoritative and expect slippage.
- **Turkish free hotel nights:** sources disagree on economy nights (1 vs 2), depending on origin country and terms date.
- **Lufthansa ruling:** reported variously as dismissed for non-transparent contract terms or for an unclear damages calculation.
- **American basic economy and paid upgrades:** OMAAT says paid or mileage dynamic upgrades still work on Basic; Frequent Miler says they are excluded.
- **SeatGuru closure:** most sources say 31 Oct 2025; some say November 2025.
- **DOT family seating:** early (2023) press listed only Alaska, American and Frontier; the current dashboard also lists Hawaiian and JetBlue. Use the dashboard.
- **United Basic Economy earning:** at least one low-quality site still says it earns standard miles, which is wrong since 2 Apr 2026.

#### (c) What could not be found
- Primary airline pages for basic or light fare families at Alaska, British Airways, Lufthansa Group and Air France-KLM, and their current earning rules.
- Official stopover pages for Qatar, Emirates, Etihad, Singapore, Finnair, Aer Lingus, Royal Jordanian and Air Canada; current terms for these were not verified.
- Hopper, Kayak and Skyscanner first-party methodology or prediction-accuracy data.
- ITA Matrix current status and features, and specific open-jaw versus two-one-ways pricing rules.
- Airline lists of which carriers refuse to through-check bags on separate tickets (interline baggage agreements).
- Published MCTs for specific hubs, and authoritative guidance on Heathrow terminal changes, Schengen/non-Schengen passport control at FRA, AMS and CDG, and JFK/CDG terminal transfers.
- ExpertFlyer's current features and pricing, and seat-alert alternatives.
- CBP Mobile Passport Control's current airport list and eligibility, from CBP.
- A CBP or DHS primary source for the reported Feb–Mar 2026 Global Entry suspension.
- An official confirmation that British Airways runs Plusgrade bid upgrades.
- Any current fare or price that could responsibly be called "current." None is presented as such.
