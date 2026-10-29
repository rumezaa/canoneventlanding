import { site } from "../site";
import styles from "./Acts.module.css";

/*
 * The three acts, as native <details> toggles so they open and close with
 * no client JS. Copy, times and venues from the website update brief, §3.
 * Act I starts open so the section never reads as an empty list.
 */

type Act = {
  numeral: string;
  act: string;
  title: string;
  time: string;
  still: string;
  alt: string;
  body: string[];
  /** The hall inside Werklund Centre, linked out when it has its own page. */
  venue?: { name: string; url: string };
  access?: string;
};

const acts: Act[] = [
  {
    numeral: "I",
    act: "ACT I",
    title: "The Gathering Market",
    time: "11:00 AM – 5:00 PM",
    still: "/assets/stills/gathering.webp",
    alt: "An overhead shot of a crowded courtyard around a DJ booth at night.",
    body: [
      "Explore a vibrant market bringing together local businesses, creatives, and builders, with music, unique finds, and new ideas around every corner.",
      "Meet the people behind the projects, discover local brands, and connect with a community of people building something of their own!",
    ],
    venue: {
      name: "Jack Singer Concert Hall Lobby",
      url: "https://werklundcentre.ca/visit/venues/jack-singer-concert-hall",
    },
  },
  {
    numeral: "II",
    act: "ACT II",
    title: "The Film Festival",
    time: "6:15 PM – 9:00 PM",
    still: "/assets/stills/screening.webp",
    alt: "A full theatre facing a screen showing The Canon Event title card.",
    body: [
      "Ten short films sharing the stories behind Calgary’s creatives and builders. Why they started, what they’re passionate about, and the journey of turning an idea into something of their own.",
      "A chance to hear their stories, get inspired, and see what happens when people decide to go for it.",
    ],
    venue: {
      name: "Engineered Air Theatre",
      url: "https://werklundcentre.ca/visit/venues/engineered-air-theatre",
    },
  },
  {
    numeral: "III",
    act: "ACT III",
    title: "The Dinner",
    time: "4:00 PM – 5:30 PM",
    still: "/assets/stills/dinner.webp",
    alt: "A long candlelit dinner table seen from above, guests mid-conversation.",
    body: [
      "An intimate, private dinner bringing together a curated group of founders, investors, and entrepreneurs.",
      "A space for meaningful conversations, exchanging ideas, and connecting with people who are building, investing in, and shaping what’s next.",
    ],
    access: "Private, invite-only dinner",
  },
];

export default function Acts() {
  const { venue } = site;

  return (
    <section className={styles.section} id="the-event">
      <header className={styles.head}>
        <div>
          <p className="eyebrow">The event</p>
          <h2 className={styles.title}>Three acts, one day.</h2>
        </div>
        <p className={styles.where}>
          {site.dateShort}
          <span className={styles.dot} aria-hidden="true"> · </span>
          <a href={venue.url} target="_blank" rel="noopener noreferrer">
            {venue.name}
          </a>
          <span className={styles.dot} aria-hidden="true"> · </span>
          {venue.area}
        </p>
      </header>

      <div className={styles.acts}>
        {acts.map((a, i) => (
          <details className={styles.item} key={a.act} open={i === 0}>
            <summary className={styles.summary}>
              <span className={styles.numeral} aria-hidden="true">
                {a.numeral}
              </span>
              <span className={styles.heading}>
                <span className={styles.act}>{a.act}</span>
                <span className={styles.actTitle}>{a.title}</span>
              </span>
              <span className={styles.time}>{a.time}</span>
              <span className={styles.toggle} aria-hidden="true" />
            </summary>

            <div className={styles.panel}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={styles.still} src={a.still} alt={a.alt} loading="lazy" decoding="async" />

              <div className={styles.copy}>
                {a.body.map((p) => (
                  <p className={styles.blurb} key={p}>
                    {p}
                  </p>
                ))}

                <dl className={styles.facts}>
                  <div>
                    <dt>Time</dt>
                    <dd>{a.time}</dd>
                  </div>
                  {a.venue && (
                    <div>
                      <dt>Venue</dt>
                      <dd>
                        <a href={a.venue.url} target="_blank" rel="noopener noreferrer">
                          {a.venue.name} ↗
                        </a>
                      </dd>
                    </div>
                  )}
                  <div>
                    <dt>Location</dt>
                    <dd>
                      {venue.name}, {venue.area.replace(", AB", "")}
                    </dd>
                  </div>
                  {a.access && (
                    <div>
                      <dt>Access</dt>
                      <dd>{a.access}</dd>
                    </div>
                  )}
                </dl>
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
