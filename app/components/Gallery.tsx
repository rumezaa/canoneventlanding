import { site } from "../site";
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

const { archiveFund, ascend, soSocial, cursorMeetups } = site.orgs;

/** An organisation mentioned mid-sentence, linked out. */
function Org({ org }: { org: { name: string; url: string } }) {
  return (
    <a
      className={styles.orgLink}
      href={org.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {org.name}
    </a>
  );
}

export default function Gallery() {
  return (
    <section className={styles.section} id="the-room">
      <header className={styles.head}>
        <h2 className={styles.title}>
          The room you curate for someone creates builders.
        </h2>

        <div className={styles.prose}>
          <p>
            The city that built its name on energy is now the
            fastest-compounding startup room in the country — and almost nobody
            outside it has noticed.
          </p>
          <p>
            Our team built three audiences of creators, builders and makers
            entirely out of Calgary: <Org org={ascend} />,{" "}
            <Org org={archiveFund} />, <Org org={soSocial} /> and{" "}
            <Org org={cursorMeetups} />. Two thousand builders have come through
            them, on Friday nights, in rooms of forty, with no audience beyond
            the people who showed up.
          </p>
          <p>
            The Canon Event is what happens when that room finally gets a
            screen, a stage, and an audience the size of the thing it has
            quietly been building.
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
