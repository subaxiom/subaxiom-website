import React from "react";
//import { Routes, Route } from "react-router-dom";
import "./styles.css";
import { NavBar } from "./NavBar";
import { Gallery } from "./Gallery";
import { Filter } from "./Filter";
import { Social } from "./Social";

//import { useParams } from "react-router-dom";

export default function App(props) {
  //let params = useParams();
  let filter = props.filter;
  let filterClicked = props.filterClicked;
  let galleryData = props.galleryData;

  return (
    <div className="App">
      <NavBar cartMap={props.cartMap} />

      <div className="filterSpace"></div>
      <div>
        <Filter filter={filter} filterClicked={filterClicked} />
        <Gallery galleryData={galleryData} />
      </div>
      <Social />
    </div>
  );
}
