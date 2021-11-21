import React from "react";
//import { Routes, Route } from "react-router-dom";
import "./styles.css";
import { NavBar } from "./NavBar";
import { Gallery } from "./Gallery";
import { Filter } from "./Filter";
import { Social } from "./Social";
import logoUrl from "./img/subAxiomBannerBigv15.jpg";
import { useNavigate } from "react-router-dom";
//import { useParams } from "react-router-dom";

export default function App(props) {
  //let params = useParams();
  let navigate = useNavigate();
  let filter = props.filter;
  let filterClicked = props.filterClicked;

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
        <Filter filter={filter} filterClicked={filterClicked} />
        <Gallery />
      </div>
      <Social />
    </div>
  );
}
