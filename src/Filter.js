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
        className="filter-link"
        onClick={async (event) => {
          filterClicked("filter");
          navigate(`/`, { replace: true });
        }}
      >
        ⯈ FILTER
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
        <FilterSet filterSet={filterSet} />
      </div>
    );
  }

  return (
    <div className="filter">
      <span
        className="filter-link"
        onClick={async (event) => {
          filterClicked("filter");
          navigate(`/`, { replace: true });
        }}
      >
        ⯆ FILTER
      </span>
      {filterSets}
    </div>
  );
};

const FilterSet = (props) => {
  let filterSet = props.filterSet;
  let filterItems = [];

  filterSet.forEach(function (filterItem, index) {
    filterItems.push(
      <span className="filter-item">
        {filterItem.name}
        <br />
      </span>
    );
  });

  return filterItems;
};
