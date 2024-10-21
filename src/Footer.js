import React from "react";
import styles from "./Footer.module.css"; // Import the CSS module

function UrlShortener() {
  return (
    <footer className={styles.footer}>
      <p className={styles.creditsText}>
        Developed by{" "}
        <a
          href="https://ivanderlich.com"
          target="_blank"
          className={styles.creditLink}
          rel="noreferrer"
        >
          Ivan Derlich
        </a>{" "}
        |
        <a
          href="https://github.com/ivanDerlich"
          target="_blank"
          className={styles.creditLink}
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}

export default UrlShortener;
