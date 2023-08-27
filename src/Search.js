import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { NavBar } from "./NavBar";
import "./styles.css";

const SearchComponent = (props) => {
  let navigate = useNavigate();
  let params = useParams();
  let urlDomain = params.domain;
  let urlSearchQuery = params.searchquery;

  useEffect(() => {
    // put stuff here that should only be done once
    if (urlDomain === "all") {
      alert("get search results for = " + urlSearchQuery);
    }
  }, [urlDomain, urlSearchQuery]);

  const [searchQueryState, setSearchQueryState] = useState({
    searchQuery: urlSearchQuery
  });

  let searchClicked = function () {
    let searchQueryPlainText = searchQueryState.searchQuery;
    //alert(searchQueryPlainText);
    let searchQueryUriEncoded = encodeURIComponent(searchQueryPlainText);
    //alert(searchQueryUriEncoded);
    navigate(`/search/all/${searchQueryUriEncoded}`, { replace: true });
  };

  //let searchUrl = "https://149.28.123.181:8000/?query=Mr.%20Miyagi%20and%20Daniel%20fight%20Sensei%20Kreese%20and%20Johnny%20in%20a%20karate%20tournament%0A";
  async function logMovies() {
    //const response = await fetch("https://api.github.com/users/hadley/orgs");
    const response = await fetch(
      "https://api.subaxiom.com/?query=Mr.%20Miyagi%20and%20Daniel%20fight%20Sensei%20Kreese%20and%20Johnny%20in%20a%20karate%20tournament%0A"
    );
    const movies = await response.text();
    //alert(String(movies));
  }
  logMovies();

  return (
    <div>
      <NavBar cartMap={null} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>{searchQueryState.searchQuery}</div>

      <input
        type="text"
        defaultValue={searchQueryState.searchQuery}
        onChange={(e) => setSearchQueryState({ searchQuery: e.target.value })}
        className="largeInput"
      />

      <div className="greenButton" onClick={(e) => searchClicked()} />
    </div>
  );
};

export const Search = (props) => {
  return (
    <div>
      <SearchComponent />
    </div>
  );
};

export default SearchComponent;
