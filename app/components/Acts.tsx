import styles from "./Acts.module.css";

/*
 * Copy and layout from the landing-page comp (Figma 279:2, "03 — the night").
 * The comp also carries an "audience: …" line per act, but those labels do not
 * line up with the blurbs beside them (Act I is tagged "founders 3+ years out"
 * next to copy about the widest point of the funnel). Left out pending a
 * decision rather than shipping a likely mix-up.
 */

const acts = [
  {
    numeral: "I",
    act: "ACT I",
    kicker: "Doors open to the city",
    title: "The Gathering",
    still: "/assets/stills/gathering.webp",
    alt: "A crowded demo floor, builders showing their work to walk-ins.",
    blurb:
      "Builders and early-stage startups demo what they actually made this year, in person, to anyone who walks in. The widest point of the funnel — and the first touch for people who didn't know Calgary had a scene.",
  },
  {
    numeral: "II",
    act: "ACT II",
    kicker: "Red carpet, ten films",
    title: "The Screening",
    still: "/assets/stills/screening.webp",
    alt: "A packed screening-room audience watching the films.",
    blurb:
      "Ten short films on people who built something real this year. Not launch videos. Covered live by 100+ creators, with the winners funded to keep telling the story online.",
  },
  {
    numeral: "III",
    act: "ACT III",
    kicker: "Invite only",
    title: "The Dinner",
    still: "/assets/stills/dinner.webp",
    alt: "An overhead shot of a long dinner table mid-service.",
    blurb:
      "We sit builders next to the person who can fund their next thing. Our team came out of Cursor (acq. SpaceX AI), Shopify, Y Combinator, ZayZoon and Cansbridge — that's who we pull from.",
  },
];

export default function Acts() {
  return (
    <section className={styles.section} id="the-night">
      <header className={styles.head}>
        <div>
          <h2 className={styles.title}>Three acts, one night.</h2>
          <p className={styles.standfirst}>
            Doors open to the whole city, then narrow through the evening —
            from a floor anyone can walk into, to ten films on a screen, to a
            table of thirty.
          </p>
        </div>
        <p className={styles.when}>
          NOV 2026 &nbsp;·&nbsp; CALGARY, AB
        </p>
      </header>

      <div className={styles.acts}>
        {acts.map((a) => (
          <div className={styles.col} key={a.act}>
            <span className={styles.numeral} aria-hidden="true">
              {a.numeral}
            </span>

            <article className={styles.card}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={styles.still} src={a.still} alt={a.alt} loading="lazy" decoding="async" />

              <div className={styles.copy}>
                <div className={styles.slate}>
                  <span className={styles.act}>{a.act}</span>
                  <span className={styles.kicker}>{a.kicker.toUpperCase()}</span>
                </div>
                <h3 className={styles.actTitle}>{a.title}</h3>
                <p className={styles.blurb}>{a.blurb}</p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
