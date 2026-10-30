"use client";

import { site } from "../site";
import styles from "./Hero.module.css";

/*
 * Static banner on the cream page. RSVP links out to the event's wygo page.
 * The wordmark glitches in once on load — two offset colour copies (gold +
 * sage, so it stays in palette) slice across it, then everything settles
 * clean. The headline and supporting copy fade up on a stagger behind it.
 */
export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.bloom} aria-hidden="true" />

      <Star className={styles.starA} />
      <Star className={styles.starB} />
      <Star className={styles.starC} />

      <div className={`${styles.mark} ${styles.rise} ${styles.d1}`} role="img" aria-label={site.name}>
        <div className={`${styles.face} ${styles.faceTop}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/top-face-letters-ink.svg" alt="" />
        </div>
        <div className={`${styles.face} ${styles.faceRight}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/right-face-letters-ink.svg" alt="" />
        </div>
        <div className={`${styles.face} ${styles.faceLeft}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/left-face-the-ink.svg" alt="" />
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
        <a
          className={styles.venue}
          href={site.venue.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {site.venue.name}
        </a>
        <span className={styles.dot} aria-hidden="true">·</span>
        <span>{site.venue.area}</span>
      </p>

      <h2 className={`${styles.headline} ${styles.rise} ${styles.d2}`}>
        A day for the people making things happen in Calgary.
      </h2>

      <p className={`${styles.lede} ${styles.rise} ${styles.d3}`}>
        Meet Calgary&rsquo;s community of creatives, entrepreneurs, founders,
        and builders.
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
          Submit a film
        </a>
      </div>

      <div className={`${styles.cue} ${styles.rise} ${styles.d5}`} aria-hidden="true">
        <span className={styles.cueLine} />
        Come see what&rsquo;s being made
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
