import styles from "./Invitation.module.css";

/* Event introduction — copy from the website update brief, §1–2. */

export default function Invitation() {
  return (
    <section className={styles.section} id="invitation">
      <div className={styles.inner}>
        <p className={styles.lead}>You are invited to</p>

        <h2 className={styles.statement}>
          a night for the people building things in this city, and across the
          country.
        </h2>

        <div className={styles.prose}>
          <p>
            Come for the market, the films, and the people. Stay for the
            conversations, the inspiration, and the connections you didn&rsquo;t
            know you needed.
          </p>
          <p>
            From emerging brands and independent creatives to ambitious startups
            and new businesses, The Canon Event brings together the people
            turning ideas into something real.
          </p>
          <p>
            A space to discover what&rsquo;s being built, celebrate local talent,
            exchange ideas, and connect with people from across Calgary&rsquo;s
            creative and entrepreneurial scene.
          </p>
        </div>

        <p className={styles.tagline}>
          Different industries. Different perspectives. One room.
        </p>

        <p className={`note ${styles.signoff}`}>
          you never know who you&rsquo;ll meet, or what it might inspire you to
          build next&hellip;
        </p>
      </div>
    </section>
  );
}
