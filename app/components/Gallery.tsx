import styles from "./Gallery.module.css";

/* Stills and captions from the landing-page comp (Figma 280:10, "contact sheet"). */
const prints = [
  { src: "/assets/stills/still-crowd-screen.webp",  caption: "The Rodeo",           alt: "A full room photographed in front of the stage screen." },
  { src: "/assets/stills/still-group-outside.webp", caption: "Ascend Calgary",      alt: "A group portrait outdoors after the event." },
  { src: "/assets/stills/still-overhead.webp",      caption: "Cursor Hackathon",    alt: "An overhead shot of a packed demo floor." },
  { src: "/assets/stills/still-archive-venue.webp", caption: "The Archive",         alt: "A crowd gathered in the venue under red stage curtains." },
  { src: "/assets/stills/still-speaker.webp",       caption: "The Stage",           alt: "A speaker mid-talk under a single spotlight." },
  { src: "/assets/stills/still-flare.webp",         caption: "The Spotlight",       alt: "A figure on stage under a wide starburst of light." },
  { src: "/assets/stills/still-builders.webp",      caption: "Some of our builders",alt: "Two builders working on laptops during a session." },
];

export default function Gallery() {
  return (
    <section className={styles.section} id="community">
      <header className={styles.head}>
        <p className="eyebrow">More than an event</p>
        <h2 className={styles.title}>A community.</h2>

        <div className={styles.prose}>
          <p>
            Whether you&rsquo;re building a business, creating something new,
            launching a startup, telling stories, or simply curious about what
            people around you are making, there&rsquo;s a place for you here.
          </p>
          <p className={styles.close}>
            Come meet the people behind Calgary&rsquo;s next chapter.
          </p>
        </div>
      </header>

      <div className={styles.strip}>
        {prints.map((p) => (
          <figure className={styles.frame} key={p.src}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.print} src={p.src} alt={p.alt} loading="lazy" decoding="async" />
            <figcaption className={styles.caption}>{p.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
