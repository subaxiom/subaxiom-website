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
  let filterOrTagClicked = props.filterOrTagClicked;
  return (
    <div className="filter">
      <span
        className="filter-link-collapsed"
        onClick={async (event) => {
          filterOrTagClicked("filter");
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
  let filterOrTagClicked = props.filterOrTagClicked;
  let filterSets = [];

  for (const [tagSetName, tagSetArray] of filterMap) {
    filterSets.push(
      <div className="filter-set">
        <span className="filter-set-name">{tagSetName}</span>
        <TagSet
          tagSetName={tagSetName}
          tagSetArray={tagSetArray}
          filterOrTagClicked={filterOrTagClicked}
        />
      </div>
    );
  }

  return (
    <div className="filter">
      <span
        className="filter-link-expanded"
        onClick={async (event) => {
          filterOrTagClicked("filter");
          navigate(`/`, { replace: true });
        }}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} /> FILTER
      </span>
      {filterSets}
    </div>
  );
};

const TagSet = (props) => {
  let tagSetName = props.tagSetName;
  let tagSetArray = props.tagSetArray;
  let filterOrTagClicked = props.filterOrTagClicked;
  let tagItems = [];

  tagSetArray.forEach(function (tagItem, index) {
    tagItems.push(
      <Tag
        tagSetName={tagSetName}
        tagName={tagItem.name}
        tagCode={tagItem.code}
        selected={tagItem.selected}
        filterOrTagClicked={filterOrTagClicked}
      />
    );
  });

  return tagItems;
};

const Tag = (props) => {
  let tagSetName = props.tagSetName;
  let tagName = props.tagName;
  let tagCode = props.tagCode;
  let itemClicked = {
    tagSetName: tagSetName,
    tagName: tagName,
    tagCode: tagCode
  };
  let selected = props.selected;
  let filterOrTagClicked = props.filterOrTagClicked;
  let navigate = useNavigate();

  if (selected) {
    return (
      <span
        className="filter-item-selected"
        onClick={async (event) => {
          filterOrTagClicked(itemClicked);
          navigate(`/`, { replace: true });
        }}
      >
        <FontAwesomeIcon icon={faSquareCheck} /> {tagName}
        <br />
      </span>
    );
  } else {
    return (
      <span
        className="filter-item"
        onClick={async (event) => {
          filterOrTagClicked(itemClicked);
          navigate(`/`, { replace: true });
        }}
      >
        <FontAwesomeIcon icon={faSquare} /> {tagName}
        <br />
      </span>
    );
  }
};
