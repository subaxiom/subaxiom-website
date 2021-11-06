import React from "react";
import "./styles.css";
import { ProductGrid } from "./ProductGrid";
import { Social } from "./Social";
import logoUrl from "./img/subAxiomBannerBigv11.jpg";


export default function App() {
  return (
    <div className="App">
      <div className="logoImgWrapper">
        <img src={logoUrl} alt="subaxiom logo" className="logoImg" />
      </div>
        <Social />

      <div>
        <ProductGrid />
      </div>

        <Social />
    </div>
  );
}
