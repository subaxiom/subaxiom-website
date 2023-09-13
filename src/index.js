import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { siteIconData } from "./siteIconData";
import Home from "./Home";

import SearchResults from "./SearchResults";

import { Footer } from "./Footer";

let domain = window.location.hostname.replace("www.", "").toLowerCase();
const testMode = !(domain === "subaxiom.com");

if (testMode) {
  // do this if in test mode
} else {
  // do this if in prod
}

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="search" element={<SearchResults />} />

      <Route
        path="search/:domain/:searchquery"
        element={<SearchResults siteIconData={siteIconData} />}
      />
    </Routes>
    <Footer />
  </BrowserRouter>,

  document.getElementById("root")
);
