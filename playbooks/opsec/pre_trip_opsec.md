# Pre-Trip OPSEC

**What this framework claims:** almost every security incident that happens *during* a trip was actually decided *before* it — which devices you brought, whether they were hardened, what name is on the booking, what's still on the camera roll. A 30-minute checklist before departure closes most of the exposure that "be careful" while traveling never quite catches in the moment. The identity and booking techniques here draw substantially on Michael Bazzell's published *Extreme Privacy* methodology, adapted down to what's proportionate for ordinary travel rather than his own high-threat-model use case.

## Device Selection Checklist

What to bring depends on trip type, not habit:

| Trip Type | Devices | Notes |
|---|---|---|
| Leisure, low-risk destination | Laptop + phone + tablet | Standard kit — no reason to complicate it. |
| Leisure, higher-risk destination | A dedicated hardened travel phone (a GrapheneOS device is a strong option) + tablet only | Leave the primary laptop home. Fewer devices in play means less to lose and less to search. |
| Work travel | Employer-issued device + personal phone | Keep them strictly separate — no personal use on the employer device, no work data on the personal one. |
| Technical/research work on the road | A dedicated device for that work + personal phone + travel router | Full compartmentalization, for anyone whose travel work involves elevated tooling or access. |

## Pre-Trip Device Hardening (30-Minute Checklist)

- [ ] Confirm full-disk encryption is active on every device you're bringing (LUKS on Linux, BitLocker on Windows, FileVault on macOS; standard by default on iOS/iPadOS).
- [ ] Update OS and firmware on everything before departure.
- [ ] Confirm your VPN client is installed and logged in on every device.
- [ ] Strip data off travel devices that you don't specifically need for this trip.
- [ ] Pack a hardware security key (YubiKey or similar) and keep backup codes somewhere other than the travel device itself.
- [ ] Confirm your password manager vault is synced and available offline.
- [ ] Set up your travel router: VPN client configured, fresh WiFi credentials.
- [ ] Set mobile screen-lock timeout short, and enable auto-wipe after a fixed number of failed unlock attempts.
- [ ] Review the camera roll and remove anything sensitive before crossing any border.
- [ ] Switch to PIN-only unlock for border crossings — disable biometrics. In most jurisdictions you can't be legally compelled to reveal a PIN the way you can be compelled to provide a fingerprint or face scan.
- [ ] If supported, set an auto-reboot timer (72 hours is a common default) — a seized-then-rebooted device returns to its encrypted pre-unlock state.
- [ ] Keep the phone in airplane mode with data disabled until you actually need it during transit — no active connection, no location trail being built while you travel.

## Accommodation Booking Strategy

**Booking identity:**
- Use a unique email alias per booking platform (a service like SimpleLogin makes this close to zero-effort) rather than your everyday address.
- Book non-official reservations — loyalty accounts, short-term rentals — under an alias name; save your real name for contexts where it's legally required, such as ID-checked hotel check-in in some countries.
- A virtual-card service (Privacy.com or similar) adds a layer of separation between a booking and your primary card.
- Where you have a choice, avoid booking platforms that require biometric verification.

**Hotel check-in without showing ID at the desk** (methodology from Bazzell's *Extreme Privacy*, 5th ed.):
- Major chains (Hilton, Marriott, and similar) let you open a rewards account under an alias, using the hotel's own address if needed.
- Book a prepaid, non-refundable room under that account.
- Use the chain's Digital Key feature to unlock the room from the app, which bypasses the front desk entirely.
- Pre-check-in the day before to select your room ahead of arrival.
- A fully legal middle ground: give your first and middle name only, omitting your surname — these are genuinely your own names, so nothing about it is false, it's just less specific and harder to casually search.
- Standard chain properties draw far less staff attention than luxury ones, where staff are trained to remember guests and look up return visitors.

**Loyalty programs — the actual trade-off:**
A loyalty account is a permanent, searchable record linking a name to specific locations and dates over time. It's a real trade-off, not a hypothetical one — Bazzell has written about deliberately walking away from elite status once he recognized what the history revealed about his movements. For most travel, the points value is worth the exposure; for a small number of genuinely higher-risk trips, skip loyalty programs entirely and book alias-plus-prepaid instead.

**Short-term rentals:**
Newer platform accounts increasingly require photo ID and video verification, which makes creating a fresh account for privacy purposes self-defeating. Two workarounds: contact property owners directly outside the platform and arrange booking off-app, or use an already-verified account belonging to someone you trust.

## Alias Identity Kit

For contexts where using an alias is appropriate — private business interactions, never anything involving a government — the kit (again drawing on Bazzell's published methodology) looks like:

- Real first name, alias surname — you respond to it naturally without a beat of hesitation.
- A separate email address under the alias (ProtonMail or similar).
- A VoIP number under the alias, for handing to contractors, hotel staff, or anyone who doesn't need your real one.
- Printed business cards in the alias name — the single most effective piece, since a printed card reads as more legitimate than a spoken name.
- Hotel rewards accounts opened under the alias, which typically require no verification.
- **Never** use an alias with government officials, border agents, or in any legal context — that line doesn't move.
- A cheap, visibly old phone is a useful prop when a shop or restaurant insists on an app download or phone number to proceed — show it, ask for a workaround, and you'll usually get one without handing over a real device or number.

## Border-Crossing Device Posture

The threat model at a border differs from the rest of a trip for one structural reason: in many countries, agents can search an unlocked device without a warrant or specific suspicion, and forensic-extraction tools (Cellebrite and similar) can pull a device's full contents in minutes once it's open. What's extracted can be retained indefinitely, and not always securely. Your actual rights during this process vary significantly by country and by which passport you're holding, and the rules change often enough that it's worth confirming the current ones for your specific situation before you travel rather than assuming a past trip's rules still hold.

A posture that holds up across most jurisdictions has three parts:

- **Bring less.** The single most effective mitigation is having less on the device worth finding. Strip anything you don't need for the trip before you leave home — don't try to hide it once you're in the security line.
- **Retrieve after, don't carry through.** For anything you need at the destination but don't need physically present at the border, keep the device itself close to clean, store the actual data in an end-to-end-encrypted cloud service, and redownload it once you've cleared customs. That trades a few minutes of redownload time for not having sensitive data physically present during a search. A more involved version of the same idea — imaging the full system before departure, storing that image encrypted on separate media, wiping the device, and restoring after arrival — exists for travelers who want stronger guarantees, but the cloud-retrieval version covers most people's actual risk at a fraction of the setup effort.
- **Present cleanly.** Never carry hidden partitions or hidden encrypted containers across a border. Agents trained to look for exactly this treat "secret" data as inherently suspicious, and getting caught with something well-hidden tends to cause more trouble than whatever it contained. A device with nothing to find beats one with something well-concealed.

**At the crossing itself:**
- Power devices off before reaching customs — this forces full-disk-encryption re-authentication, rather than leaving a merely-locked-but-decrypted-in-memory device.
- PIN or passcode only, biometrics disabled — a PIN generally carries stronger legal protection against compelled disclosure than a fingerprint or face unlock, though this varies by country and is worth confirming for yours specifically.
- Force-close apps and log out of anything you don't need visible mid-search.
- Keep the phone's SIM inactive (or physically removed) during the crossing, and activate a local eSIM only after you're through.
- If you're carrying specialized equipment — research or technical tools, professional gear — have a straightforward, honest explanation ready rather than hoping it doesn't come up.

## Cash and Payment Strategy

**Prepaid card discipline:**
- Avoid using prepaid cards near home — the transaction history builds a location pattern that defeats the purpose of having them.
- Separating cards by purpose (one for travel spending with no home-location history, one for minimal home use, one kept pristine for emergencies) limits what any single card's history can reveal.
- Buy prepaid cards while already traveling, not from a store near home.
- Withdraw cash while away from your home area rather than before you leave.

**International cash considerations:**
Bazzell's *Extreme Privacy* describes carrying small, globally-recognized gold coins (a Canadian Maple Leaf or South African Krugerrand, for example) as an extreme contingency — the reasoning being that in a corrupt-checkpoint scenario, a universally-valuable physical asset can matter more than any card. Treat that as insurance for a genuine edge case, not standard travel advice; a card plus local cash covers the overwhelming majority of trips. In destinations with informal or dual exchange rates (geo-arbitrage economies like Argentina or Vietnam are commonly cited examples), small USD cash for tips and vendors alongside cards for larger purchases is the practical middle ground.

## Related

- [[in_transit_security]] — network security once you're actually connected somewhere.
- [[communication_protocols]] — the SIM and messaging setup this checklist assumes is already in place.
- [gear_kit](../gear_kit.md) — the hardware (travel router, security key, backup drives) referenced throughout.
- [situational_awareness](../../frameworks/situational_awareness.md) — the broader awareness model that booking and border posture sit inside.
