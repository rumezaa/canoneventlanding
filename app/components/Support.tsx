import { site } from "../site";
import styles from "./Support.module.css";

export default function Support() {
  return (
    <section className={styles.section} id="support">
      <div className={styles.rule} aria-hidden="true" />

      <h2 className={styles.ask}>Want to support?</h2>

      <a className={styles.mail} href={`mailto:${site.supportEmail}`}>
        {site.supportEmail}
      </a>

      <p className={`note ${styles.aside}`}>
        we read every one&hellip;
      </p>
    </section>
  );
}
