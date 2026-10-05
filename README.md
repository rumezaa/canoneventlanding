# The Canon — event landing page

A Next.js (App Router) app: one fully static page for The Canon Event.
No API routes, no server functions — it prerenders to plain files.

```
app/
  layout.tsx       metadata, fonts, <head>
  page.tsx         the hero
  page.module.css  stage, logo lockup, buttons
  globals.css      theme tokens + reset
  site.ts          ← the two links live here
public/assets/     exported from Figma (file sfrYl9h5NdXKnfFKV9h2sK, node 379:19)
```

## Page structure

```
hero                  wordmark, date, Calgary, by invitation
                      + RSVP / Be on stage
an invitation         the premise, in prose
three acts            The Gathering / The Screening / The Dinner
the room so far       why Calgary, in prose + contact-sheet strip
credits               in partnership with · previously backed by
want to support?      mailto link
footer
```

No numbered section markers — sections lead with a headline and real
paragraphs instead.

Copy and imagery come from the landing-page comp (Figma page
"landing page — thecanonevent.com", frame 275:3): the prose from "02 — an
invitation" and "06 — why calgary", the act cards from "03 — the night",
the stills and backer logos from "04 — the proof".

Deliberately left out: the 200+/2,000+/2M+/$50K+ metric tiles, the
sponsorship tier ladder and the audience-split breakdown — sponsor-facing
rather than reasons to attend. (The "two thousand builders" line is kept,
since it reads as story inside a paragraph rather than a stat tile.)

## Links to set

Everything that leaves the site lives in `app/site.ts`.

| What | Field | Appears |
| --- | --- | --- |
| Event / RSVP page | `eventSiteUrl` | hero **RSVP** button |
| Builders form | `stageFormUrl` | hero **Be on stage** button |
| The Archive Fund | `orgs.archiveFund.url` | invitation signoff + Calgary paragraph |
| Ascend Calgary | `orgs.ascend.url` | partnership row + Calgary paragraph |
| So.Social | `orgs.soSocial.url` | partnership row + Calgary paragraph |
| Cursor Meetups YYC | `orgs.cursorMeetups.url` | partnership row + Calgary paragraph |

Each organisation is defined once in `site.orgs` and reused wherever it is
named, so one URL change updates every mention.

Supporters are pointed at `site.supportEmail` rather than a form.

Event facts (date, place, presenter) also live in `app/site.ts` — change them
there and they update the hero, the footer and the page metadata together.

## Develop

```sh
npm install
npm run dev      # http://localhost:3000
```

## Build

```sh
npm run build && npm run start
```

The page has no client-side state, so it prerenders fully static — it can be
deployed to Vercel as-is, or exported to plain files with
`output: "export"` in `next.config.ts` if you'd rather host it anywhere.

## Theme

| Token           | Value     | Used for                      |
| --------------- | --------- | ----------------------------- |
| `--canon-green` | `#37442E` | page base behind the gradient |
| `--canon-cream` | `#FEFCF0` | letterforms, primary button   |
| `--canon-gold`  | `#C8B13C` | star, focus ring              |

## Assets

The logo is assembled from the three face SVGs at the exact inset percentages
used in the Figma frame, so the cube stays locked together at any size.

`background.png` is the 3.6 MB Figma export and stays as the fallback;
`background.webp` (345 KB) is what browsers actually load, via `<picture>`.
Same for `star.png` / `star.webp`. `social-card.jpg` and `icon-180.png` are
resized from the composed Figma export of node 379:19.

These use plain `<img>` rather than `next/image` on purpose: the letter SVGs
are `preserveAspectRatio="none"` and need non-uniform stretching, and the star
needs an off-centre crop — both of which `next/image`'s intrinsic sizing works
against. The files are already optimised and served straight from `public/`.
# canoneventlanding
