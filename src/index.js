import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { galleryData } from "./galleryData";
import { filterMap } from "./filterData";

import App from "./App";
import ImagePreview from "./Image";
import Cart from "./Cart";
//import Gallery from "./Gallery";
/*
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
*/

var cartMap = new Map();
let sorted = [];

var addToCart = function (imageId) {
  var image = galleryData.galleryMap.get(imageId);
  cartMap.set(imageId, image);
  return cartMap;
};

var removeFromCart = function (imageId) {
  cartMap.delete(imageId);
  return cartMap;
};

var filter = {
  expanded: true,
  filterMap: filterMap
};

var filterClicked = function (itemClicked) {
  if (itemClicked === "filter") {
    filter.expanded = !filter.expanded;
  } else {
    let filterSetName = itemClicked.filterSetName;
    let filterSet = filter.filterMap.get(filterSetName);
    let newSetArray = [];
    let selected = false;
    filterSet.forEach(function (filterItem, index) {
      if (filterItem.name === itemClicked.filterName) {
        selected = !filterItem.selected;
        newSetArray.push({
          name: filterItem.name,
          selected: selected
        });
      } else {
        newSetArray.push(filterItem);
      }
    });
    filter.filterMap.set(filterSetName, newSetArray);
    updateRelevancy(itemClicked.filterName, selected);
  }
};

var updateRelevancy = function (tag, selected) {
  let galleryMap = galleryData.galleryMap;
  let difference = -1;
  if (selected) difference = 1;
  sorted = [];
  galleryMap.forEach(function (image, index) {
    if (image.tags.has(tag)) {
      image.relevancy = image.relevancy + difference;
    }

    sorted.push({ imageId: index, relevancy: image.relevancy });
  });
  sorted.sort(function (a, b) {
    return b.relevancy - a.relevancy;
  });
  //alert(JSON.stringify(sorted));

  galleryData.sort = sorted;

  //var newMap = new Map([...galleryMap].sort((a, b) => a[1].relevancy > b[1].relevancy));
};

//updateRelevancy();

render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <App
            cartMap={cartMap}
            filter={filter}
            filterClicked={filterClicked}
            galleryData={galleryData}
          />
        }
      />
      <Route
        path="image/:imageId"
        element={
          <ImagePreview
            cartMap={cartMap}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        }
      />
      <Route
        path="cart"
        element={<Cart cartMap={cartMap} removeFromCart={removeFromCart} />}
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
