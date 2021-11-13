import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles.css";
import { Gallery } from "./Gallery";
import { ImagePreview } from "./Image";
import { Social } from "./Social";
import logoUrl from "./img/subAxiomBannerBigv13.jpg";
import { useNavigate } from "react-router-dom";

export default function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <div className="logoImgWrapper">
        <img
          src={logoUrl}
          alt="subaxiom logo"
          className="logoImg"
          onClick={async (event) => {
            navigate(`/`);
          }}
        />
      </div>
      <Social />

      <div>
        <Routes>
          <Route path="image/:imageId" element={<ImagePreview />} />
        </Routes>
        <Gallery />
      </div>

      <Social />
    </div>
  );
}
