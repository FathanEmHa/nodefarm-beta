# 🌱 Onchain Farming Tracker — Beta Preview

> **⚠️ This is a UI prototype only.**
> No real data, no backend, no blockchain connection.
> Built for learning and early feedback purposes.

---

## What is this?

This repo is a **beta/demo version** of an onchain airdrop farming tracker that's currently in active development.

The goal of this prototype is to:
- Visualize the product direction and UI/UX before building the real thing
- Serve as a learning ground for Next.js 14 App Router
- Collect early feedback from potential collaborators and users

The **full version** will include real blockchain indexing, wallet sync via RPC, a PostgreSQL database, background job queues, and an AI insight layer. None of that exists here — and that's intentional.

---

## Current State

| Feature | Status |
|---|---|
| Dashboard UI | ✅ Done (mock data) |
| Wallets page | ✅ Done (mock data) |
| Tasks page | ✅ Done (mock data) |
| Add wallet (modal) | ✅ UI only, no save |
| Real wallet connection | ❌ Not yet |
| Blockchain data sync | ❌ Not yet |
| Database | ❌ Not yet |
| Authentication | ❌ Not yet |
| AI insights | ❌ Not yet |
| Background jobs | ❌ Not yet |

---

## Tech Stack (Beta)

- **Framework** — Next.js 14 (App Router)
- **Styling** — Tailwind CSS
- **UI Components** — shadcn/ui
- **Data** — Hardcoded mock data (`/lib/mock-data.ts`)
- **No backend, no database, no external API**

---

## Folder Structure

```
├── app/
│   ├── page.tsx              # Dashboard
│   ├── wallets/
│   │   └── page.tsx          # Wallets list
│   └── tasks/
│       └── page.tsx          # Tasks & progress
├── components/
│   └── ...                   # Reusable UI components
├── lib/
│   └── mock-data.ts          # All mock/hardcoded data lives here
└── README.md
```

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/FathanEmHa/nodefarm-beta
cd nodefarm-beta

# Install dependencies
npm install

# Run locally
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and you're good.

> Requires Node.js 18+

---

## Screenshots

<img width="1366" height="768" alt="Screenshot from 2026-05-11 14-08-50" src="https://github.com/user-attachments/assets/f224cf9d-2cce-4578-b652-365b31c211e3" />

---

## What's Coming in the Full Version

This beta is a UI shell. The real product being built will have:

- **Wallet sync** via Alchemy/QuickNode RPC
- **Transaction indexing** — raw tx parsed into meaningful activities (SWAP, BRIDGE, MINT, STAKE)
- **14-table PostgreSQL schema** — designed with clean separation between identity, blockchain data, analytics, and AI layers
- **Task engine** — rule-based system that evaluates wallet activity against farming requirements
- **Farming score** — calculated per wallet, per protocol, per network
- **AI insights** — powered by Gemini LLM via Vercel AI SDK, giving actionable recommendations
- **Background jobs** — long-running indexing via Trigger.dev
- **Multi-wallet grouping** — organize wallets by campaign, batch, or strategy
- **Subscription-based SaaS** — freemium with Pro tier

---

## Feedback

This is early stage. If you're reading this and have thoughts — on the UI, the concept, the feature priorities, or anything else — reach out directly.

Specifically interested in feedback from:
- Active airdrop farmers who feel the pain this is trying to solve
- Developers who've built similar tooling and know where things get hard
- Anyone who looked at this and thought "I'd actually pay for this"

---

## Status & Roadmap

```
[NOW]     Beta UI prototype        ← you are here
[NEXT]    Foundation (auth + DB schema + wallet CRUD)
[THEN]    Indexing engine (the hard part)
[LATER]   Task engine + analytics dashboard
[LATER]   AI insight layer
[LAUNCH]  Soft launch to early users (~7 months from start)
```

---

## License

MIT — feel free to look around, but the full product is proprietary.

---

> Built solo. Work in progress. Feedback welcome.
