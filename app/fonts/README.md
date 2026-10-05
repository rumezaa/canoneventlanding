# Local fonts

Drop a font file here and it gets self-hosted by `next/font/local` — no
external request, no layout shift.

Expected for the wordmark:

    app/fonts/cs-origine.woff2     (preferred)
    app/fonts/cs-origine.otf       (also fine; .ttf works too)

Then in `app/fonts.ts`, swap the `display` export from `next/font/google`
to `next/font/local`:

```ts
import localFont from "next/font/local";

export const display = localFont({
  src: "./fonts/cs-origine.woff2",
  variable: "--font-display",
  display: "swap",
});
```

Nothing else changes — every heading already reads `var(--font-display)`.

## Licensing

Fonts labelled "Demo", "Trial" or "Personal Use" are generally NOT licensed
for `@font-face` embedding on a public site. Publishing one means shipping
the font file to every visitor, which is the thing those licences exclude.
Check the licence that came with the file before this goes live; a web
licence for the full family is the usual fix.
