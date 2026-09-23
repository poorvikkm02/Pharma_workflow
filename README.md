# Pharma Workflow — Internal Explainer Site

An internal, non-selling explainer site for the proposed pharma digital/AI solutions
business. Built with Next.js (App Router), React, TypeScript, Tailwind CSS and
lucide-react. No backend — all content is static and data-driven.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Project structure

```
app/
  layout.tsx        Root layout: fonts (IBM Plex Sans/Serif/Mono), metadata
  page.tsx           Composes every section, in order
  globals.css         Design tokens (CSS variables, light/dark), shared primitives

components/
  Nav.tsx                Sticky top navigation
  Hero.tsx                01 hero + interactive workflow chain
  Problem.tsx              Why pharma digital production is complex
  StartPhase.tsx            00 — how we actually start (freelance/showcase)
  ReachPitch.tsx             Tools, outreach channels & pitch sequence
  ClientAcquisition.tsx       01 — client acquisition channels
  ClientBrief.tsx               02 — mock brief card, interactive inputs
  MedicalCreative.tsx            03 — medical + creative parallel tracks
  AIWorkflow.tsx                   Traditional vs AI-assisted toggle
  AIFeatures.tsx                    5 AI automation example cards
  MLRPRC.tsx                          04 — MLR/PRC approval + branches
  Technology.tsx                       05 — tech pipeline & outputs
  Deployment.tsx                        06 — final delivery pipeline
  FuturePlatform.tsx                     Long-term platform vision
  WorkflowTimeline.tsx                    Full interactive timeline
  FinalCTA.tsx                             Closing CTA + disclaimer
  ui/
    Flow.tsx            Horizontal chain that collapses to vertical on mobile
    Track.tsx            Numbered/icon step list (used for parallel tracks)
    DelivGrid.tsx          Icon + label grid
    Badges.tsx               Pill / FictionalTag badges
    SectionHeading.tsx         Kicker/eyebrow + title + lede

lib/
  data.ts   All copy and content as typed arrays/objects — edit this file to change
            text, add/remove steps, or swap icons without touching component markup.
```

## Design tokens

Colors, radii and fonts are defined once as CSS variables in `app/globals.css` and
mapped into Tailwind via `tailwind.config.ts` (`bg`, `card`, `ink`, `muted`, `teal`,
`indigo`, `line`, `line-soft`, `teal-tint`, `indigo-tint`, `amber`, `amber-tint`).
Change a value in one place and it propagates everywhere. Dark mode follows the
system preference automatically (`prefers-color-scheme`), or can be forced by adding
the `dark` class to `<html>`.

## Scaling this up

- All copy lives in `lib/data.ts` — safe to hand to a non-engineer to edit.
- Sections are independent components; add a new one to `app/page.tsx` in the order
  you want it to appear, and give it a stable `id` if it should be linkable from `Nav.tsx`.
- Interactive sections are marked `"use client"`; everything else renders on the
  server by default, which keeps the initial page fast as more sections are added.
- No external content or data source is wired up yet (this is intentionally a static
  concept site) — when this becomes real, `lib/data.ts` is the seam to replace with a
  CMS, API route, or MDX.
