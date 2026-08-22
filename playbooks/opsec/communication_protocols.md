# Communication Protocols

**What this framework claims:** connectivity abroad is a stack of independent decisions — how you get data, how you message, how you take calls, how someone back home knows you're okay — and treating them as one bundled "phone plan" problem is how people end up either unreachable or overpaying. Split them, and each piece can be optimized (and swapped) on its own terms.

## SIM Strategy by Destination

| Destination Type | Strategy | Rationale |
|---|---|---|
| Regional roaming available (e.g., EU/EEA from a home-region SIM) | Roam on your home SIM | Regional roaming regulations (the EU's is the best-known example) keep costs reasonable without swapping anything. |
| Short trip (under ~7 days), developed country | Data-only eSIM (Airalo, Holafly, etc.) | No local number needed, no physical swap, activate before departure. |
| Extended trip (over ~7 days), developing country | Local prepaid SIM | Better rates, and a local number matters for ride-hail and delivery apps. Buy at the airport or a convenience store; pay cash where accepted. |
| Higher-risk destination | Prepaid local SIM bought with cash under a name that isn't tied to your other accounts, plus an eSIM backup | Minimizes the link between your identity and the local cellular infrastructure. |
| Privacy-maximized | A data-only physical SIM from a provider like Telnyx, pre-installed before travel | Cheap hardware ($1 SIM, pay-per-MB), no local carrier interaction, no ID shown at a kiosk. Enable it once you've crossed the border. |

**Bazzell's international data methodology** (*Extreme Privacy*, Mobile Devices chapter) is worth adopting even if you don't go full privacy-maximized:
- Keep your phone in airplane mode during transit — no cellular tower connections means no location history being built while you're in the air or between stops.
- Enable data only when you actually need it (checking in, messaging, mail) rather than leaving it on continuously.
- A dual-SIM setup — a regular eSIM for everyday use plus a data-only physical SIM held in reserve for international legs — lets you toggle the international side on only when you cross a border, with no carrier interaction required.
- The trade-off on pay-per-MB data plans is cost: they run roughly $0.07–0.20/MB depending on country, so they're for messaging and check-ins, not streaming.

The eSIM route is the lowest-friction option for most trips — activate from your phone's settings before you leave, no physical swap, no airport kiosk line. The data-only-physical-SIM route is the lowest-friction *privacy* option, once it's installed: it's just a toggle.

## Signal Discipline While Traveling

- Signal is the default for anything sensitive, regardless of destination.
- Register it on a VoIP number rather than your cellular number — swapping SIMs while traveling then has no effect on your Signal identity.
- Signal works over WiFi or mobile data; it doesn't need cellular voice service at all.
- Set disappearing messages for travel-specific threads.
- Turn on Registration Lock (a PIN required to re-register your number on a new device) — it closes the "someone else re-registers your number" attack.
- If you're working from a hotel room a lot, syncing the desktop client to a laptop is worth it purely for typing speed.

## Voice and SMS Abroad

- A VoIP provider (VoIP.ms is a common choice, paired with a client app like Sipnetic on mobile) gives you a persistent home-country number that works over any internet connection — useful for receiving calls, SMS, and 2FA codes without a local SIM.
- Call quality depends entirely on your underlying connection; a VPN-tunneled connection through a travel router is usually sufficient.
- For voice calls specifically, prefer Signal's encrypted calling over VoIP where both ends support it — better quality and no metadata trail through a third-party provider.
- A secondary VoIP number (JMP.chat and similar services support this) is useful as a pseudonym number for situations where you don't want to hand out your primary one.
- Google Voice is a reasonable fallback for the services that flag or reject VoIP numbers outright.

## Check-In Protocols

- Designate one or two trusted contacts who know your itinerary before you leave.
- Set a daily check-in time via Signal, adjusted for time zone as you move.
- For higher-risk destinations, share live location for a fixed, time-limited window rather than leaving it on indefinitely.
- Agree in advance on an escalation rule — for example, "if I miss a check-in by 24 hours, you have my authority to start making calls."
- Keep emergency contacts in two forms: on the phone and written down somewhere physical (wallet, hotel room), in case the phone itself is what's unavailable.
- Know the local emergency number before you need it — 112 works across the EU; look up the destination-specific one otherwise.

## Data Backup Before and During Travel

- Back up your laptop to an encrypted external drive before departure, and leave that drive at home — it's your recovery path if the travel laptop is lost or seized.
- Auto-sync photos to encrypted cloud storage (Proton Drive or similar) nightly over hotel WiFi, so a lost device doesn't mean lost photos.
- Don't let any single device be the only copy of something you can't afford to lose — keep encrypted digital copies of your passport, insurance documents, and itinerary in a password manager's secure notes as a backstop.

## Related

- [[pre_trip_opsec]] — device and identity prep before departure.
- [[in_transit_security]] — network security once you're using that SIM and that Signal account on the road.
- [situational_awareness](../../frameworks/situational_awareness.md) — how comms discipline fits the broader threat-awareness picture.
