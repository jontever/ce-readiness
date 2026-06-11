# CE Readiness

A free, open-source tool to help UK organisations prepare for [Cyber Essentials](https://www.ncsc.gov.uk/cyberessentials/overview) certification.

**Live at:** [ce.govassure.uk](https://ce.govassure.uk)

## What it does

Guides you through the five Cyber Essentials control areas with plain-English questions, inline guidance, and immediate remediation advice for any gaps:

1. Firewalls
2. Secure Configuration
3. User Access Control
4. Malware Protection
5. Patch Management

At the end you get a pass/fail summary per control area with prioritised remediation guidance — so you know exactly what to fix before applying for certification.

**No account required.** Answers are stored in your browser only — nothing is sent to a server.

## Important disclaimer

This tool provides a self-assessed readiness indicator only. It is **not** an official Cyber Essentials assessment and does not constitute or guarantee certification. Official certification must be obtained through an [IASME-accredited Certification Body](https://iasme.co.uk/cyber-essentials/certification-bodies/).

"Cyber Essentials" is a registered trademark of DSIT. This tool is not affiliated with or endorsed by NCSC, IASME, or DSIT. Question content is based on NCSC Cyber Essentials technical requirements published under the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- TypeScript
- [GOV.UK Design System](https://design-system.service.gov.uk/) (via CDN)
- `localStorage` for session state — no database
- Deployed on [Vercel](https://vercel.com/)

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying to Vercel

1. Push to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. No environment variables required — Vercel auto-detects Next.js

## Project structure

```
app/
  page.tsx                  # Landing page
  assessment/
    page.tsx                # Assessment overview (5 sections)
    [section]/page.tsx      # Question wizard per control area
  results/page.tsx          # Results dashboard
components/
  GovHeader.tsx
  GovFooter.tsx
context/
  AssessmentContext.tsx     # localStorage-backed React context
data/
  questions.ts              # Question bank (28 questions across 5 sections)
lib/
  assessmentStore.ts        # State management and results computation
  types.ts                  # TypeScript types
```

## Contributing

Contributions welcome — particularly:

- Keeping questions aligned with NCSC scheme updates (IASME publish revised requirements periodically)
- Cyber Essentials Plus coverage
- Accessibility improvements
- Welsh language support

Please open an issue before starting significant work.

## Licence

[Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/)

A [GovAssure](https://govassure.uk) open source community project.
