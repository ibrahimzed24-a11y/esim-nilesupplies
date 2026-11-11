# NileSupplies Asia eSIM Portal (`e-sim.nilesupplies.com`)

Automated affiliate comparison & travel connectivity platform targeting the Maldives, Indonesia (Bali), Malaysia, Singapore, Thailand, and pan-Asian travelers.

- **Official Domain:** https://e-sim.nilesupplies.com
- **Official Contact Email:** contact@nilesupplies.com
- **Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Lucide Icons, Vercel Serverless API Routes.

See `ANTIGRAVITY_INSTRUCTIONS.txt` for autonomous build, GitHub push, Vercel deployment, and Hostinger DNS setup instructions.

## Routes

- `/` home: plans, data calculator, device check, guides, FAQ
- `/destinations/[slug]`: maldives, bali, malaysia, singapore, thailand (Product + FAQPage JSON-LD)
- `/guides/[slug]`: travel guides with per-article metadata
- `/legal`, `/sitemap.xml`, `/robots.txt`
- `/api/go?id=PLAN_ID&ref=TAG`: 307 affiliate redirect
- `/api/calculate`: GET or POST usage estimate
