import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UrlShortener from "./UrlShortener";
import Redirector from "./Redirector";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<UrlShortener />} />
        <Route path="/:shortId" element={<Redirector />} />
      </Routes>
    </Router>
  );
}

export default App;
