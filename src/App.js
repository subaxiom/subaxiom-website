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
  let filterOrTagClicked = props.filterOrTagClicked;
  let galleryData = props.galleryData;
  let scrollToTop = props.scrollToTop;

  return (
    <div className="App">
      <NavBar cartMap={props.cartMap} />

      <div className="filterSpace"></div>
      <div>
        <Filter filter={filter} filterOrTagClicked={filterOrTagClicked} />
        <Gallery galleryData={galleryData} scrollToTop={scrollToTop} />
      </div>
      <Social />
    </div>
  );
}
