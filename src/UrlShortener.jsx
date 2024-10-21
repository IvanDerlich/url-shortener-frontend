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

// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     height: "100vh",
//     backgroundColor: "#f8f9fa",
//     fontFamily: "Arial, sans-serif",
//   },
//   heading: {
//     color: "#343a40",
//     marginBottom: "20px",
//     fontSize: "32px",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   input: {
//     width: "300px",
//     padding: "10px",
//     fontSize: "16px",
//     marginBottom: "10px",
//     borderRadius: "5px",
//     border: "1px solid #ced4da",
//     outline: "none",
//   },
//   button: {
//     padding: "10px 20px",
//     fontSize: "16px",
//     backgroundColor: "#007bff",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     transition: "background-color 0.3s",
//   },
//   buttonHover: {
//     backgroundColor: "#0056b3",
//   },
//   shortUrlContainer: {
//     marginTop: "20px",
//   },
//   shortUrl: {
//     color: "#007bff",
//     textDecoration: "none",
//   },
//   error: {
//     color: "red",
//     marginTop: "10px",
//   },
// };

export default UrlShortener;
