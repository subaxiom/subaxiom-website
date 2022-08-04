import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Filter = (props) => {
  let filter = props.filter;
  let expanded = filter.expanded;

  if (expanded) {
    return FilterExpanded(props);
  } else {
    return FilterCollapsed(props);
  }
};

const FilterCollapsed = (props) => {
  //let filter = props.filter;
  let navigate = useNavigate();
  let filterClicked = props.filterClicked;
  return (
    <div className="filter">
      <span
        className="filter-link-collapsed"
        onClick={async (event) => {
          filterClicked("filter");
          navigate(`/`, { replace: true });
        }}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} /> FILTER
      </span>
    </div>
  );
};

const FilterExpanded = (props) => {
  let filter = props.filter;
  let filterMap = filter.filterMap;
  let navigate = useNavigate();
  let filterClicked = props.filterClicked;
  let filterSets = [];

  for (const [filterSetName, filterSet] of filterMap) {
    filterSets.push(
      <div className="filter-set">
        <span className="filter-set-name">{filterSetName}</span>
        <FilterSet
          filterSetName={filterSetName}
          filterSet={filterSet}
          filterClicked={filterClicked}
        />
      </div>
    );
  }

  return (
    <div className="filter">
      <span
        className="filter-link-expanded"
        onClick={async (event) => {
          filterClicked("filter");
          navigate(`/`, { replace: true });
        }}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} /> FILTER
      </span>
      {filterSets}
    </div>
  );
};

const FilterSet = (props) => {
  let filterSetName = props.filterSetName;
  let filterSet = props.filterSet;
  let filterClicked = props.filterClicked;
  let filterItems = [];

  filterSet.forEach(function (filterItem, index) {
    filterItems.push(
      <FilterItem
        filterSetName={filterSetName}
        filterName={filterItem.name}
        selected={filterItem.selected}
        filterClicked={filterClicked}
      />
    );
  });

  return filterItems;
};

const FilterItem = (props) => {
  let filterSetName = props.filterSetName;
  let filterName = props.filterName;
  let itemClicked = { filterSetName: filterSetName, filterName: filterName };
  let selected = props.selected;
  let filterClicked = props.filterClicked;
  let navigate = useNavigate();

  if (selected) {
    return (
      <span
        className="filter-item-selected"
        onClick={async (event) => {
          filterClicked(itemClicked);
          navigate(`/`, { replace: true });
        }}
      >
        <FontAwesomeIcon icon={faSquareCheck} /> {filterName}
        <br />
      </span>
    );
  } else {
    return (
      <span
        className="filter-item"
        onClick={async (event) => {
          filterClicked(itemClicked);
          navigate(`/`, { replace: true });
        }}
      >
        <FontAwesomeIcon icon={faSquare} /> {filterName}
        <br />
      </span>
    );
  }
};
