import { site } from "../site";
import styles from "./BackedBy.module.css";

/*
 * Backer marks from the landing-page comp (Figma 281:16, "backers").
 * Each sits in a 30px-tall box of its own width. Two of them are cropped
 * in the comp rather than fitted — their source art has a lot of padding,
 * so fitting them whole renders the mark far smaller than the others.
 */
type Backer = {
  src: string;
  name: string;
  /** Box width at the comp's 30px row height. */
  w: number;
  /** Crop, as in the comp: inset percentages applied to the image. */
  crop?: { top: string; left: string; width: string; height: string };
  fit?: "contain" | "cover";
};

const backers: Backer[] = [
  { src: "/assets/backers/shopify.webp", name: "Shopify", w: 111, fit: "contain" },
  { src: "/assets/backers/cursor.webp", name: "Cursor", w: 123, fit: "cover" },
  { src: "/assets/backers/localhost-hq.webp", name: "localhost HQ", w: 143, fit: "contain" },
  {
    src: "/assets/backers/sip-and-scale.webp",
    name: "Sip & Scale",
    w: 54,
    crop: { top: "-46.4%", left: "-10.71%", width: "110.71%", height: "198.96%" },
  },
  {
    src: "/assets/backers/ucalgary.webp",
    name: "University of Calgary",
    w: 99,
    crop: { top: "-60.53%", left: "-0.07%", width: "100.13%", height: "214.14%" },
  },
  { src: "/assets/backers/aftersell.webp", name: "AfterSell", w: 107, fit: "contain" },
];

const { soSocial, ascend, cursorMeetups } = site.orgs;
const partners = [soSocial, ascend, cursorMeetups];

export default function BackedBy() {
  return (
    <div className={styles.wrap}>
      <div className={styles.band}>
        <div className={styles.row}>
          <p className={styles.label}>In partnership with</p>
          <p className={styles.partners}>
            {partners.map((o, i) => (
              <span key={o.name}>
                {i > 0 && (
                  <span className={styles.sep} aria-hidden="true">
                    ·
                  </span>
                )}
                <a
                  className={styles.partnerLink}
                  href={o.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {o.name}
                </a>
              </span>
            ))}
          </p>
        </div>

      <div className={styles.inner}>
        <p className={styles.label}>Previously backed by</p>

        <div className={styles.logos}>
          {backers.map((b) => (
            <div
              key={b.name}
              className={styles.slot}
              style={{ width: `${b.w}px` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={b.crop ? styles.cropped : styles.fitted}
                style={b.crop ? b.crop : { objectFit: b.fit }}
                src={b.src}
                alt={b.name}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
