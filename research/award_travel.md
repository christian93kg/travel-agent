# Award travel and loyalty mechanics: research prompt and results

> Research snapshot compiled 2026-11-06 from public sources (links inline). Award charts, transfer ratios and hotel programs change often: re-check anything before you transfer points or book.

Method context: [points_and_seasons](../playbooks/points_and_seasons.md) (the three existing sweet spots this research re-checks).

## Prompt

```text
GIVEN: I am building a reusable, public trip-planning method. It holds three award "sweet spots" (ANA business via Virgin Atlantic, Qatar Qsuites via Avios, low-category Hyatt) but no general method for award travel. I want the durable method, not a list of today's deals. Prefer official program pages and established blogs (Frequent Miler, One Mile at a Time, The Points Guy, Upgraded Points, Prince of Travel).

TASK: Research and document:
1. The award-booking workflow: find live space first, then transfer, then book. Why you never transfer points speculatively. Typical transfer times by program.
2. Award search tools (seats.aero, point.me, Roame, PointsYeah, airline sites, ExpertFlyer): what each covers, cost, blind spots. Note where reviewers disagree.
3. Alliances and partner awards: partner-only space, which program sites show which partners, phantom availability.
4. Carrier surcharges: which programs pass them on for which airlines, and how to avoid them.
5. Holds, change and cancellation fees, close-in booking fees, and award inventory release windows.
6. Transferable currencies: how transfer partners and ratios work, transfer bonuses, and how often ratios change (recent examples).
7. Maintenance: how to tell if a sweet spot still works (devaluations, partner changes), how to track balances and expiry, when buying points makes sense.
8. The current state of the three existing sweet spots named in GIVEN, as of your search date: still valid, changed, or dead.

FORMAT: Markdown, one section per numbered topic. In each section, first a claims table: Claim | Source URL | Source type (official / program terms / secondary) | Confidence (high/medium/low) | Date published or checked. Then "Tactics": numbered, one line each, citing claim rows. Topic 8 is a table: Sweet spot | Status | What changed | Source | Date. End with: (a) facts that change often and must be re-verified, (b) conflicts between sources, (c) what you could not find.
```

## Research Results

Returned 2026-11-06. The report below is reproduced as returned (headings demoted two levels), with light edits for a public audience.

### A Reusable Award-Travel Planning Method (state of play as of November 6–7, 2026)

The method that holds up is: **confirm bookable space first, price the same seat in every program you can reach, then transfer and book right away.** Never transfer points speculatively. Of the three sweet spots in [points_and_seasons](../playbooks/points_and_seasons.md), all three still work, and all three got worse in 2024–2026. Virgin Atlantic → ANA was devalued with no notice on May 23, 2024 (from 45,000/47,500) and now prices at 52,500/60,000 points one way in business. Qatar Qsuites via Avios still starts at 70,000 Avios from the US, but the cash costs and booking rules are tighter. Hyatt's low categories now run on a 5-tier chart (Category 1 costs 3,000–9,000 points), and Chase Sapphire Preferred/Ink Preferred transfers to Hyatt dropped to 4:3.

**TL;DR**
- **The workflow.** Search with cached tools such as seats.aero or PointsYeah. Confirm live on a program site that shows the operating carrier's partner space, such as united.com or aircanada.com for ANA, or qatarairways.com or ba.com for Qatar. Check the surcharges and the full cash total. Only then transfer, because transfers can't be reversed and banks officially allow up to 7 business days (Chase) or 48 hours (Amex).
- **Re-verify ratios every time.** Ratios and charts change several times a year, often with little or no notice. Examples:
  - Amex to Cathay went 1:1 → 5:4 on Mar 1, 2026 (1,000 MR = 800 Asia Miles, per Amex's notice).
  - Amex dropped Etihad (June 30, 2026).
  - Chase Sapphire Preferred/Ink Preferred to Hyatt went 1:1 → 4:3 (Oct 1, 2026).
  - BA raised Avios prices 8–14% "across the board" (Dec 15, 2025, per TPG).
  - Hyatt moved to a 5-tier chart (May 20, 2026).
  - Virgin raised ANA business prices with no notice on May 23, 2024 (Western US 45,000→52,500; Central/Eastern US 47,500→60,000, per TPG).
- **Status of the three sweet spots.**
  - Virgin → ANA: still valid but devalued. Bookable by phone only, and space is scarce.
  - Qsuites via Avios: still valid at 70,000 off-peak / 94,500 peak from the US, plus about $200–250 in surcharges each way via qatarairways.com (Frequent Miler, 2026).
  - Low-category Hyatt: still valid. It's cheaper on "Lowest" nights and up to 38–58% dearer at "Top" for Categories 1–2.

---

#### 1. Award-booking workflow: find, verify, transfer, book

| ID | Claim | Source URL | Source type | Confidence | Date published / checked |
|---|---|---|---|---|---|
| C1.1 | Amex terms: "Typically, it takes 48 hours to process the transfer but some programs delay posting points"; Chase allows up to seven business days | https://withautopilot.com/blog/points-transfer-partners (quoting Amex terms) | program terms (quoted secondhand) | medium | checked Nov 2026 |
| C1.2 | Most bank-to-airline transfers arrive instantly or within a day. Slower ones: Chase→Singapore KrisFlyer up to 48h, Capital One→EVA up to 36h, Marriott→airlines 1–3 days | https://www.travelsummary.com/credit-card-transfer-partners/ | secondary | medium | last checked Oct 20, 2026 |
| C1.3 | Going's table lists most Amex, Bilt, Capital One and Chase transfers to Aeroplan, BA and Avianca as "Instant"; Citi→Qantas 1–2 days | https://www.going.com/guides/credit-card-transfer-partners ; https://thriftytraveler.com/guides/points/credit-card-transfer-partners/ | secondary | medium | checked Nov 2026 |
| C1.4 | Bilt: transfers post almost instantly except Southwest (up to 72h) | https://traveldiari.com/guides/bilt-transfer-partners-vs-chase-amex-citi | secondary | medium | Jul 2026 |
| C1.5 | Transfer time and "points usable" time can differ (e.g., Citi→AA posts instantly but can take hours before the miles can be used) | https://frequentmiler.com/how-long-does-it-take-to-transfer-points-to-airline-and-hotel-programs/ | secondary (reader-reported) | medium | checked Nov 2026 |
| C1.6 | Partner charts can change overnight: Virgin raised ANA business prices on May 23, 2024 (45,000→52,500 Western US; 47,500→60,000 Central/Eastern US) "without advance notice" (OMAAT) | https://awardfares.com/blog/flying-club-guide/ | secondary | high | 2026 |
| C1.7 | TPG: "before making the nonrefundable transfer, be sure to find award space and confirm that the Virgin Atlantic agent has access to it" | https://thepointsguy.com/news/virgin-atlantic-ana-devaluation | secondary | high | 2024 |
| C1.8 | Qatar Privilege Club has changed award pricing and fees without notice before | https://aviationa2z.com/index.php/2026/06/01/qatar-privilege-club-members-can-earn-more-avios-until-june-30/ ; https://thepointsguy.com/news/qatar-increases-award-prices-77-percent | secondary | high | Jun 1, 2026; historical |

**Why you never transfer speculatively.** Bank-to-airline transfers can't be reversed (C1.1, C1.7). The award space you saw can disappear while points are in transit, which can take up to 7 business days at Chase (C1.1). The program can devalue overnight (C1.6, C1.8). And points stranded in a single-airline program lose the flexibility that made them valuable.

**Tactics**
1. Search broadly with a cached tool first (per C2.1, C2.4), then confirm the exact flight live on the program site you'll book with (per C3.1).
2. Walk the booking through to the payment page before transferring, so you can see the full Avios/miles + cash total (per C4.6).
3. For phone-only partner bookings (Virgin → ANA), have the agent confirm they can see the space before transferring (per C1.7, C3.3).
4. Transfer only from banks that post instantly to the target program. If the transfer is slow, request a hold where one exists (per C1.2, C5.1).
5. Book right away once points land. Don't sit on a balance waiting for a better date (per C1.6, C1.8).
6. Keep a "transfer log" (date, amount, program, posting time) to build your own data on real-world transfer speeds (per C1.5).

---

#### 2. Award search tools

| ID | Claim | Source URL | Source type | Confidence | Date published / checked |
|---|---|---|---|---|---|
| C2.1 | seats.aero: about 24 programs. Free plan: 60-day cached window, email alerts. Pro ($9.99/mo or $99.99/yr): full year, live search, SMS alerts, cardholder pricing | https://thepointsguy.com/travel/seats-aero | secondary | high | 2026 |
| C2.2 | Program counts for seats.aero disagree: TPG says 24, Milesopedia 26, Frugal Flyer about 15 | https://milesopedia.com/en/reviews/products/seats-aero/ ; https://frugalflyer.ca/blog/award-flight-search-tool-comparison/ | secondary | medium | Sep 2026; undated |
| C2.3 | Frequent Miler first undercounted seats.aero's coverage, then corrected it: "this tool was actually one of the best"; named it "best for experts" | https://frequentmiler.com/which-award-search-tool-is-best/ | secondary | high | Apr 15, 2026 (mod. Oct 9, 2026) |
| C2.4 | Frequent Miler picks: best overall AwardTool; best cached discovery PointsYeah; best for beginners point.me; Roame an "excellent choice despite not making the 'best of' list"; point.me $19.99/mo; free via Amex | https://frequentmiler.com/which-award-search-tool-is-best/ | secondary | high | Apr 15, 2026 |
| C2.5 | point.me was the only tool in FM's test that returned Southwest award results | https://frequentmiler.com/which-award-search-tool-is-best/ | secondary | high | Apr 2026 |
| C2.6 | AwardWallet: point.me searches the widest range of programs; PointsYeah wins most other categories; point.me $129/yr vs Roame about $110 and PointsYeah about $80 | https://awardwallet.com/airlines/award-flight-search-tools/ | secondary | medium | checked Nov 2026 |
| C2.7 | Paid tiers: point.me Standard $19.99/mo or $129/yr, Premium $260/yr, concierge separate. Roame "Friends of Roame" $12.99/mo or $109.99/yr. Roame's SkyView is cached once a day | https://www.blamethefare.com/blog/best-award-flight-search-tools | secondary | medium | 2026 |
| C2.8 | Frugal Flyer: Roame Pro allows only 5 alerts (SkyView-based); point.me had no alerts at the time of that review | https://frugalflyer.ca/blog/award-flight-search-tool-comparison/ | secondary | low | undated |
| C2.9 | ExpertFlyer (Mar 2026 repricing): Basic $6.99/mo or $71.88/yr; Premium $12.99/mo or $131.88/yr; Elite $19.99/mo or $239.88/yr; 50/250 alerts. It "has lost access to an increasing amount of award availability (like with most Star Alliance airlines)" | https://onemileatatime.com/news/expertflyer-new-features-elite-tier-increases-pricing/ | secondary | high | Mar 6, 2026 |
| C2.10 | Prince of Travel: ExpertFlyer free tier gives basic seat maps and 1 alert; says Elite's annual plan offers two months free (conflicts with C2.9) | https://princeoftravel.com/news/expertflyer-update-2026/ | secondary | medium | 2026 |
| C2.11 | Virgin Atlantic's site does not show ANA award space; you search elsewhere and call | https://roame.travel/guides/ana-award-redemptions | secondary | high | 2026 |

**Tool summary (what it covers / cost / blind spots)**
- **seats.aero.** Covers about 24 programs across all three alliances. Free for 60 days out; Pro $9.99/mo. Its data is cached, so results can be stale; always re-check live (C2.1).
- **point.me.** Has the widest program coverage and is the only tool that returns Southwest (C2.5, C2.6). Free via Amex; otherwise about $129/yr. It is slow, searches one day at a time, and has weak alerts (C2.4, C2.8).
- **Roame.** Fast live search, plus SkyView (cached daily). $12.99/mo. Alerts are limited (C2.7, C2.8).
- **PointsYeah.** Best cached discovery per FM and has a generous free tier. It covers fewer programs than point.me (C2.4, C2.6).
- **ExpertFlyer.** Good for AA alerts and seat alerts. It is largely blind to Star Alliance award space, so it's weak for ANA (C2.9).
- **Airline websites.** The ground truth for bookability. See Section 3.

**Tactics**
1. Use one free cached tool (PointsYeah or seats.aero free) for discovery. Pay for one month of seats.aero Pro only around your booking window (per C2.1, C2.4).
2. Never transfer on a cached result. Re-run it live on the tool, then on the program site (per C2.1, C2.7).
3. Use point.me (free through Amex) as a cross-check when you hold Amex points or need Southwest (per C2.4, C2.5).
4. Don't pay for ExpertFlyer for Star Alliance or ANA hunting (per C2.9).
5. Expect reviewer rankings to keep moving, and re-test coverage yourself (per C2.2, C2.3).

---

#### 3. Alliances, partner awards and phantom availability

| ID | Claim | Source URL | Source type | Confidence | Date published / checked |
|---|---|---|---|---|---|
| C3.1 | OMAAT recommends aircanada.com or united.com for ANA space, "as both show all Star Alliance award availability online"; seats.aero "isn't necessarily 100% real time" | https://onemileatatime.com/guides/redeem-virgin-atlantic-points-ana/ | secondary | high | Aug 26, 2024 |
| C3.2 | Reports that US-mainland–Japan ANA space isn't bookable through Flying Club within 14 days of departure | https://onemileatatime.com/guides/redeem-virgin-atlantic-points-ana/ | secondary | medium | Aug 2024 (reader confirmation Jan 2025) |
| C3.3 | Virgin agents request ANA space and "often they won't get an immediate response from ANA… call back in a few hours" | https://onemileatatime.com/guides/redeem-virgin-atlantic-points-ana/ | secondary | high | Aug 2024 |
| C3.4 | "United does sometimes show phantom space on a partner or two, so it's worth at least double checking at AirCanada.com before transferring" | https://frequentmiler.com/avoiding-phantom-award-space-basics/ | secondary | high | undated |
| C3.5 | "Occasionally, United will show phantom award space, so you'll want to walk through the booking before you transfer" | https://upgradedpoints.com/travel/airlines/searching-flight-award-space/ | secondary | high | 2026 |
| C3.6 | "There's generally nothing an airline program can do about phantom award space" | https://awardwallet.com/airlines/phantom-award-availability/ | secondary | medium | checked Nov 2026 |
| C3.7 | Qatar: most business-class award seats are limited to Avios programs (Qatar, BA, Iberia, Finnair) rather than other partner miles | https://www.points.credit/en/resources/award-booking-windows | secondary | medium | checked Nov 2026 |
| C3.8 | Qatar business space in tiers: the lowest 70K level is bookable via JetBlue, Qatar, Iberia and BA; 94.5K via Qatar, Iberia and BA; AA and Alaska get the worst access; Flexi at double price | https://frequentmiler.com/qatar-business-class-5-levels-of-award-availability/ | secondary | high | checked Nov 2026 |
| C3.9 | Qatar has been reducing business class inventory released to non-Avios partners, especially AAdvantage | https://awardfares.com/blog/qatar-airways-privilege-club-guide/ | secondary | medium | 2026 |
| C3.10 | BA's "Book with Avios" search shows Qatar awards 355 days out, 24 days before aa.com | https://dealspoints.com/airlines-award-seat-release-time/ | secondary | medium | 2026 |

**Tactics**
1. For ANA, use united.com or aircanada.com to see partner-released (saver) space. Space that shows on ANA's own site may be member-only (per C3.1).
2. For Qatar Qsuites, search qatarairways.com or ba.com. AA and Alaska see less of Qatar's space, so treat their absence of space as uninformative (per C3.7, C3.8, C3.9).
3. Detect phantom space by checking two independent partner sites. If United shows it but Aeroplan doesn't, assume it's phantom (per C3.4, C3.5).
4. Walk the booking to the payment page on a site where you already hold points. For phone partners, have the agent see the space before you transfer (per C1.7, C3.5).
5. For Virgin → ANA within 14 days of departure, expect failures. Book further out, or use Aeroplan or United instead (per C3.2).
6. If a phone partner "requests" space, don't transfer more points until the segment confirms (per C3.3).
7. If space turns out to be phantom after a transfer, don't expect help from the program. Repurpose the points within that program (per C3.6).

---

#### 4. Carrier-imposed surcharges (YQ/YR)

| ID | Claim | Source URL | Source type | Confidence | Date published / checked |
|---|---|---|---|---|---|
| C4.1 | Aeroplan dropped surcharges on award bookings in 2020; you can book 45+ carriers without carrier-imposed surcharges | https://awardwallet.com/airlines/avoid-surcharges-award-flights/ | secondary | high | 2026 |
| C4.2 | Avianca LifeMiles, KrisFlyer (own flights) and United MileagePlus don't pass on fuel surcharges. KrisFlyer does pass them on for partners that levy them | https://upgradedpoints.com/travel/airlines/airline-fuel-surcharges/ | secondary | high | checked Nov 2026 |
| C4.3 | AA collects surcharges only on BA- and Iberia-operated awards (Iberia's are much lower) | https://withautopilot.com/blog/fuel-surcharges-award-tickets ; https://upgradedpoints.com/travel/airlines/airline-fuel-surcharges/ | secondary | high | Sep 2026 |
| C4.4 | BA passes on substantial surcharges on BA flights, and those increased in Dec 2025 | https://awardwallet.com/airlines/avoid-surcharges-award-flights/ | secondary | high | 2026 |
| C4.5 | Virgin Atlantic: heavy surcharges on its own metal, none or minimal on most partners such as ANA and Delta | https://milesbeyondborders.com/award-flight-fuel-surcharges/ ; https://awardtravelfinder.com/award-charts/virgin-atlantic | secondary | medium | 2026 |
| C4.6 | JetBlue TrueBlue added about $200–260 per direction in carrier-imposed surcharges on international United awards (April 2026) | https://withautopilot.com/blog/fuel-surcharges-award-tickets | secondary | medium | Sep 2026 |
| C4.7 | Qatar doesn't impose fuel surcharges on its own flights but charges an award booking fee by route and cabin; up to US$180 per segment in business Asia–Europe (per MileLion) | https://aviationa2z.com/index.php/2026/02/15/qatar-airways-sweetens-loyalty-deals-with-avios-bonus/ | secondary | medium | Feb 15, 2026 |
| C4.8 | US–Doha Qatar business via qatarairways.com: about $200–250 in "surcharges" each way (Aug 2026 onward PHL space) | https://frequentmiler.com/qatar-business-class-open-from-us-doha-starting-in-august-2026/ | secondary | high | 2026 |

**Tactics**
1. Pick the booking program, not just the airline. The same seat can cost very different cash through different programs (per C4.1, C4.2, C4.3).
2. For Star Alliance, default to Aeroplan, United or LifeMiles (per C4.1, C4.2).
3. With AAdvantage or Avios, avoid BA metal. Prefer Iberia, Aer Lingus, Qatar or AA metal (per C4.3, C4.4).
4. Use Virgin points for partners (ANA, Delta), not Virgin's own long-haul metal, unless you've priced the surcharges (per C4.5).
5. Treat Qatar's "no YQ" as "booking fee instead," and add it per segment in your math (per C4.7, C4.8).
6. Re-check partner surcharge policies before each booking. Programs add them mid-year (per C4.6).
7. Surcharge caps by departure country exist in some markets, but I couldn't verify a current list. Test one-way pricing from each end of the trip instead (see "What I could not find").

---

#### 5. Holds, change and cancellation fees, close-in fees, release windows

| ID | Claim | Source URL | Source type | Confidence | Date published / checked |
|---|---|---|---|---|---|
| C5.1 | Virgin Atlantic Flying Club can hold awards up to one day, by phone only. Qatar, BA, Aeroplan and United are not listed as allowing holds | https://onemileatatime.com/guides/airline-award-ticket-holds/ | secondary | medium | Aug 19, 2025 |
| C5.2 | Virgin "can hold ANA awards for up to 48 hours" (space requested). Readers and Roame dispute that it reliably holds ANA space | https://onemileatatime.com/guides/redeem-virgin-atlantic-points-ana/ | secondary | low | Aug 2024 |
| C5.3 | Virgin Flying Club: change or redeposit £70 (UK) / $100 (US); must cancel ≥24h before departure; Gold exempt | https://onemileatatime.com/guides/airline-award-ticket-fees/ | secondary | high | Sep 10, 2026 |
| C5.4 | Qatar: $25 change or cancel >24h out; $100 at 3–24h; nothing allowed within 3h (Avios forfeited) | https://onemileatatime.com/guides/airline-award-ticket-fees/ | secondary | high | Sep 10, 2026 |
| C5.5 | BA: $55 online (+$25 by phone); €42.50 EU / £35 UK; can forfeit the taxes instead; ≥24h before departure | https://onemileatatime.com/guides/airline-award-ticket-fees/ | secondary | high | Sep 10, 2026 |
| C5.6 | Aeroplan: CA$100 change, CA$150 redeposit, per direction; United: no change or redeposit fees | https://onemileatatime.com/guides/airline-award-ticket-fees/ | secondary | high | Sep 10, 2026 |
| C5.7 | Booking windows: AA 331, United 337, Aeroplan 355, BA 355, ANA 355, Qatar 361, Finnair 361 days | https://onemileatatime.com/guides/when-do-airlines-open-award-seats/ ; https://awardfares.com/blog/ultimate-guide-to-award-release-dates/ | secondary | high | checked Nov 2026 |
| C5.8 | ANA's own international awards open 355 days out at 09:00 JST; AA's 331-day window is stated by American | https://awardlocker.com/blog/when-do-airlines-release-award-seats-find-premium-seats | secondary (citing official pages) | medium | 2026 |
| C5.9 | Virgin Atlantic books rewards 331 days out, for partners and its own flights | https://www.headforpoints.com/2025/09/22/how-to-redeem-virgin-points-on-ana-and-other-partner-airlines/ | secondary | high | Sep 22, 2025 |
| C5.10 | Aeroplan's window is variously reported as 355, 356 or 360 days | https://awardwallet.com/airlines/far-advance-can-book-airline-award-tickets/ | secondary | medium | checked Nov 2026 |
| C5.11 | Hyatt cardholders and Explorist/Globalist members get one month early access to award availability | https://www.nerdwallet.com/article/travel/best-hyatt-category-6-hotels | secondary | medium | 2026 |

**Tactics**
1. Put the trip's earliest-opening date in your calendar: departure date minus the operating carrier's window (per C5.7, C5.8).
2. Use the longest-window program that can see the space. Examples: Aeroplan for ANA (355 vs United 337); Qatar or BA for Qsuites (361/355 vs AA 331) (per C5.7, C3.10).
3. Virgin opens at 331 days, after ANA's own members have had access since 355. So plan to find ANA via Virgin closer in, and not inside 14 days (per C5.9, C3.2).
4. Only rely on holds where a source confirms them (Virgin, by phone), and expect them to be inconsistent (per C5.1, C5.2).
5. Factor the change/redeposit cost into the price. United is free; Aeroplan is CA$150 per direction; Virgin is $100 (per C5.3, C5.6).
6. Book Qatar speculatively only if you can accept a $25 cancel fee and the 3-hour cutoff (per C5.4).
7. For peak-date Hyatt stays, consider status or a cardholder perk to get the one-month head start (per C5.11).

---

#### 6. Transferable currencies: ratios, bonuses, partner changes

| ID | Claim | Source URL | Source type | Confidence | Date published / checked |
|---|---|---|---|---|---|
| C6.1 | Amex→Cathay Asia Miles went from 1:1 to 5:4 effective Mar 1, 2026 (Amex notice quoted) | https://awardwallet.com/news/amex-membership-rewards/cathay-pacific-transfer-devaluation/ | secondary (quoting Amex) | high | Dec 8, 2025 |
| C6.2 | Amex dropped Etihad as a transfer partner (ended June 30, 2026) | https://thriftytraveler.com/news/points/amex-drops-etihad-transfer-partner/ ; https://www.travelsummary.com/credit-card-transfer-partners/ | secondary | high | Jun 2026; Oct 2026 |
| C6.3 | Emirates 2025 cascade: Citi cut its ratio in mid-2025, then Amex (5:4) and Capital One (2:1.5); Chase dropped Emirates entirely; Bilt kept 1:1 | https://thriftytraveler.com/news/points/amex-transfers-to-cathay-pacific-taking-a-hit/ ; https://frequentmiler.com/end-1-1-point-transfers/ | secondary | high | 2026 |
| C6.4 | Chase→Hyatt is 4:3 for Sapphire Preferred (new applicants from June 15, 2026; existing holders from Oct 1, 2026) and Ink Business Preferred; Sapphire Reserve keeps 1:1 | https://thepointsguy.com/news/chase-sapphire-preferred-refresh-2026 | secondary | high | 2026 |
| C6.5 | Citi ThankYou became AAdvantage's first bank transfer partner on July 27, 2025 (1:1 premium cards / 1:0.7 others) | https://flightpoints.com/blogs/american-airlines-transfer-partners/ | secondary | medium | 2026 |
| C6.6 | Wells Fargo added Cathay Asia Miles on Apr 28, 2026; Mesa ended transfers Dec 12, 2025 | https://flightpoints.com/transfer-partners/cathay-pacific-transfer-partners ; https://thepointsparty.com/articles/amex-cathay-pacific-devaluation-march-2026 | secondary | medium | 2026 |
| C6.7 | Bilt→Hyatt goes 4:3 on Jan 1, 2027; Citi added JAL; Citi→Choice 1:2 → 1:1.5 (Apr 19, 2026); Citi ended point sharing May 16, 2026 | https://www.travelsummary.com/credit-card-transfer-partners/ | secondary | low–medium | Oct 20, 2026 |
| C6.8 | Citi ratios depend on the card: 1:1 from premium cards (Strata Premier/Elite, Prestige), 0.7 from no-fee cards | https://www.rewardztravel.com/programs/virgin-atlantic/award-chart | secondary | medium | 2026 |
| C6.9 | Transfer bonus examples: Citi 30% to Qatar in 2026 (Frequent Miler: brings US–Doha Qsuites down to "~58k ThankYou Points each way"); Qatar's own 30% conversion bonus through June 30, 2026; Amex→Flying Blue 25–30% about 4–6 times per year | https://frequentmiler.com/qatar-business-class-open-from-us-doha-starting-in-august-2026/ ; https://aviationa2z.com/index.php/2026/06/01/qatar-privilege-club-members-can-earn-more-avios-until-june-30/ ; https://skystatus.pro/guide/flying-blue-transfer-partners | secondary | medium (frequency: low) | 2026 |
| C6.10 | Avios move freely between BA, Qatar, Iberia, Finnair and Aer Lingus, so you can transfer into the program with the best price | https://awardfares.com/blog/ba-avios-devaluation-2025/ | secondary | high | 2025–26 |

**Tactics**
1. Treat the transfer ratio as a live price and re-check it on the bank's partner page on the day you transfer (per C6.1–C6.4).
2. Hold diversified currencies. When one bank cuts a ratio, another often keeps 1:1, as with Cathay via Capital One or Bilt, and Emirates via Bilt (per C6.1, C6.3).
3. Watch the card-level fine print. Citi and Chase now vary the ratio by card product, so move points to your premium card before transferring (per C6.4, C6.8).
4. Wait for a bonus only if the trip is flexible and the space is plentiful. Never let a bonus override confirmed scarce space (per C6.9).
5. For Avios, transfer to whichever Avios program prices the seat cheapest, then combine (per C6.10).
6. When a ratio cut is announced, transfer early only for a booking you can make right away, not to stockpile (per C6.4, C1.6).

---

#### 7. Maintenance: is the sweet spot alive, balances, expiry, buying points

| ID | Claim | Source URL | Source type | Confidence | Date published / checked |
|---|---|---|---|---|---|
| C7.1 | TPG: from Dec 15, 2025, BA award tickets "increased in price by 8%-14% across the board" (JAL awards most, 11–14%), including partners; BA publishes no traditional chart | https://thepointsguy.com/news/british-airways-2025-avios-devaluation/ | secondary | high | Dec 2025 |
| C7.2 | MileLion: BA made no changes to Qatar or Finnair long-haul sweet spots out of Singapore | https://milelion.com/2025/12/16/details-british-airways-avios-award-devaluation/ | secondary | medium | Dec 16, 2025 |
| C7.3 | Qatar quietly devalued Bangkok Airways partner awards by up to 83% (July 2026) | https://milelion.com/2026/07/13/qatar-privilege-club-devalues-bangkok-airways-awards-by-up-to-83/ | secondary | high | Jul 13, 2026 |
| C7.4 | AwardWallet Plus costs $49.99/yr; from Oct 1, 2026, free users can no longer see expiration dates or get alerts | https://onemileatatime.com/guides/awardwallet/ ; https://dannydealguru.com/awardwallet-free-expiration-alerts/ | secondary | medium | AW email Sep 11, 2026 |
| C7.5 | World of Hyatt points are forfeited after 24 consecutive months of inactivity; any earning or redemption resets the clock | https://onemileatatime.com/guides/hotel-points-expire/ | secondary (quoting terms) | high | checked Nov 2026 |
| C7.6 | BA Avios expire after 36 months of inactivity; Qatar Avios 36 months (wording unclear) | https://www.nerdwallet.com/blog/travel/when-do-your-frequent-flyer-miles-expire | secondary | medium | undated |
| C7.7 | Virgin Points: "no expiry" according to an aggregator | https://mcp.awardtravelfinder.com/points-expiration | secondary (aggregator) | low | checked Nov 2026 |
| C7.8 | Qatar sold Avios at 1.44¢ with a 60% bonus (to Oct 19, 2026) and 1.53¢ with a 50% bonus (Feb 2026) | https://www.insideflyer.com/posts/qatar-airways-sets-tiered-avios-purchase-bonuses/ ; https://aviationa2z.com/index.php/2026/02/15/qatar-airways-sweetens-loyalty-deals-with-avios-bonus/ | secondary | medium | Oct 2026; Feb 15, 2026 |
| C7.9 | Qatar's monthly "Privilege Deals": 25% off Avios on selected Qatar-operated routes; current round book by Nov 14, 2026, travel by Dec 31, 2026 | https://mainlymiles.com/2026/11/05/qatar-airways-privilege-deals-for-november-december-2026/ | secondary | high | Nov 5, 2026 |

**Tactics**
1. Run a quarterly "sweet spot audit." Price one benchmark itinerary per sweet spot (e.g., LAX–HND ANA J via Virgin; JFK–DOH Qsuite via Qatar; one Cat 1–4 Hyatt) and log points + cash (per C7.1, C7.3).
2. Classify each result: *alive* (same price, bookable space), *changed* (price, fee or rules moved), or *dead* (partner gone, or no bookable space for 2+ quarters).
3. Assume no-notice changes, and keep balances in banks rather than airlines (per C1.6, C7.3).
4. Track expiry with AwardWallet Plus ($49.99/yr). Per AwardWallet's Sep 11, 2026 email, "starting October 1, expiration dates and alerts become an AwardWallet Plus feature" (per C7.4).
5. Keep Hyatt and Avios accounts active with any small earn or redemption every 18–24 months (per C7.5, C7.6).
6. Buy points only for a specific, confirmed award where (cash fare − award taxes/fees) ÷ points needed is above the purchase price. Example: Qsuite at 70,000 Avios × 1.44¢ ≈ $1,008 + about $200–250 fees vs a PHL–DOH business cash fare that Upgraded Points (Aug 2026) found "starts at $9,000" one way (per C7.8, C4.8).
7. Never buy speculatively. Point sales repeat often (Feb and Oct 2026 for Qatar), so a missed sale isn't a loss (per C7.8).
8. Check monthly discount programs such as Qatar Privilege Deals before transferring (per C7.9).

---

#### 8. Current state of the three sweet spots in [points_and_seasons](../playbooks/points_and_seasons.md) (as of Nov 6–7, 2026)

| Sweet spot | Status | What changed | Source | Date |
|---|---|---|---|---|
| Virgin Atlantic Flying Club → ANA business | **Still valid, devalued, scarce** | **Price:** Business one way is 52,500 (Western US/Canada) or 60,000 (Central/Eastern US) points; First is 72,500/85,000. ANA business rose from 45,000/47,500 to 52,500/60,000 on May 23, 2024 (TPG), "without advance notice" (OMAAT); ANA First was devalued in Mar 2023. **Booking:** Virgin's site doesn't show ANA, so you call. Booking window is 331 days, and US–Japan space is reported unbookable within 14 days. **SkyTeam and dynamic pricing:** Virgin joined SkyTeam on Mar 2, 2023. The dynamic pricing introduced Oct 30, 2024 applies to Virgin-operated flights only, not partner charts. ANA via Virgin has no or minimal surcharges. | https://upgradedpoints.com/news/6-airline-award-sweet-spots-in-2026/ ; https://roame.travel/guides/ana-award-redemptions ; https://onemileatatime.com/news/virgin-atlantic-flying-club-dynamic-award-pricing/ ; https://www.headforpoints.com/2025/09/22/how-to-redeem-virgin-points-on-ana-and-other-partner-airlines/ ; https://awardfares.com/blog/flying-club-guide/ | 2026; Oct 30, 2024; Sep 22, 2025 |
| Qatar Qsuites via Avios (Qatar, BA, Iberia, Finnair) | **Still valid, costlier in cash and rules** | **Price:** US–Doha business is 70,000 Avios off-peak and 94,500 peak; Flexi is double. **Cash:** Frequent Miler (2026) reports "~$200-$250 in surcharges each way (use qatarairways.com)," with onward travel past Doha adding "$50-$100+," versus about $100 in earlier FM data. **Fees:** Qatar charges a per-segment award booking fee. **BA:** raised prices 8–14% on Dec 15, 2025 (TPG), but MileLion saw no change to Qatar long-haul sweet spots. **Booking for others:** Qatar now limits redemptions to a saved list ("My List" / "Family & Friends", 6-month lock-in). **Discounts:** monthly 25% "Privilege Deals". **Note:** several mightytravels.com pages claim jumps to 90,000/95,000 Avios. These are unverified and contradict FM's 2026 live prices, so I treat them as unreliable. | https://frequentmiler.com/qatar-business-class-open-from-us-doha-starting-in-august-2026/ ; https://frequentmiler.com/qatar-business-class-5-levels-of-award-availability/ ; https://milelion.com/2025/12/16/details-british-airways-avios-award-devaluation/ ; https://onemileatatime.com/news/qatar-airways-restricts-award-bookings-others-absurd-new-rule/ ; https://mainlymiles.com/2026/11/05/qatar-airways-privilege-deals-for-november-december-2026/ | 2026; Dec 16, 2025; Nov 5, 2026 |
| Low-category World of Hyatt (Cat 1–4) | **Still valid, restructured; worse at peak, slightly better at trough** | **Chart:** From May 20, 2026 (announced Feb 25, 2026), 5 tiers replaced off-peak/standard/peak. New Lowest/Low/Moderate/Upper/Top prices: Cat 1 3,000/4,500/6,000/7,500/9,000 (was 3,500/5,000/6,500); Cat 2 6,000/7,500/10,000/12,000/15,000 (was 6,500/8,000/9,500); Cat 3 8,000/12,000/15,000/17,500/20,000 (was 9,000/12,000/15,000); Cat 4 12,000/15,000/20,000/22,500/25,000 (was 12,000/15,000/18,000). **Categories:** 112 hotels moved up and 24 down. **Transfers:** Chase Sapphire Preferred/Ink Preferred → Hyatt is 4:3 from Oct 1, 2026, and Bilt reportedly goes 4:3 Jan 1, 2027. | https://thepointsguy.com/loyalty-programs/ultimate-guide-world-of-hyatt ; https://awardwallet.com/hotels/world-of-hyatt/award-charts/ ; https://www.nerdwallet.com/travel/news/hyatt-award-chart-changes-2026 ; https://upgradedpoints.com/news/world-of-hyatt-category-changes-2026/ ; https://thepointsguy.com/news/chase-sapphire-preferred-refresh-2026 | Feb 25 / May 20, 2026; Oct 1, 2026 |

**What it means for the method**
- **Virgin → ANA** is now a phone-only, alert-driven play. Set seats.aero alerts on Aeroplan/United for ANA saver space, call Virgin, have the agent confirm the space, then transfer. At 60,000 from the East Coast, it's still cheaper than most Star Alliance alternatives, and it has no surcharges.
- **Qsuites** remains the best fixed-price long-haul business product in the Avios ecosystem. Your real cost is now 70,000 Avios plus about $200–250 in surcharges each way (Frequent Miler). Search Qatar and BA first, and ignore AA availability.
- **Low-category Hyatt** is still strong for flexible travelers. Date-shift to "Lowest/Low" nights. Holiday/"Top" nights at Category 1–2 cost up to 38–58% more than the old peak, so cash may win on those dates. If you hold Chase points, source Hyatt points from Sapphire Reserve (1:1) rather than Sapphire Preferred (4:3).

---

#### (a) Facts that change often and must be re-verified before every booking
- Bank transfer ratios and partner lists, especially Amex, Citi and Chase card-level ratios (Emirates, Cathay, Etihad and Hyatt all changed in 2025–26).
- Transfer bonuses (size and dates) and point-purchase prices.
- Qatar's award booking/redemption fees, its surcharges on own metal, and the "My List" rules.
- Virgin's ANA zone prices and its phone booking/hold behavior.
- BA's distance-band prices (no published chart).
- Hyatt hotel categories (annual shifts) and which date falls in which of the 5 tiers.
- Tool pricing and program coverage (seats.aero, point.me, Roame, PointsYeah, ExpertFlyer all repriced or changed coverage in 2026).
- AwardWallet's free vs paid features.

#### (b) Conflicts between sources
- **Virgin → ANA business price.** Most 2026 sources say 52,500/60,000 one way. ChooseFI says 90,000 one way from JFK. AwardLocker's chart says 90K round trip, and Thrifty Traveler cites old 90K/95K round-trip figures. I treat 52,500/60,000 one way as current.
- **Virgin hold on ANA space.** OMAAT says up to 48h. Readers and Roame say holds are unreliable.
- **Virgin booking window.** 331 days (Head for Points) vs 330 (other blogs).
- **Qatar Qsuite price.** Many mightytravels.com pages (Oct–Nov 2026) claim 90,000, 95,000 or "+42,000" increases on various dates. These contradict each other and FM's 2026 live 70,000/94,500. I rated them low reliability.
- **Hyatt new chart.** Pointshacking lists Cat 4 Lowest at 10,000 and Cat 5 at 14,000; TPG, AwardWallet and Milesopedia list 12,000 and 15,000.
- **Tool rankings.** Frequent Miler names AwardTool best overall and Points Path for coverage. AwardWallet says PointsYeah wins most categories and point.me has the widest coverage. Milesopedia says Roame is best for beginners, while FM and Feisworld say point.me.
- **seats.aero program count.** 24, 26 or about 15, depending on the source.
- **ExpertFlyer Elite pricing.** OMAAT says there's no annual discount; Prince of Travel says two months free annually.
- **Aeroplan booking window.** 355 vs 360 days.
- **Transfer speeds.** Some guides say Capital One takes 1–2 business days; most tables say instant.

#### (c) What I could not find
- Current official program pages (virginatlantic.com ANA partner chart, qatarairways.com Avios calculator, world.hyatt.com chart). All figures here come via secondary sources that quote or screenshot them.
- A current, verified list of countries with legal caps on fuel surcharges (e.g., historically Brazil, Hong Kong, the Philippines).
- Close-in booking fees by program in 2026, beyond the fact that United has no change or redeposit fees.
- Official hold policies for Qatar and BA.
- An official confirmation that Virgin Points never expire.
- A primary source on how often each bank runs transfer bonuses (only blog estimates).
- Exact current PointsYeah paid pricing from PointsYeah itself.
