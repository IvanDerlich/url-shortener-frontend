import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UrlShortener from "./UrlShortener";
import Redirector from "./Redirector";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<UrlShortener />} />
          <Route path="/:shortId" element={<Redirector />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
