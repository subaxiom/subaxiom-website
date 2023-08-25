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

  var searchResponse = "search results not found 3";
  //let searchUrl = "https://149.28.123.181:8000/?query=Mr.%20Miyagi%20and%20Daniel%20fight%20Sensei%20Kreese%20and%20Johnny%20in%20a%20karate%20tournament%0A";
  async function logMovies() {
    //const response = await fetch("https://api.github.com/users/hadley/orgs");
    const response = await fetch(
      "https://api.subaxiom.com/?query=Mr.%20Miyagi%20and%20Daniel%20fight%20Sensei%20Kreese%20and%20Johnny%20in%20a%20karate%20tournament%0A"
    );
    const movies = await response.text();
    alert(String(movies));
    searchResponse = String(movies);
  }
  logMovies();

  return (
    <div className="App">
      <NavBar cartMap={props.cartMap} />

      <div className="filterSpace"></div>
      <div>
        <Filter filter={filter} filterOrTagClicked={filterOrTagClicked} />
        <div className="page-wrapper">
          <Gallery
            searchResponse={searchResponse}
            galleryData={galleryData}
            scrollToVertical={scrollToVertical}
          />
        </div>
      </div>
    </div>
  );
}
