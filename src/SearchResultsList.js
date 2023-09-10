import React from "react";
import { ResultItem } from "./ResultItem";
import "./styles.css";
import loadingGif from "./img/loading.gif";

const SearchResultsListComponent = (props) => {
  let searchResultsJsonString = props.searchResultsJsonString;

  if (searchResultsJsonString === "not yet") {
    return <div></div>;
  }

  let searchResultsJson = JSON.parse(searchResultsJsonString);
  //alert(JSON.stringify(searchResultsJson[0]));
  //alert(JSON.stringify(searchResultsJson.length));

  let i = 0;
  let resultItems = [];
  while (typeof searchResultsJson[i] !== "undefined") {
    resultItems.push(
      <ResultItem resultItemJsonString={JSON.stringify(searchResultsJson[i])} />
    );

    i++;
  }

  return <div className="searchResults">{resultItems}</div>;
};

export const SearchResultsList = (props) => {
  return (
    <SearchResultsListComponent
      searchResultsJsonString={props.searchResultsJsonString}
    />
  );
};

export default SearchResultsList;
