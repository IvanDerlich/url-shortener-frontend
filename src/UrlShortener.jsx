import React, { useState } from "react";
import axios from "axios";
import styles from "./UrlShortener.module.css"; // Import the CSS module

function UrlShortener() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://link-shortened-be-a8615336383d.herokuapp.com/",
        {
          originalUrl,
        }
      );
      setShortUrl(response.data.shortUrl);
      setError("");
    } catch (err) {
      setError("Failed to shorten the URL");
      setShortUrl("");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>URL Shortener</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          placeholder="Enter a URL to shorten"
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Shorten
        </button>
      </form>
      {shortUrl && (
        <div className={styles.shortUrlContainer}>
          <p>
            Shortened URL:{" "}
            <a href={shortUrl} className={styles.shortUrl}>
              {shortUrl}
            </a>
          </p>
        </div>
      )}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default UrlShortener;
