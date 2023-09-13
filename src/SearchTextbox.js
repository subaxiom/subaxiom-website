import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const SearchTextboxComponent = (props) => {
  let navigate = useNavigate();
  let params = useParams();
  let urlSearchQuery = params.searchquery;

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

  return (
    <div className="searchResultsContainerContainer">
      <input
        type="text"
        defaultValue={searchQueryState.searchQuery}
        onChange={(e) => setSearchQueryState({ searchQuery: e.target.value })}
        className="searchTextbox"
      />

      <div className="greenButton" onClick={(e) => searchClicked()} />
    </div>
  );
};

export const SearchTextbox = (props) => {
  return (
    <div>
      <SearchTextboxComponent />
    </div>
  );
};

export default SearchTextboxComponent;
