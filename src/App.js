import React from "react";
//import { Routes, Route } from "react-router-dom";
import "./styles.css";
import { NavBar } from "./NavBar";
import { Gallery } from "./Gallery";
import { Filter } from "./Filter";

export default function App(props) {
  //let params = useParams();
  let filter = props.filter;
  let filterOrTagClicked = props.filterOrTagClicked;
  let galleryData = props.galleryData;
  let scrollToVertical = props.scrollToVertical;

  return (
    <div className="App">
      <NavBar cartMap={props.cartMap} />

      <div className="filterSpace"></div>
      <div>
        <Filter filter={filter} filterOrTagClicked={filterOrTagClicked} />
        <div className="page-wrapper">
          <Gallery
            galleryData={galleryData}
            scrollToVertical={scrollToVertical}
          />
        </div>
      </div>
    </div>
  );
}
