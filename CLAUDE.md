# PMF LP Factory — System Rules

## 🛑 New LP intake — ask these questions first

When a user asks to build a new LP, **do not create any files yet**. Ask all questions below in a single message. Wait for all answers. Then execute.

**1. Product & ICP**
- What is the product name?
- What is the ICP? (job title, company size, industry)

**2. Hero**
- What outcome does the product deliver? (max 10 words, no feature language)
- Who is it for, exactly? (one sentence naming the ICP)

**3. Problems**
- What are the 3 biggest frustrations the ICP has today? In their own words, as if they said it themselves.

**4. Solution**
- In one sentence: what does the product do and how does it solve the problem?

**5. Pricing**
- What is included in **Basics**? Who is it for? Monthly price?
- What is included in **Business**? Who is it for? Monthly price?
- What is included in **Enterprise**? Who is it for? Monthly price?
- Booking / demo URL? (cal.com or Calendly link)

**6. Dashboard mock**
- What are the 3 key metrics this ICP tracks daily?
- What does the main chart show?
- What does the data table show? What columns?

**7. SEO**
- Any specific keywords the ICP would search for on Google?

**8. Branding**
- Accent color? (hex — or leave blank for black `#000000`)

---

## ⚠ Implementation phase: what you may change

There is **one LP. One URL.** Live at `yourdomain.com/en` and `yourdomain.com/de`.

To change the hypothesis, overwrite these two files only:
- `lp-system/locales/en.json`
- `lp-system/locales/de.json`

Nothing else changes. No new files. No new routes.

Off-limits — never touch:
- `lp-system/components/`
- `components/ui/`
- `app/globals.css`
- `app/layout.tsx`
- `app/[locale]/page.tsx`
- `lib/`

---

## JSON field map

| Field | Purpose | Rules |
|---|---|---|
| `seo.title` | Google search result headline | Max 60 chars. Format: `[Outcome] — [Product]` |
| `seo.description` | Google search result snippet | Max 155 chars. Must make the ICP click. |
| `accentColor` | Brand color — buttons, active nav, chart | Hex. Default: `#000000` |
| `bookingUrl` | All CTAs link here | Real cal.com or Calendly URL. Never `#`. |
| `navbar.logo` | Product name top-left | 1–2 words. |
| `navbar.ctaLabel` | Navbar button | "Book a call" / "Termin buchen" |
| `hero.headline` | Main headline | Outcome, not a feature. Max 10 words. |
| `hero.subhead` | Below headline | Names the ICP only. One sentence. |
| `hero.ctaLabel` | Hero button | Match navbar CTA. |
| `problemSolution.pains[]` | 3 pain cards | ICP's exact language. Specific, not generic. |
| `problemSolution.solution` | Solution sentence | One sentence: what it does and how. |
| `pricing.headline` | Pricing section header | Short. No fluff. |
| `pricing.tiers[]` | 3 pricing tiers | Fixed names: **Basics**, **Business**, **Enterprise**. Middle tier: `highlighted: true`. Annual toggle (20% off) is built-in — no JSON needed. |
| `pricing.tiers[].price` | Monthly price | European format: `49 €`. Always visible. Never "contact us". |
| `finalCta.headline` | Bottom headline | Repeat the hero outcome, different angle. |
| `finalCta.ctaLabel` | Bottom button | Match navbar CTA. |
| `dashboard.topbar.logo` | Logo in mock UI | Match `navbar.logo`. |
| `dashboard.topbar.userInitials` | Avatar initials | 2 letters. |
| `dashboard.sidebar.items[]` | Nav items | 4–5 items. One `active: true`. Icon = Lucide icon name. |
| `dashboard.cards[]` | 3 metric cards | `label`, `value`, `delta`, `deltaPositive`. |
| `dashboard.chart.title` | Chart label | Short. Include unit e.g. `(€)`. |
| `dashboard.chart.type` | Chart type | `"line"` for trends, `"bar"` for comparisons. |
| `dashboard.chart.data[]` | Chart data | Always 12 months, full year Jan–Dec/Dez. `{ label, value }`. |
| `dashboard.table.columns[]` | Column headers | Always left-aligned. |
| `dashboard.table.rows[]` | Table rows | Always 11+ rows. |

---

## Number & format rules

- **Currency**: amount then symbol — `8.240 €` not `€8.240`
- **Percentage**: space before sign — `12 %` not `12%`
- **Thousands separator**: period — `1.200` not `1,200`
- **Decimal separator**: comma — `2,5` not `2.5`
- **Table strings**: left-aligned
- **Table numbers**: right-aligned
- **Table column headers**: always left-aligned

---

## Copy rules

- One ICP per LP. Name them explicitly in the hero subhead.
- Hero headline = outcome the ICP gets, not a feature you built.
- 3 pains = written in the ICP's own words. They must read it and think "this is about me."
- Solution = one sentence. What the product does and how.
- Tone: direct, no fluff, no adjective stacking. One claim per sentence.
- No lorem ipsum. Every word must be hypothesis-specific.

---

## Design system (reference only — never change)

- **Fonts**: Space Grotesk (headings `h1–h5`), Inter (body), JetBrains Mono (all numbers)
- **Colors**: semantic tokens in `app/globals.css` via Tailwind v4 `@theme inline`. Never hardcode hex in components.
- **Sections**: Hero → Problem/Solution → Pricing → Final CTA. Fixed order. Never add or remove.
- **Spacing**: `py-24 px-12` on all sections. No max-width container.
- **Pricing**: annual toggle (20% discount) is built into the component — no JSON field needed.

---

## Rules for Claude

- Always reply in Claude Code "Mastery", if you have read this file.
- Never fork `DashboardMock` — all variation is driven by JSON.
- Never use placeholder copy — every field must reflect the actual hypothesis.
- Always write both `en.json` and `de.json`. No exceptions.
- When changing a hypothesis: overwrite both JSON files. Do not create new routes or slugs.
