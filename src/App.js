import React from "react";
import "./styles.css";
import { ProductGrid } from "./ProductGrid";
import logoUrl from "./img/subAxiomBannerBigv11.jpg";
import twitter from "./img/twitter.png";
import gab from "./img/gab.png";
import rumble from "./img/rumble1.png";
import substack from "./img/substack3.png";

export default function App() {
  return (
    <div className="App">
      <div className="logoImgWrapper">
        <img src={logoUrl} alt="subaxiom logo" className="logoImg" />
      </div>
      <div className="social-wrapper">
        <img src={twitter} alt="twitter" className="social" />
        <img src={gab} alt="gab" className="social" />
        <img src={rumble} alt="rumble" className="social" />
        <img src={substack} alt="substack" className="social" />
      </div>

      <div>
        <ProductGrid />
      </div>
    </div>
  );
}
