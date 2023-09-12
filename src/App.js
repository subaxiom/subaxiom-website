import React from "react";
//import { Routes, Route } from "react-router-dom";
import "./styles.css";
import { NavBar } from "./NavBar";
import { Search } from "./Search";
import { Filter } from "./Filter";

export default function App(props) {
  //let params = useParams();
  let filter = props.filter;
  let filterOrTagClicked = props.filterOrTagClicked;
  let scrollToVertical = props.scrollToVertical;

  return (
    <div className="App">
      <NavBar cartMap={props.cartMap} />

      <div className="filterSpace"></div>
      <div>
        <Filter filter={filter} filterOrTagClicked={filterOrTagClicked} />
        <div className="page-wrapper">
          <Search searchQuery={""} galleryData={props.galleryData} />
        </div>
      </div>
    </div>
  );
}
