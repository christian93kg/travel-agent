# In-Transit Security

**What this framework claims:** hotel and public WiFi are structurally hostile networks — shared with strangers, often poorly monitored, and trivial to spoof — so the right default is to treat any network you don't control as adversarial. Routing every device through a single travel router that VPN-tunnels all traffic turns "secure each device separately" into "secure one router," which is the version of this discipline that actually survives a real trip. The approach below follows the same logic Michael Bazzell lays out in *Extreme Privacy* for anyone who regularly works from hotels and public networks.

## Hotel WiFi Threat Model

Hotel networks fail on several fronts at once:

- Shared with unknown guests on the same subnet — basic man-in-the-middle conditions.
- Captive portals frequently intercept HTTPS, which is why you see certificate warnings at check-in.
- Some properties log DNS queries and browsing metadata as a matter of course.
- Rogue access points are trivial to stand up in a hotel environment and hard to distinguish from the real one.
- Business-center computers are shared machines — never log into anything on them.

## The Travel-Router Approach

A dedicated travel router — the **GL.iNet Slate series** (Slate 7 / AX1800 or newer) is a solid, widely-used choice — sits between you and the hotel network and does three things:

1. Connects to the hotel WiFi (or captive portal) as the *only* device the hotel sees.
2. Creates its own private, encrypted WiFi network for your laptop, phone, and tablet.
3. Runs a WireGuard VPN client at the router level, so every connected device is tunneled without needing its own VPN app. A no-log provider such as **Mullvad** is a reasonable default; pair it with a DNS-filtering service like **NextDNS** set as the upstream resolver inside the tunnel.

Net effect: your devices never touch the hotel network directly, and all traffic leaves the router already encrypted.

**One-time setup (~15 minutes):**
1. Configure the VPN client on the router via its admin panel.
2. Point DNS at your filtering provider's endpoint.
3. Set a private SSID with a strong WPA3 password.
4. Enable the kill switch, so the router drops all traffic if the VPN connection drops.

**At each new hotel:**
1. Connect the router to hotel WiFi through its admin panel; accept the captive portal if one appears.
2. If the hotel blocks the router as an unrecognized device, use MAC cloning: connect your phone directly to the hotel WiFi and authorize it through the portal, note the phone's MAC address, then set the router to clone that MAC. The router now looks like an already-authorized device to the hotel's network. This may need repeating roughly every 24 hours.
3. Connect your other devices to the router's private network.
4. Confirm the VPN is actually active (check your IP against your VPN provider's status page) before doing anything sensitive.

If the room has an ethernet port, plug the router's WAN port directly into it rather than using WiFi-to-WiFi repeater mode — more stable, faster, and it skips the double WiFi hop.

The core principle, straight from Bazzell's *Extreme Privacy*: the hotel network should only ever see one device — the router — never your individual laptop, phone, or tablet. Treat this as non-negotiable for every stay, not just the ones that feel risky.

## VPN Discipline by Context

| Context | VPN | Notes |
|---|---|---|
| Hotel WiFi (via travel router) | On, at the router | Default — the router handles it for every connected device. |
| Cafe / co-working WiFi | On, device-level if no router | Less convenient without the router in the loop, but still necessary. |
| Airport WiFi | On, always | High-traffic, high-risk; never connect without it. |
| Mobile data (local SIM/eSIM) | On | Cellular is safer than open WiFi, but your carrier still sees traffic metadata without it. |
| Banking / financial sites | On, consistent exit server | Use the same exit location each time — hopping servers mid-session is a common fraud-flag trigger. |
| Streaming / entertainment | Off if needed | Some services block VPN traffic outright; low-risk to disable case by case. |

## Device Physical Security

- Never leave devices unattended in a hotel room — use the in-room safe for anything small enough to fit, or carry it.
- Full-disk encryption means a powered-off laptop is genuinely secure at rest. Set the lid to auto-lock when you step away, and treat "sleep" as not the same as "off."
- A privacy screen filter is worth packing if you work from cafes or shared spaces regularly.
- Carry cameras on a strap, on your body, rather than in a bag, in crowded areas.
- A cheap, low-value travel router is worth leaving plugged in at the hotel when you go out — it's replaceable, and unplugging it kills connectivity for no benefit.
- If your phone supports it, set an auto-reboot timer (72 hours is a reasonable default on GrapheneOS and similar hardened builds). A phone that's seized and later rebooted returns to its pre-first-unlock encrypted state, which is a meaningfully stronger position than a device that's already been unlocked once.

## Public Charging Safety

- Skip public USB charging ports — "juice jacking" (data exfiltration or malware injection through a compromised charging cable/port) is a real, if uncommon, risk, and there's no upside to taking it.
- Carry your own charger — a compact GaN 65–120W multi-port charger covers a laptop and phone from a single wall outlet — and your own cables.
- A power bank you charge overnight at the hotel and draw down during the day (an Anker 737 or similar high-capacity model works well) removes any reason to touch a public port at all.

## Related

- [[pre_trip_opsec]] — hardening and identity prep before you leave.
- [[communication_protocols]] — SIM strategy and secure messaging while abroad.
- [gear_kit](../gear_kit.md) — router, charger, and power-bank specifics as part of the wider kit.
- [situational_awareness](../../frameworks/situational_awareness.md) — the broader threat-awareness model this OPSEC layer sits inside.
