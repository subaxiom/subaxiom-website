import React from "react";
//import { Routes, Route } from "react-router-dom";
import "./styles.css";
import { NavBar } from "./NavBar";
import { Gallery } from "./Gallery";
//import { Example } from "./Example";
//import { ImagePreview } from "./Image";
import { Social } from "./Social";
import logoUrl from "./img/subAxiomBannerBigv15.jpg";
import { useNavigate } from "react-router-dom";
//import { useParams } from "react-router-dom";

export default function App(props) {
  //let params = useParams();
  let navigate = useNavigate();
  //let imageId = params.imageId;
  //alert(imageId);

  return (
    <div className="App">
      <NavBar cartMap={props.cartMap} />
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
      <div>
        <Gallery />
      </div>
      <Social />
    </div>
  );
}
