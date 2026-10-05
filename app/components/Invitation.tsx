import { site } from "../site";
import styles from "./Invitation.module.css";

/* Copy from the landing-page comp (Figma 278:2, "02 — an invitation"). */

export default function Invitation() {
  return (
    <section className={styles.section} id="invitation">
      <div className={styles.inner}>
        <p className={styles.lead}>You are invited to</p>

        <h2 className={styles.statement}>
          the greatest gathering of builders on earth.
        </h2>

        <div className={styles.prose}>
          <p>
            Nobody wakes up one day and decides to be a founder. Somewhere in
            that story is a night that made it feel possible.
          </p>
          <p>
            Canada&rsquo;s builders are real, but their stories are invisible.
            The demos happen in rooms of forty, on Friday nights, in scattered
            cities — and then they disappear. The work is good. Almost nobody
            outside the room ever sees it.
          </p>
          <p>
            The Canon Event is the first time a year of that work gets projected
            in one place, with the people who made it standing next to it.
          </p>
        </div>

        <p className={`note ${styles.signoff}`}>
          —{" "}
          <a
            className={styles.signoffLink}
            href={site.orgs.archiveFund.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            the archive fund
          </a>
          , calgary
        </p>
      </div>
    </section>
  );
}
