import { Instrument_Serif, IBM_Plex_Mono, Caveat } from "next/font/google";
import localFont from "next/font/local";

/**
 * The wordmark face — CS Origine Pixel (Craft Supply Co.).
 * Applied to the <h1> only: it is a display/bitmap face, so it stays off
 * body headings where it would cost readability.
 *
 * NOTE: this is the **Demo** build. Demo/trial licences generally do not
 * permit @font-face embedding on a public site — see app/fonts/README.md.
 */
export const wordmark = localFont({
  src: "./fonts/cs-origine-pixel.otf",
  variable: "--font-wordmark",
  display: "swap",
});

/** Display wordmark and headings — the face the comp itself specifies. */
export const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

/** Eyebrows, dates, labels — letterspaced mono caps. */
export const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

/** Margin notes and annotations — the whimsy. */
export const hand = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});
