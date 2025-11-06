"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftSection}>
        <span>© 2025 DoppelGanger, Inc.</span>
        <span>Terms</span>
        <span>Sitemap</span>
        <span>Privacy</span>
        <span>Your Privacy Choices</span>
        <span>Destinations</span>
      </div>

      <div className={styles.rightSection}>
        <span>KOREA (KR)</span>
        <span>Rp IDR</span>
        <span>Support & resources</span>
      </div>
    </footer>
  );
}
