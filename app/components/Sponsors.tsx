import styles from "./Sponsors.module.css";

/*
 * Sponsor recognition: one quiet, static row. Every mark is drawn as a
 * CSS mask filled with the page's green, so four different brand palettes
 * read as one set. `w` is each mark's width at the row's height, from the
 * trimmed files' aspect ratios; `scale` evens out optical weight.
 */
type Sponsor = { name: string; logo: string; ratio: number; scale?: number; url?: string };

const sponsors: Sponsor[] = [
  { name: "Ambition", logo: "/assets/sponsors/ambition.webp", ratio: 1718 / 240, scale: 0.9 },
  { name: "Wygo", logo: "/assets/sponsors/wygo.webp", ratio: 445 / 138, url: "https://wygo.world" },
  {
    name: "Hunter Hub for Entrepreneurial Thinking, University of Calgary",
    logo: "/assets/sponsors/hunter-hub.webp",
    ratio: 772 / 240,
    scale: 1.1,
    url: "https://www.ucalgary.ca/hunter-hub",
  },
  { name: "Aurrin Ventures", logo: "/assets/sponsors/aurrin-ventures.webp", ratio: 310 / 261, scale: 1.7 },
];

export default function Sponsors() {
  return (
    <section className={styles.section} id="sponsors">
      <h2 className={styles.title}>Our sponsors for the event</h2>

      <ul className={styles.row}>
        {sponsors.map((s) => {
          const h = `calc(var(--logo-h) * ${s.scale ?? 1})`;
          const mark = (
            <span
              className={styles.mark}
              role="img"
              aria-label={s.name}
              style={{
                height: h,
                width: `calc(${h} * ${s.ratio})`,
                maskImage: `url(${s.logo})`,
                WebkitMaskImage: `url(${s.logo})`,
              }}
            />
          );
          return (
            <li key={s.name}>
              {s.url ? (
                <a className={styles.link} href={s.url} target="_blank" rel="noopener noreferrer">
                  {mark}
                </a>
              ) : (
                mark
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
