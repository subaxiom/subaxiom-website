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
        🗹 {filterName}
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
        ☐ {filterName}
        <br />
      </span>
    );
  }
};
