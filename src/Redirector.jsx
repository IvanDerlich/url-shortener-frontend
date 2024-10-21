import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./Redirector.module.css";

function Redirector() {
  const { shortId } = useParams();
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOriginalUrl = async () => {
      try {
        const response = await axios.get(
          `https://link-shortened-be-a8615336383d.herokuapp.com/${shortId}`
        );
        let originalUrl = response.data.originalUrl;

        // Check if the URL includes 'http://' or 'https://'
        if (!/^https?:\/\//i.test(originalUrl)) {
          originalUrl = "http://" + originalUrl; // Add 'http://' if no protocol exists
        }

        window.location.href = originalUrl;
      } catch (err) {
        setError("Short URL not found.");
      }
    };
    fetchOriginalUrl();
  }, [shortId]);

  return (
    <div className={styles.redirectorContainer}>
      {error ? (
        <h2 className={styles.errorText}>{error}</h2>
      ) : (
        <h2 className={styles.redirectingText}>Redirecting...</h2>
      )}
    </div>
  );
}

export default Redirector;
