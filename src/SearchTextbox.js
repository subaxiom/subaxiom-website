import React, { useState, useCallback } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchTextboxComponent = (props) => {
  let navigate = useNavigate();
  let params = useParams();
  let urlSearchQuery = params.searchquery;

  const [searchQueryState, setSearchQueryState] = useState({
    searchQuery: urlSearchQuery
  });

  const autoFocusFn = useCallback(
    (element) => (element ? element.focus() : null),
    []
  );

  const handleKeyPress = (event) => {
    // look for the `Enter` keyCode
    if (event.keyCode === 13 || event.which === 13) {
      searchClicked();
    }
  };

  let searchClicked = function () {
    let searchQueryPlainText = searchQueryState.searchQuery;
    //alert(searchQueryPlainText);
    let searchQueryUriEncoded = encodeURIComponent(searchQueryPlainText);
    //alert(searchQueryUriEncoded);
    navigate(`/search/all/${searchQueryUriEncoded}`, { replace: true });
  };

  return (
    <div className="searchTextboxContainer">
      <input
        type="text"
        defaultValue={searchQueryState.searchQuery}
        onChange={(e) => setSearchQueryState({ searchQuery: e.target.value })}
        onKeyPress={handleKeyPress}
        className="searchTextbox"
        placeholder="Search the censored web"
        ref={autoFocusFn}
      />

      <div className="searchButton" onClick={(e) => searchClicked()}>
        <FontAwesomeIcon icon={faSearch} className="searchIcon" />
      </div>
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
