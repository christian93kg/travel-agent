# Disruptions, passenger rights, insurance: research prompt and results

> Research snapshot compiled 2026-11-06 from public sources (links inline). Fares, rules and programs change: re-check anything before you book.

Related: [Flight booking, seats, connections](flight_booking.md).

## Prompt

```text
GIVEN: I am building a reusable, public trip-planning method. It needs a playbook for when things go wrong: delays, cancellations, missed connections, lost bags. The method is for independent travellers who book their own trips. Prefer official regulator sources (European Commission, UK CAA, US DOT, national enforcement bodies) and the actual policy wording over summaries. Claim-service company blogs are low confidence.

TASK: Research and document:
1. Rebooking during irregular operations: app vs. phone vs. airport agent vs. lounge desk, getting rebooked onto partner airlines, what you can ask for, what to do before the airline acts.
2. EU261: scope (which flights and carriers), compensation amounts and distance bands, duty of care, rerouting vs. refund rights, "extraordinary circumstances", how to claim, deadlines by country. Which non-EU states apply it (e.g. Switzerland, Norway, Iceland) and on what legal basis.
3. EU261 reform: current status as of your search date, what changes, and when it would take effect. Use official EU sources; note where press reports disagree.
4. UK261: amounts and differences from EU261, from the CAA.
5. US DOT rules: automatic refunds for cancellations and significant delays, bag-fee refunds, whether these rules are still in force as of your search date.
6. Montreal Convention: baggage delay/loss/damage limits and claim deadlines.
7. Travel insurance: what credit-card trip delay / cancellation / baggage cover typically includes and excludes; standalone policies; cancel-for-any-reason (CFAR) and pre-existing-condition waivers and their purchase-time windows; medical and evacuation cover for travel outside your home country.
8. A step-by-step "disruption in progress" checklist built from the above.

FORMAT: Markdown, one section per numbered topic. In each section, first a claims table: Claim | Source URL | Source type (official / policy wording / secondary) | Confidence (high/medium/low) | Date published or checked. Then "Tactics": numbered, one line each, citing claim rows. Topic 8 is a numbered checklist. End with: (a) facts that change often and must be re-verified, (b) conflicts between sources, (c) what you could not find.
```

## Research Results

Returned 2026-11-06. The report below is reproduced as returned (headings demoted two levels), with light edits for a public audience.

### Flight Disruption Playbook for Independent Travellers (checked 6 November 2026)

When a trip goes wrong, protect two things first: your place on the next workable flight, and your claim. EU261/UK261 give you rerouting, care and fixed cash compensation. The US gives you an automatic cash refund but no compensation. The Montreal Convention covers bags. Card or standalone insurance covers the out-of-pocket costs the airline won't pay. The biggest legal change of 2026 is Regulation (EU) 2026/2202, which amends EU261. It was published in the Official Journal on 2 October 2026 and entered into force on 22 October 2026, but most of it does not apply until 23 October 2027. Until then, the existing EU261 rules govern every flight.

#### TL;DR
- **EU/UK flights:** if you arrive 3+ hours late, are cancelled at short notice or are bumped, you can claim €250/€400/€600 (EU) or £220/£350/£520 (UK) unless the airline proves extraordinary circumstances. On top of that you get meals, a hotel and rerouting "at the earliest opportunity", which can be on another airline. The 2026 reform keeps the 3-hour trigger and the amounts, adds a 9-month claim deadline, and lets you self-reroute (recovering up to 400% of the fare) if the airline offers nothing within 3 hours. None of this applies until 23 October 2027.
- **US flights:** the April 2024 automatic-refund rule (14 CFR Part 260) is still in force. If you decline the alternative after a cancellation or a 3h domestic / 6h international change, you get cash back. You also get your bag fee back if a bag is 12h late (domestic) or 15–30h late (international). DOT has withdrawn the cash-compensation rulemaking, is not enforcing refunds for flights that are merely renumbered (until 7 July 2027), and meals and hotels remain voluntary airline commitments.
- **Bags and insurance:** Montreal caps bag liability at 1,519 SDR (since 28 December 2024). Report damage within 7 days and delay within 21 days, and sue within 2 years. Pay fares with a card that has trip-delay cover (for example, some premium US travel cards pay after a 6–12 h delay, typically up to about $500 per person; check your card's guide to benefits). If you want cancel-for-any-reason or a pre-existing-condition waiver, buy it quickly after your first trip payment. For example, Faye's CFAR add-on must be bought "within 14 days of your initial trip deposit", requires cancelling "at least 48 hours in advance", and repays "up to 75%" of non-refundable costs. Other insurers' windows vary.

---

#### 1. Rebooking during irregular operations

##### Claims
| # | Claim | Source URL | Source type | Confidence | Date published / checked |
|---|---|---|---|---|---|
| 1.1 | Under UK261, the airline must let you choose a refund or an alternative flight. "If an alternative airline is flying there significantly sooner… you may have the right to be booked onto that alternative transport instead." | https://www.caa.co.uk/air-passengers/travel-problems-and-rights/flight-delays-and-cancellations/cancellations/ | official | high | checked 6 Nov 2026 |
| 1.2 | Commission Interpretative Guidelines 2016/C 214/04, point 4.2: rerouting "should be offered at no additional cost… even where passengers are re-routed with another air carrier or on a different transport mode or in a higher class". Passengers should accept comparable offers "including on those air carriers cooperating with the operating carrier". | https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX%3A52016XC0615%2801%29 | official (guidance) | high | published 15 Jun 2016; checked 6 Nov 2026 via research assistant |
| 1.3 | The 2016 Guidelines have been updated by Commission guidelines published in 2024 (OJ C/2024/5687), which add post-2016 case law and a section on mass disruption. The rerouting wording of the 2024 text was not extracted. | https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ%3AC_202405687 | official | medium | 2024; checked 6 Nov 2026 |
| 1.4 | American Airlines Conditions of Carriage: "If no American flights are available until the next day, and the disruption is caused by us, we'll rebook you on one of our partner airlines with available seats at no additional cost." | https://www.aa.com/i18n/customer-service/support/conditions-of-carriage.html | policy wording | high | updated 13 Aug 2026; checked 6 Nov 2026 |
| 1.5 | Delta domestic Contract of Carriage, Rule 19(A): Delta rebooks on "Delta's next flight on which seats are available". "At Delta's sole discretion and if acceptable to the passenger, Delta may arrange for the passenger to travel on another Carrier." | https://www.delta.com/us/en/legal/contract-of-carriage-dgr | policy wording | high | last modified 18 Aug 2026; checked 6 Nov 2026 |
| 1.6 | United Contract of Carriage, Rule 24 ("Flight Delays/Cancellations/Aircraft Changes", revised 27 Feb 2026) separates Schedule Change, Force Majeure and Irregular Operations. Secondary sources say other-carrier rebooking is at United's "sole discretion". The official page was not verified. | https://static.poder360.com.br/2026/03/United-Airlines-Contrato-Transporte-fev2026.pdf | secondary (copy of policy) | low | Feb 2026; checked 6 Nov 2026 |
| 1.7 | No general federal rule requires US airlines to rebook on partners. DOT withdrew the ANPRM that would have required free rebooking and compensation for controllable disruptions. | https://public-inspection.federalregister.gov/2025-20042.pdf | official | high | FR 17 Nov 2025; checked 6 Nov 2026 |
| 1.8 | US airlines' rebooking, meal and hotel promises for controllable disruptions are voluntary "commitments" shown on DOT's dashboard. DOT enforces them as commitments, and it said it would not require them for disruptions caused by an FAA airworthiness directive in Dec 2025. | https://www.transportation.gov/airconsumer/latest-news | official | high | posted 10 Dec 2025; checked 6 Nov 2026 |
| 1.9 | Reg. 2026/2202 (from 23 Oct 2027): carriers must consider flights operated by competitors and other modes of transport. If no comparable rerouting is offered within 3 hours, passengers may arrange their own and recover up to 400% of the ticket price. | https://www.consilium.europa.eu/en/press/press-releases/2026/06/15/council-and-parliament-reach-landmark-agreement-on-stronger-eu-air-passenger-rights/ | official | high | 15 Jun 2026; checked 6 Nov 2026 |
| 1.10 | Using several channels at once (app, phone including overseas or elite lines, gate or transfer desk, lounge desk) is widely recommended by frequent-flyer media. No regulator source endorses or describes it. | (no official source; practitioner consensus) | secondary / anecdotal | low | checked 6 Nov 2026 |

##### Tactics
1. Before you queue, look up alternative flights with seats on your airline, its alliance partners and competitors, and note flight numbers and times so you can make a specific request (1.2, 1.5, 1.10).
2. Contact the airline through several channels at once: the app for an instant self-rebook, a phone call (try the airline's overseas call centres), the transfer or gate desk, and the lounge desk if you have access. Take whichever channel resolves it first (1.10).
3. On an EU/UK-covered flight, ask in writing to be rerouted "at the earliest opportunity, including on another carrier". Quote the Commission guidelines and the CAA wording (1.1, 1.2, 1.3).
4. On American, if the disruption is American's fault and there is no American seat until the next day, ask specifically for partner rebooking under the Conditions of Carriage (1.4).
5. On Delta or United, other-carrier rebooking is discretionary. Ask politely, name a specific partner flight, and offer to fly in the same cabin (1.5, 1.6).
6. In the US, if no acceptable alternative is offered, decline it and take the automatic refund, then rebook yourself (1.7, 5.1).
7. Ask the agent to state the cause of the disruption and note it. The cause decides whether you get US amenities and whether EU/UK compensation is owed (1.8, 2.10).
8. If an EU-covered disruption happens on or after 23 Oct 2027 and nothing is offered within 3 hours, self-reroute and keep receipts. The cap is 400% of the fare (1.9).

---

#### 2. EU261 (Regulation (EC) No 261/2004) as it applies today

##### Claims
| # | Claim | Source URL | Source type | Confidence | Date published / checked |
|---|---|---|---|---|---|
| 2.1 | Scope: all flights departing an EU airport (any airline), and flights arriving in the EU from a third country on an EU carrier. The 2026 reform keeps this scope. | https://www.consilium.europa.eu/en/press/press-releases/2026/06/15/council-and-parliament-reach-landmark-agreement-on-stronger-eu-air-passenger-rights/ | official | high | 15 Jun 2026; checked 6 Nov 2026 |
| 2.2 | Art. 7 compensation: €250 for flights of ≤1,500 km; €400 for intra-EU flights >1,500 km and other flights of 1,500–3,500 km; €600 for all other flights. Distance is measured by the great-circle method to the final destination. | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32004R0261 | primary legal text | high | 2004 text; fetch failed 6 Nov 2026, amounts corroborated by Council 15 Jun 2026 release |
| 2.3 | Art. 7(2): compensation may be cut by 50% when rerouting gets you to your final destination within 2h (≤1,500 km), 3h (1,500–3,500 km / intra-EU) or 4h (other flights) of the original arrival. | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32004R0261 | primary legal text | high | 2004 text; checked 6 Nov 2026 (CAA applies the same: row 4.3) |
| 2.4 | A delay of 3h+ at final arrival gives compensation equal to cancellation: CJEU Sturgeon (C-402/07 & C-432/07, 2009), confirmed in Nelson (C-581/10, 2012). Reg. 2026/2202 writes the 3h rule into Art. 6(4). | https://www.burges-salmon.com/articles/102o4ut/evolution-delivered-what-regulation-eu-2026-2202-means-for-eu261-reform/ | secondary (law firm) | high | 8 Oct 2026; checked 6 Nov 2026 |
| 2.5 | Missed connections on a single booking: delay is measured at the final destination (Air France v Folkerts, C-11/11). Codified in new Art. 6b. | https://www.burges-salmon.com/articles/102o4ut/evolution-delivered-what-regulation-eu-2026-2202-means-for-eu261-reform/ | secondary (law firm) | high | 8 Oct 2026; checked 6 Nov 2026 |
| 2.6 | Extraordinary circumstances use a two-limb test: the event is "not inherent in the normal exercise of the activity of the air carrier" and is "beyond the actual control" of the carrier (Wallentin-Hermann, C-549/07). The test is now codified in Art. 6c and an Annex. | https://www.burges-salmon.com/articles/102o4ut/evolution-delivered-what-regulation-eu-2026-2202-means-for-eu261-reform/ | secondary (law firm) | high | 8 Oct 2026; checked 6 Nov 2026 |
| 2.7 | A strike by an airline's own staff over pay or conditions is not extraordinary (SAS, C-28/20, 23 Mar 2021). Strikes by air traffic controllers or airport staff may be. | https://curia.europa.eu/site/upload/docs/application/pdf/2021-03/cp210044en.pdf | official (CJEU press release) | high | 23 Mar 2021; checked 6 Nov 2026 |
| 2.8 | A strike by a subsidiary's staff in solidarity with the parent company's staff was examined in Eurowings (C-613/20, 6 Oct 2021). The judgment repeats that strikes by air traffic controllers or airport staff "may in particular constitute 'extraordinary circumstances'". | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A62020CJ0613 | primary (judgment) | high | 6 Oct 2021; checked 6 Nov 2026 |
| 2.9 | Wildcat "sick-out" strikes by crew are not extraordinary (Krüsemann, C-195/17, 2018). C-287/20 is reported to confirm that union pay strikes don't count either. | https://www.weisenheimer.law/en/strikes-in-europe-as-extraordinary-circumstances/ | secondary (law firm) | medium | 30 Mar 2023; checked 6 Nov 2026 |
| 2.10 | Other key rulings (from established case law; full texts not fetched this session): unexpected technical failure is not extraordinary (van der Lans, C-257/14, 2015). A bird strike can be extraordinary, but only for the flight directly affected, and the airline must show reasonable measures (Pešková, C-315/15, 2017). | https://www.burges-salmon.com/articles/102o4ut/evolution-delivered-what-regulation-eu-2026-2202-means-for-eu261-reform/ | secondary + case law | medium | checked 6 Nov 2026 |
| 2.11 | Duty of care (Art. 9): meals and refreshments in proportion to the waiting time; a hotel if an overnight stay is needed; transport between airport and hotel; two calls or emails. Applies whatever the cause. Triggered after 2h/3h/4h delays depending on distance (Art. 6). | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32004R0261 | primary legal text | high | 2004 text; checked 6 Nov 2026 |
| 2.12 | Art. 8: you choose between reimbursement "within seven days" (cash, bank transfer or cheque; vouchers only with your signed agreement), rerouting at the earliest opportunity, or rerouting at a later date of your choice. | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32004R0261 | primary legal text | high | 2004 text; checked 6 Nov 2026 |
| 2.13 | Switzerland applies Reg. 261/2004 under the EU–Switzerland Air Transport Agreement. FOCA/BAZL says "EU Member State" in Art. 3 includes Switzerland (through the bilateral agreement) and Norway and Iceland (EEA states). FOCA is the Swiss NEB. | https://www.bazl.admin.ch/en/airpassengerrights | official | high | checked 6 Nov 2026 |
| 2.14 | Swiss practice differs. Some Swiss courts have refused Sturgeon-type delay compensation because CJEU rulings after the Agreement weren't formally adopted. It is also unclear whether the regulation covers Switzerland–third-country flights. | https://www.lexology.com/library/detail.aspx?g=eaacba4f-b7b7-47c8-8f33-9fada9b88d69 | secondary (law firm) | medium | checked 6 Nov 2026 |
| 2.15 | Limitation periods: the regulation sets none, so national law applies (Cuadrench Moré v KLM, C-139/11, 22 Nov 2012). The Montreal Convention's 2 years does not apply. | https://eu261rights.com/time-limits/ | secondary | high (holding well established) | checked 6 Nov 2026 |
| 2.16 | National periods as reported: Germany 3 years from 31 Dec of the flight year (BGB §§195, 199); France 5 (Code civil art. 2224; Cass. 1re civ. 17 May 2017); Spain 5 (CC art. 1964.2); Netherlands 2 (art. 8:1835 BW, contested, with 5 also argued); Austria 3; Poland 1; England & Wales and Ireland 6; Belgium disputed (1 year per Cass. 11 Jun 2021, 5 per others); Italy 2 (also given as 26 months). | https://eu261rights.com/time-limits/ ; https://horvera.com/flight-compensation-time-limit ; https://robindesairs.eu/en/blog/ec-261-regulation-summary.html | secondary (claims-sector) | low–medium | checked 6 Nov 2026 |
| 2.17 | France: mandatory prior mediation before court for some cancellation, delay and denied-boarding disputes from 7 Feb 2026, with transitional rules. | https://eu261.org/how-to-claim/ | secondary | low | checked 6 Nov 2026 |
| 2.18 | How to claim: operating carrier first, then the national enforcement body (e.g. FOCA in Switzerland), ADR where the airline participates, and then court. The European Small Claims Procedure (Reg. 861/2007, as amended) covers cross-border claims up to €5,000. | https://www.bazl.admin.ch/en/airpassengerrights | official (NEB) + knowledge of Reg. 861/2007 | medium | checked 6 Nov 2026 |

##### Tactics
1. Check scope first: an EU, Swiss, Norwegian or Icelandic departure on any airline, or an arrival there on an EU/EEA/Swiss carrier (2.1, 2.13).
2. Measure the delay at the final destination when the doors open, and screenshot the arrival time. Count a whole single-ticket itinerary, including missed connections (2.4, 2.5).
3. Work out the band from great-circle distance to your final destination, not per leg (2.2).
4. If you accept rerouting, note the new arrival time. Within 2h/3h/4h of the original, expect the airline to cut compensation by 50% (2.3).
5. Demand meals, hotel and transport whatever the cause. If none are provided, buy reasonable ones yourself and keep receipts (2.11).
6. If you choose a refund, insist on cash within 7 days and refuse vouchers unless you actually want one (2.12).
7. If the airline cites "strike", ask whose. Its own crew or pilots (including wildcat action) means you are owed compensation; air traffic control or airport staff may not (2.7, 2.8, 2.9).
8. If the airline cites "technical problem", push back: routine technical failure is not extraordinary (2.10).
9. Claim from the operating carrier in writing, escalate to the NEB or ADR after about 6–8 weeks, then use the European Small Claims Procedure (2.18).
10. File early. If a court case may be needed, choose a forum with a long period (France or Spain 5 years) over the Netherlands, Poland or Belgium (2.15, 2.16).
11. For flights after 23 Oct 2027, the new 9-month claim window will likely become the binding constraint, so claim within weeks (3.6).

---

#### 3. EU261 reform: status as of 6 November 2026

##### Claims
| # | Claim | Source URL | Source type | Confidence | Date published / checked |
|---|---|---|---|---|---|
| 3.1 | The Council's first-reading position (political agreement 5 Jun 2025) would have paid compensation only after 4+ hours (€300, journeys under 3,500 km and intra-EU) or 6+ hours (€500, over 3,500 km). | https://www.consilium.europa.eu/en/press/press-releases/2025/06/05/council-sets-position-on-clearer-and-improved-rules-for-air-passengers/ | official | high | 5 Jun 2025; checked 6 Nov 2026 |
| 3.2 | Parliament adopted its second-reading position on 21 Jan 2026 (632–15–9), keeping the 3h threshold, €300–€600, and a closed list of extraordinary circumstances. The Council rejected it and the file went to conciliation in March 2026. | https://eprs.europarl.europa.eu/EPRS_ATA(2026)789371 | official (EPRS) | high | 30 Jun 2026; checked 6 Nov 2026 |
| 3.3 | A provisional agreement was reached in conciliation in June 2026. Under it, compensation applies from a 3h delay or a cancellation less than 14 days out: €250 (≤1,500 km), €400 (intra-EU or 1,500–3,500 km), €600 (others). | https://www.consilium.europa.eu/en/press/press-releases/2026/06/15/council-and-parliament-reach-landmark-agreement-on-stronger-eu-air-passenger-rights/ | official | high | 15 Jun 2026; checked 6 Nov 2026 |
| 3.4 | On 7 July 2026 Parliament approved the Conciliation Committee joint text by 646 votes to 12, with 3 abstentions (legislative resolution P10_TA(2026)0238, report A10-0191/2026; reported by Agence Europe and Cyprus Mail). Rapporteur Andrey Novakov (EPP, BG): "after more than 13 years of deadlock, we are finally replacing uncertainty with clear rules". The Council gave final clearance on 13 July 2026. The rules enter into force "12 months and 20 days after the publication in the Official Journal". | https://www.consilium.europa.eu/en/press/press-releases/2026/07/13/council-gives-final-clearance-for-stronger-air-passenger-rights/ | official | high | 13 Jul 2026; checked 6 Nov 2026 |
| 3.5 | Regulation (EU) 2026/2202 of 16 Sep 2026 was published in the OJ on 2 Oct 2026. It entered into force on 22 Oct 2026, and most substantive provisions apply from 23 Oct 2027. | https://www.burges-salmon.com/articles/102o4ut/evolution-delivered-what-regulation-eu-2026-2202-means-for-eu261-reform/ | secondary (law firm), corroborated by McGill IASL and Eversheds | high | 8 Oct 2026; checked 6 Nov 2026 |
| 3.6 | Key changes: automatic refund within 7 days; codified extraordinary circumstances with a non-exhaustive Annex; claims "within nine months of departure"; airlines must decide claims within 30 days; refreshments every 2h and a meal after 3h; hotel capped at 3 nights in extraordinary circumstances; disembarkation after 2h on the tarmac at EU airports; free personal item; no-show ban; Folkerts codified. | https://www.burges-salmon.com/articles/102o4ut/evolution-delivered-what-regulation-eu-2026-2202-means-for-eu261-reform/ | secondary (law firm) | high | 8 Oct 2026; checked 6 Nov 2026 |
| 3.7 | Airlines must contact passengers electronically within 96 hours of arrival with their rights and claim instructions, and must state the cause of the disruption as soon as it is known. | https://www.consilium.europa.eu/en/press/press-releases/2026/06/15/council-and-parliament-reach-landmark-agreement-on-stronger-eu-air-passenger-rights/ | official | high | 15 Jun 2026; checked 6 Nov 2026 |
| 3.8 | The Commission will assess within 3 years whether to extend scope fully to third-country carriers. A voluntary "EU air passenger rights" label will be introduced. | same as 3.7 | official | high | 15 Jun 2026; checked 6 Nov 2026 |
| 3.9 | For Switzerland, the revision applies only after it is added to the Annex of the EU–CH Air Transport Agreement (Federal Council / Joint Committee decision), which is "highly likely". | https://www.legal500.com/intelligence/european-union/transport/revision-of-the-eu-air-passenger-rights-regulation-(ec-no-2612004) | secondary (law firm) | medium | 2026; checked 6 Nov 2026 |
| 3.10 | Some press reports say long-haul (>3,500 km) delays pay €300 at 3–4h and €600 only from 4h. | https://www.paddleyourownkanoo.com/2026/07/07/european-parliament-approves-air-passenger-rights-upgrades-including-free-hand-baggage-heres-what-else-is-changing/ ; https://travelfree.info/new-eu-air-passenger-rights-2027/ | secondary | low | 7 Jul 2026; checked 6 Nov 2026 |

##### Tactics
1. Until 22 Oct 2027, apply the current EU261 rules and national limitation periods to every flight (3.5).
2. Treat the 9-month window as applying to flights from 23 Oct 2027, and build "claim within 30 days" into the method now (3.6).
3. From 23 Oct 2027, expect the 96-hour rights email, and chase the airline if it doesn't arrive (3.7).
4. Check the Official Journal text of Art. 7 before telling users whether long-haul 3–4h delays pay €300 or €600 (3.3, 3.10).
5. For Swiss departures, don't assume the new rules apply on 23 Oct 2027 until the EU–CH Annex is amended (3.9).

---

#### 4. UK261 (retained Regulation 261/2004)

##### Claims
| # | Claim | Source URL | Source type | Confidence | Date published / checked |
|---|---|---|---|---|---|
| 4.1 | UK law covers flights departing a UK airport (any airline), arriving in the UK on a UK or EU airline, or arriving in the EU on a UK airline. | https://www.caa.co.uk/air-passengers/travel-problems-and-rights/flight-delays-and-cancellations/cancellations/ | official | high | checked 6 Nov 2026 |
| 4.2 | Amounts: £220 (<1,500 km), £350 (1,500–3,500 km), £520 (>3,500 km). A long-haul arrival less than 4h late gets £260. | same | official | high | checked 6 Nov 2026 |
| 4.3 | Cancellations with 7–14 days' notice: reduced amounts of £110/£175/£260 when the replacement arrives within 2h/3h/4h. Less than 7 days' notice: nothing is owed if the replacement departs no more than 1h early and arrives less than 2h late. | same | official | high | checked 6 Nov 2026 |
| 4.4 | Care continues "no matter how long the delay lasts or what has caused it". If the airline doesn't provide it, you may organise reasonable care yourself and claim it back; "keep every receipt". | same | official | high | checked 6 Nov 2026 |
| 4.5 | Strikes by airport or air traffic control staff and extreme weather are not eligible for compensation. | same | official | high | checked 6 Nov 2026 |
| 4.6 | Differences from EU261: UK amounts are in sterling and unchanged since 31 Dec 2020. UK law dropped the separate intra-EU >3,500 km band. The UK isn't bound by Reg. 2026/2202. | https://blog.wego.com/uk261/ | secondary | medium | 2026; checked 6 Nov 2026 |
| 4.7 | Limitation: 6 years in England, Wales and Northern Ireland, 5 in Scotland. Escalation goes to an approved ADR body (AviationADR or CEDR, depending on the airline), or to the CAA PACT if the airline isn't in a scheme. PACT can't bind the airline. | https://heygyro.com/blog/uk261 | secondary | medium | 2026; checked 6 Nov 2026 |
| 4.8 | UK reform: the Civil Aviation (Consumer Protection and Regulatory Reform) Bill would give the Secretary of State powers to add passenger rights by secondary legislation and enhance CAA enforcement. The government has also announced bans on charging to seat children with adults and on fees for correcting simple booking errors. | https://www.burges-salmon.com/articles/102o4ut/evolution-delivered-what-regulation-eu-2026-2202-means-for-eu261-reform/ | secondary (law firm) | medium | 8 Oct 2026; checked 6 Nov 2026 |

##### Tactics
1. On UK–EU routes, check both regimes. An EU-airline flight from the EU to the UK is covered by EU261 and by UK261 arrival rules, so claim under one only (4.1, 2.1).
2. Use the CAA tables to set your expectation before claiming, especially for cancellations with 7–14 days' notice (4.2, 4.3).
3. Keep every receipt for self-funded care and stay "reasonable": no alcohol, no luxury hotels (4.4).
4. After 8 weeks without a reply, or after a refusal, go to the airline's ADR body. Otherwise go to the PACT or the small claims court (4.7).
5. Watch the Civil Aviation Bill for future changes to UK261 (4.8).

---

#### 5. US DOT rules

##### Claims
| # | Claim | Source URL | Source type | Confidence | Date published / checked |
|---|---|---|---|---|---|
| 5.1 | Refund rule (89 FR 32760, Apr 2024; 14 CFR Part 260): you get an automatic refund for a cancellation or significant change if you don't accept the alternative. A significant change includes a departure 3h+ earlier or arrival 3h+ later (domestic), or 6h+ (international); a change of airport; added connections; or a downgrade. | https://www.transportation.gov/sites/dot.gov/files/2024-12/Refund%20Final%20Rule%20Small%20Business%20Compliance%20Guidance.pdf | official | high | Dec 2024; checked 6 Nov 2026 |
| 5.2 | Bag-fee refund if a bag isn't delivered within 12h of a domestic arrival, 15h for international flights of ≤12h, or 30h for international flights >12h. You must file a mishandled-baggage report. | same | official | high | Dec 2024; checked 6 Nov 2026 |
| 5.3 | Refunds are due within 7 business days for card purchases and 20 calendar days for other payment methods, in the original form of payment. | https://www.tripit.com/web/blog/travel-tips/DOT-new-rule-airlines | secondary (quoting DOT) | medium | 2024; checked 6 Nov 2026 |
| 5.4 | Enforcement discretion: from 5 Dec 2025 DOT stopped enforcing refunds for flights that are merely renumbered, if the passenger is rebooked and there is no "significant change or delay". This was extended on 8 Jul 2026 to 7 Jul 2027 while DOT redefines "cancelled flight". | https://www.transportation.gov/airconsumer/latest-news | official | high | posted 8 Jul 2026; checked 6 Nov 2026 |
| 5.5 | DOT: "airlines' obligation to provide refunds continue to exist regardless of the cause of the flight disruption". | https://www.transportation.gov/airconsumer/latest-news | official | high | posted 6 Nov 2025; checked 6 Nov 2026 |
| 5.6 | The ANPRM on cash compensation for controllable delays and cancellations (Dec 2024, $200–$775) was withdrawn by Federal Register notice. | https://public-inspection.federalregister.gov/2025-20042.pdf | official | high | FR 17 Nov 2025; checked 6 Nov 2026 |
| 5.7 | The 2024 ancillary-fee disclosure rule was vacated by the full Fifth Circuit (Airlines for America v. DOT, reported 3 Feb 2026). DOT issued a final rule implementing the vacatur in July 2026. This doesn't affect the refund rule. | https://www.transportation.gov/airconsumer/latest-news | official (+ DWU Consulting for date) | high | posted 2 Jul 2026; checked 6 Nov 2026 |
| 5.8 | The refund rule is in effect. It is partly codified in the FAA Reauthorization Act of 2024 and DOT has not rescinded it. | https://dwuconsulting.com/dwu-ai/dot-consumer-protection-rulemaking | secondary | medium | Jun 2026; checked 6 Nov 2026 |
| 5.9 | The cause-of-delay rule (91 FR 56588, 3 Sep 2026) moves 10 events (e.g. non-deferrable unscheduled maintenance, removal of unruly passengers, cyberattacks on compliant carriers) out of the "Air Carrier" cause code. It was originally effective 19 Oct 2026. | https://www.govinfo.gov/app/details/FR-2026-09-03/2026-18040 | official | high | 3 Sep 2026; checked 6 Nov 2026 |
| 5.10 | DOT then published a "Delay of Effective Date" for that rule (FR Doc. 2026-21058, 91 FR 65456, 15 Oct 2026), granting a 21 Sep 2026 request from Airlines for America. The rule "is delayed until February 1, 2027" and applies to "delays and cancellations of flights occurring on or after January 1, 2027". | https://www.govinfo.gov/content/pkg/FR-2026-10-15/pdf/2026-21058.pdf | official | high | 15 Oct 2026; checked 6 Nov 2026 |
| 5.11 | Airline customer service dashboards remain a statutory requirement (FAA Reauthorization Act 2024 §506). The DOT advisory committee discussed them on 22–23 Sep 2026. | https://www.transportation.gov/airconsumer/latest-news | official | high | posted 1 Sep 2026; checked 6 Nov 2026 |
| 5.12 | When an airline stops operating (e.g. Spirit, May 2026), DOT advises a credit-card chargeback under the Fair Credit Billing Act. | https://www.transportation.gov/airconsumer/latest-news | official | high | posted 1 May 2026; checked 6 Nov 2026 |

##### Tactics
1. Decide fast. If the new time misses the 3h/6h line and doesn't work for you, decline the rebooking and any voucher in writing to lock in the cash refund (5.1).
2. Never accept a voucher or credit unless you actually want it, because accepting ends the refund right (5.1).
3. If your flight was only renumbered with the same times, expect no refund until at least 7 Jul 2027 (5.4).
4. File a bag report before leaving the airport, and note the arrival time to count the 12/15/30h windows (5.2).
5. If the refund hasn't appeared after 7 business days (card), file a DOT complaint, then dispute the charge with your card issuer (5.3, 5.12).
6. Check the airline's dashboard commitments for meals and hotels on the day, and ask for the cause code. Expect fewer amenities once the cause-of-delay rule takes effect on 1 Feb 2027 (it covers flights from 1 Jan 2027, per FR Doc. 2026-21058) (5.9, 5.10, 5.11).
7. Don't promise users any US cash compensation for delays (5.6).

---

#### 6. Montreal Convention (baggage)

##### Claims
| # | Claim | Source URL | Source type | Confidence | Date published / checked |
|---|---|---|---|---|---|
| 6.1 | ICAO raised the MC99 limits on 28 Dec 2024 under the 5-year inflation review (Art. 24). | https://www.icao.int/news/international-air-travel-liability-limits-set-increase-enhancing-customer-compensation-0 | official | high | 18 Oct 2024; checked 6 Nov 2026 |
| 6.2 | Baggage (destruction, loss, damage, delay): 1,519 SDR per passenger, up from 1,288. Passenger delay: 6,303 SDR, up from 5,346. Death or injury strict-liability tier: 151,880 SDR. | https://otc-cta.gc.ca/eng/content/notification-air-carriers-upward-revision-limits-liability-governed-montreal-convention ; https://irglobal.com/article/revised-airline-liability-limits-under-montreal-convention/ | official (Canadian regulator) + secondary | high | Dec 2024; checked 6 Nov 2026 |
| 6.3 | A higher limit applies if you made a special declaration of interest at check-in and paid any supplementary fee (Art. 22(2)). | https://flightclaimletters.pages.dev/guides/montreal-convention-baggage/ | secondary (treaty summary) | medium | checked 6 Nov 2026 |
| 6.4 | Written complaint deadlines (Art. 31): 7 days from receipt for damaged checked baggage, 21 days from the date the bag was put at your disposal for delay. Court action must be brought within 2 years (Art. 35). | https://www.getkibbo.com/blog/montreal-convention-liability-limits-baggage-protocol | secondary (treaty summary) | medium | checked 6 Nov 2026 |
| 6.5 | Under Art. 17(3), if the carrier admits loss, or the bag hasn't arrived 21 days after it should have, the passenger may treat it as lost. | (MC99 Art. 17(3); treaty text not fetched this session) | primary legal text (from knowledge) | medium | checked 6 Nov 2026 |
| 6.6 | The baggage cap covers material and non-material damage together (Walz v Clickair, C-63/09). | https://heygyro.com/blog/montreal-convention | secondary | medium | checked 6 Nov 2026 |
| 6.7 | Under the Warsaw system, the checked-baggage limit is weight-based (17 SDR/kg in amended versions). It still applies on routes between states that haven't ratified MC99. | https://en.wikipedia.org/wiki/Lost_luggage | secondary | low | checked 6 Nov 2026 |
| 6.8 | Reg. 2026/2202 amends Reg. 2027/97 so that the date you submit a baggage complaint form (online, in the app or at the airport) counts as the filing date under MC99 Art. 31. Applies from 23 Oct 2027. | https://www.burges-salmon.com/articles/102o4ut/evolution-delivered-what-regulation-eu-2026-2202-means-for-eu261-reform/ | secondary (law firm) | high | 8 Oct 2026; checked 6 Nov 2026 |

##### Tactics
1. File a Property Irregularity Report at the airport, then send a written claim within 7 days (damage) or 21 days (delay), counted from receipt of the bag. Do both even if the airline's portal says otherwise (6.4).
2. Buy essentials while the bag is delayed, keep receipts, and claim them as delay damages up to 1,519 SDR (6.2).
3. After 21 days, convert the claim to "lost" and claim the contents' value with proof (6.5).
4. Make a special declaration for high-value checked items, or don't check them (6.3).
5. Diary the 2-year court deadline from the arrival date (6.4).
6. In the US, claim the bag-fee refund separately (5.2).

---

#### 7. Travel insurance

##### Claims
Rows 7.1–7.3 use one US issuer's cards (Chase Sapphire Preferred and Reserve) as a worked example of card cover. Other cards' thresholds, caps and exclusions differ; check the guide to benefits for the card you actually use.

| # | Claim | Source URL | Source type | Confidence | Date published / checked |
|---|---|---|---|---|---|
| 7.1 | Chase's own page says Trip Delay Reimbursement applies "as long as you purchase at least a portion of the cost of eligible transportation with your Chase Sapphire card", and "You don't need to do anything to activate this benefit". A covered delay of more than 12 hours (Preferred) or 6 hours (Reserve) pays up to $500 per eligible person per trip. | https://www.chase.com/personal/credit-cards/education/basics/chase-trip-delay-insurance-what-to-know | official (issuer) | high | checked 6 Nov 2026 |
| 7.2 | Chase Sapphire Reserve: overnight stays also trigger cover. There is no cover if the hazard was public or known before departure. Notice of claim within 60 days. Baggage delay of 6h+ pays $100/day for 5 days. | https://www.nerdwallet.com/travel/learn/your-guide-to-chase-sapphire-reserve-travel-insurance | secondary | medium | checked 6 Nov 2026 |
| 7.3 | Chase Sapphire Reserve trip cancellation/interruption: up to $10,000 per person and $20,000 per trip. Emergency medical: $2,500 ($50 deductible). Evacuation: up to $100,000 (Preferred also has evacuation but no emergency medical). | https://www.squaremouth.com/travel-advice/does-chase-sapphire-have-travel-insurance | secondary | medium | checked 6 Nov 2026 |
| 7.4 | CFAR (example insurer wording): up to 75% of non-refundable costs. Must be bought "within 14 days of your initial trip deposit", and you must cancel "at least 48 hours" before departure. | https://www.withfaye.com/info/cancel-for-any-reason/ | policy summary (insurer) | medium | checked 6 Nov 2026 |
| 7.5 | Typical CFAR conditions across the market: buy within 10–21 days of first trip payment, insure 100% of prepaid non-refundable costs, cancel more than 48–72h before departure. Reimbursement is 50–75%. | https://www.insuremytrip.com/travel-insurance-plans-coverages/cancel-for-any-reason/ | secondary (broker) | medium | checked 6 Nov 2026 |
| 7.6 | Pre-existing-condition waivers usually need purchase within a time-sensitive window after the initial deposit (often 14–21 days), along with being medically able to travel at purchase and insuring the full trip cost. No certificate wording was obtained. | (market practice; no certificate fetched) | secondary | low | checked 6 Nov 2026 |
| 7.7 | Medicare "usually doesn't cover health care while you're traveling outside the U.S.". Some Medigap policies cover foreign emergencies, and Part D doesn't cover drugs bought abroad. | https://www.medicare.gov/coverage/travel-outside-the-u.s. | official | high | checked 6 Nov 2026 |
| 7.8 | Medigap plans C, D, F, G, M and N: 80% of emergency care abroad after a $250 deductible, $50,000 lifetime maximum, and the emergency must begin within the first 60 days of the trip. | https://www.senior65.com/medicare/article/does-medicare-cover-you-abroad | secondary | medium | checked 6 Nov 2026 |
| 7.9 | Card cover is usually secondary to other insurance or airline payments, and it excludes events known before purchase or departure. | https://norteapp.io/guide/chase-sapphire-reserve-trip-delay-coverage | secondary | low | Oct 2026; checked 6 Nov 2026 |

##### Tactics
1. Book flights on the card whose benefit you'll rely on (some issuers, e.g. Chase in row 7.1, accept a part payment), and download that card's current Guide to Benefits before each trip (7.1).
2. Use the card's trip-delay cover for hotel and meals the airline won't pay for, such as weather or US "uncontrollable" causes. Get a written delay or cancellation statement from the airline (7.1, 7.2, 5.9).
3. Claim from the airline first (EU261 care, refunds), then from the card for the remainder, because cover is usually secondary (7.9, 2.11).
4. If you might cancel for a reason not on the covered list, buy CFAR within 14 days of the first deposit, insure 100% of prepaid costs, and cancel at least 72h out to be safe (7.4, 7.5).
5. If you have a medical condition, buy a policy with a pre-existing-condition waiver within its purchase window, and read the certificate's look-back period (7.6).
6. US travellers on Medicare should buy travel medical plus evacuation cover. Don't rely on card medical limits of a few thousand dollars (7.3, 7.7, 7.8).
7. For an airline collapse, combine insolvency cover with a card chargeback (5.12).

---

#### 8. "Disruption in progress" checklist

1. **Screenshot everything now:** the delay or cancellation notice, the departure board, the app status and the stated cause (2.6, 5.9).
2. **Search for alternatives before talking to anyone:** your airline, partners and competitors, and trains. Note specific flights with seats (1.2, 1.10).
3. **Use parallel channels:** rebook in the app, phone the airline (overseas lines), queue at the transfer, gate or lounge desk. Take the first good option (1.10).
4. **Name your right:** under EU/UK rules, "reroute me at the earliest opportunity, including on another carrier". On American, "partner rebooking for a controllable disruption". In the US, "if not acceptable, I want my automatic refund" (1.1, 1.2, 1.4, 5.1).
5. **Don't accept vouchers or credits** unless you choose to (2.12, 5.1).
6. **Ask for care:** meal vouchers, hotel and transport (EU/UK, whatever the cause), or dashboard commitments (US, controllable causes only). If refused, buy reasonable care yourself and keep receipts (2.11, 4.4, 1.8).
7. **Record the actual arrival time** at the final destination, doors open (2.4, 2.5).
8. **Bags:** file a PIR before leaving the airport. Send a written claim within 7 days (damage) or 21 days (delay). Claim the US bag fee after 12/15/30h (6.4, 5.2).
9. **Within 1–2 weeks:** submit the EU/UK compensation claim to the operating carrier, the US refund follow-up, and insurance or card claims (card notice deadlines can be short, e.g. 60 days in the row 7.2 example) (2.18, 5.3, 7.2).
10. **Escalate after about 8 weeks:** NEB, ADR or CAA PACT, a DOT complaint, a card chargeback, then small claims or the European Small Claims Procedure (2.18, 4.7, 5.12).
11. **Diary the deadlines:** national limitation (e.g. 2 years in the Netherlands), Montreal 2 years, and 9 months for EU flights from 23 Oct 2027 (2.16, 6.4, 3.6).

---

#### (a) Facts that change often and must be re-verified
- The application date of Reg. 2026/2202 (23 Oct 2027), its final Art. 7 wording, and whether Switzerland, Norway and Iceland have incorporated it.
- The DOT renumbered-flight enforcement pause (currently to 7 Jul 2027) and the "Refund III" redefinition of "cancelled flight".
- The effective date of the DOT cause-of-delay rule, now 1 Feb 2027 for flights from 1 Jan 2027 under the 15 Oct 2026 notice (FR Doc. 2026-21058), which could move again, plus each airline's dashboard commitments.
- Contracts of carriage (AA updated 13 Aug 2026, Delta 18 Aug 2026, United revised 27 Feb 2026).
- Card Guides to Benefits: thresholds, caps and which cards carry cover change with product refreshes.
- CFAR and waiver purchase windows and percentages, which vary by insurer and plan.
- The SDR exchange rate, and the next ICAO Montreal review. ICAO's 18 Oct 2024 release says limits adjust "for inflation every five years", and the 28 Dec 2024 rise was "the fourth review since the treaty came into force in 2003". A next review around 2029 is inferred from that cycle.
- National limitation periods and procedural rules (e.g. French mandatory mediation from Feb 2026).
- The progress of the UK Civil Aviation (Consumer Protection and Regulatory Reform) Bill.

#### (b) Conflicts between sources
- **Date of the EU deal:** the Council says 15 Jun 2026, EPRS says 16 Jun, and AeroMorning and AirRefund say 12–13 Jun. The official Council date (15 Jun) is used here.
- **Long-haul amounts after reform:** the Council release lists €600 for "all other flights" from 3h. PaddleYourOwnKanoo and TravelFree report €300 at 3–4h and €600 only from 4h. Unresolved; check Art. 7 of the OJ text.
- **"Takes effect" for the reform:** AirAdvisor says it "takes effect on 22 October 2026", which is the entry-into-force date. The rights apply from 23 Oct 2027.
- **Tarmac disembarkation:** the Council's 2025 position said 3h. Burges Salmon's reading of the final text says 2h.
- **Timing of the US compensation withdrawal:** press reported it in early Sept 2025 (TPG, Aerospace Global News). The formal FR withdrawal is dated 17 Nov 2025, and AFAR says 14 Nov.
- **DOT cause-of-delay rule:** secondary sites such as The Points Party ("DOT Delay Rule Takes Effect October 19"), TravelTourister and the United Travels blog still give 19 Oct 2026. The Federal Register notice of 15 Oct 2026 delayed it to 1 Feb 2027, which Affordable Skies reports correctly.
- **Limitation periods:** Italy (2 years vs 26 months), Belgium (1, 2 or 5 years), Netherlands (2 vs 5), Switzerland (2 years per one secondary source, unverified).
- **Chase cap wording:** "per ticket" vs "per eligible person per trip" (Chase's own page uses per person).

#### (c) What I could not find
- The text of the EUR-Lex consolidated Reg. 261/2004 (the fetch failed). Core Art. 6–9 wording is cited from the known text and corroborated by Council and CAA sources.
- The OJ text of Reg. 2026/2202 itself, and the rerouting wording of the 2024 Commission guidelines.
- The official United Contract of Carriage Rule 24 page, and Delta's international contract.
- The legal instruments by which Norway and Iceland apply EU261 (the EEA Joint Committee decision), and the Norwegian and Icelandic enforcement bodies' pages.
- An official or academic limitation-period table; only claims-sector compilations were found.
- Amex and Capital One Guide to Benefits wording, and an actual standalone certificate with a pre-existing-condition waiver.
- UK FCA/MoneyHelper and US state insurance regulator guidance on travel insurance.
- The DOT dashboard page itself; the cause-of-delay rule's new effective date (1 Feb 2027) comes from the Federal Register notice, not from DOT's consumer pages.
- The CAA's own pages on the 6-year/5-year limitation and the ADR bodies.
