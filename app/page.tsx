import Hero from "./components/Hero";
import Invitation from "./components/Invitation";
import Acts from "./components/Acts";
import Gallery from "./components/Gallery";
import BackedBy from "./components/BackedBy";
import Support from "./components/Support";
import { site } from "./site";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className="paper" aria-hidden="true" />

      <div className={styles.page}>
        <Hero />

        <Invitation />

        <Acts />

        <Gallery />

        <BackedBy />

        <Support />

        <footer className={styles.footer}>
          <span>&copy; 2026 {site.presenter}</span>
          <span>
            {site.dateShort} &middot; {site.place}
          </span>
        </footer>
      </div>
    </>
  );
}
