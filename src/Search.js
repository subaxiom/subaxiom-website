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

  const [searchQueryState, setSearchQueryState] = useState({
    searchQuery: urlSearchQuery
  });

  const [searchResultsState, setSearchResultsState] = useState({
    searchResults: "no search results yet"
  });

  useEffect(() => {
    async function connectToApiForSearchResults(queryEncodedForFetch) {
      //const response = await fetch("https://api.github.com/users/hadley/orgs");
      const response = await fetch(
        "https://api.subaxiom.com/?query=" + queryEncodedForFetch
      );
      //searchResults.current = await response.text();
      let searchResultsResponse = await response.text();
      setSearchResultsState({ searchResults: searchResultsResponse });
      //alert(String(searchResults.current));
    }

    // put stuff here that should only be done once
    if (urlDomain === "all") {
      let queryEncodedForFetch = encodeURIComponent(urlSearchQuery);
      //alert(queryEncodedForFetch);
      //alert("get search results for = " + queryEncodedForFetch);
      connectToApiForSearchResults(queryEncodedForFetch);
    }
  }, [urlDomain, urlSearchQuery]);

  let searchClicked = function () {
    let searchQueryPlainText = searchQueryState.searchQuery;
    //alert(searchQueryPlainText);
    let searchQueryUriEncoded = encodeURIComponent(searchQueryPlainText);
    //alert(searchQueryUriEncoded);
    navigate(`/search/all/${searchQueryUriEncoded}`, { replace: true });
  };

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
      <br />
      <br />
      <br />
      <div className="searchResults">{searchResultsState.searchResults}</div>
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
