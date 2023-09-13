import React, { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { NavBar } from "./NavBar";

import { SearchResultsList } from "./SearchResultsList";
import "./styles.css";

const SearchResultsComponent = (props) => {
  let params = useParams();
  let urlDomain = params.domain;
  let urlSearchQuery = params.searchquery;
  //let galleryMap = props.galleryMap;

  const [searchResultsState, setSearchResultsState] = useState({
    searchResults: "not yet"
  });

  useEffect(() => {
    async function connectToApiForSearchResults(queryEncodedForFetch) {
      //const response = await fetch("https://api.github.com/users/hadley/orgs");
      const response = await fetch(
        "https://api.subaxiom.com/?query=" + queryEncodedForFetch
      );
      //searchResults.current = await response.text();
      let apiResponse = await response.json();
      let searchResultsString = JSON.stringify(apiResponse.search_results);
      setSearchResultsState({ searchResults: searchResultsString });
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

  return (
    <div>
      <NavBar cartMap={null} />
      <br />
      <br />

      <div className="leftOuterContainer">
        <SearchResultsList
          searchResultsJsonString={searchResultsState.searchResults}
          siteIconData={props.siteIconData}
        />
      </div>
    </div>
  );
};

export const Search = (props) => {
  return (
    <div>
      <SearchResultsComponent siteIconData={props.siteIconData} />
    </div>
  );
};

export default SearchResultsComponent;
