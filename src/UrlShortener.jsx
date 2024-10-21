import React, { useState } from "react";
import axios from "axios";

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
    <div>
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          placeholder="Enter a URL to shorten"
          required
        />
        <button type="submit">Shorten</button>
      </form>
      {shortUrl && (
        <div>
          <p>
            Shortened URL: <a href={shortUrl}>{shortUrl}</a>
          </p>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default UrlShortener;
