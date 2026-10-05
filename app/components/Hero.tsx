"use client";

import { site } from "../site";
import styles from "./Hero.module.css";

/*
 * Static banner. RSVP links out to the event's wygo page. The wordmark glitches in once on load — two offset colour
 * copies (gold + teal, so it stays in palette) slice across it, a scanline
 * passes, then everything settles clean and stays there. Supporting copy
 * fades up on a stagger behind it.
 */
export default function Hero() {
  return (
    <header className={styles.hero}>
      <picture className={styles.frame} aria-hidden="true">
        <source srcSet="/assets/background.webp" type="image/webp" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/background.png" alt="" decoding="async" fetchPriority="high" />
      </picture>
      <div className={styles.vignette} aria-hidden="true" />
      <div className={styles.bloom} aria-hidden="true" />
      <div className={styles.texture} aria-hidden="true" />
      <div className={styles.hem} aria-hidden="true" />

      <Star className={styles.starA} />
      <Star className={styles.starB} />
      <Star className={styles.starC} />

      <div className={`${styles.mark} ${styles.rise} ${styles.d1}`} role="img" aria-label={site.name}>
        <div className={`${styles.face} ${styles.faceTop}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/top-face-letters.svg" alt="" />
        </div>
        <div className={`${styles.face} ${styles.faceRight}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/right-face-letters.svg" alt="" />
        </div>
        <div className={`${styles.face} ${styles.faceLeft}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/left-face-the.svg" alt="" />
        </div>
      </div>

      <p className={`eyebrow ${styles.eyebrow} ${styles.rise} ${styles.d1}`}>
        {site.presenter} presents
      </p>

      <div className={styles.wordmarkWrap}>
        {/* data-text feeds the two offset copies in CSS */}
        <h1 className={styles.wordmark} data-text={site.name}>
          {site.name}
        </h1>
        <span className={styles.scan} aria-hidden="true" />
      </div>

      <p className={`${styles.meta} ${styles.rise} ${styles.d2}`}>
        <span>{site.date}</span>
        <span className={styles.dot} aria-hidden="true">·</span>
        <span>{site.place}</span>
      </p>

      <p className={`note ${styles.aside} ${styles.rise} ${styles.d3}`}>
        something wild has been brewing in Calgary&hellip;
      </p>

      <div className={`${styles.actions} ${styles.rise} ${styles.d4}`}>
        <a
          className={`${styles.btn} ${styles.primary}`}
          href={site.eventSiteUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          RSVP
        </a>
        <a
          className={`${styles.btn} ${styles.ghost}`}
          href={site.stageFormUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Be on stage
        </a>
      </div>

      <div className={`${styles.cue} ${styles.rise} ${styles.d5}`} aria-hidden="true">
        <span className={styles.cueLine} />
        Scroll into the light
      </div>
    </header>
  );
}

function Star({ className }: { className: string }) {
  return (
    <div className={`${styles.star} ${className}`} aria-hidden="true">
      <picture>
        <source srcSet="/assets/star.webp" type="image/webp" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/star.png" alt="" decoding="async" />
      </picture>
    </div>
  );
}
