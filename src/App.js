import React from "react";
import "./styles.css";
import logoUrl from "./img/subaxiom-website-1000x225.png";
import twitter from "./img/twitter-100x100.png";
import parler from "./img/parler-100x100.png";
import minds from "./img/minds-100x100.png";
import medium from "./img/medium-100x100.png";
import publish0x from "./img/publish0x-100x100.png";
import youtube from "./img/youtube-100x100.png";

export default function App() {
  return (
    <div className="App">
      <img src={logoUrl} alt="subaxiom logo" className="logoImg" />
      <div className="social-wrapper">
        <img src={twitter} alt="twitter" className="social" />
        <img src={parler} alt="parler" className="social" />
        <img src={minds} alt="minds" className="social" />
        <img src={medium} alt="medium" className="social" />
        <img src={publish0x} alt="publish0x" className="social" />
        <img src={youtube} alt="youtuber4" className="social" />
      </div>
    </div>
  );
}
