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
  expanded: false,
  filterMap: filterMap
};

var filterOrTagClicked = function (itemClicked) {
  if (itemClicked === "filter") {
    filter.expanded = !filter.expanded;
  } else {
    let tagSetName = itemClicked.tagSetName;
    let tagSet = filter.filterMap.get(tagSetName);
    let newSetArray = [];
    let selected = false;
    tagSet.forEach(function (tagItem, index) {
      if (tagItem.name === itemClicked.tagName) {
        selected = !tagItem.selected;
        newSetArray.push({
          name: tagItem.name,
          code: tagItem.code,
          selected: selected
        });
      } else {
        newSetArray.push(tagItem);
      }
    });
    filter.filterMap.set(tagSetName, newSetArray);
    updateRelevancy(itemClicked.tagCode, selected);
  }
};

var updateRelevancy = function (tagCode, selected) {
  let galleryMap = galleryData.galleryMap;
  let difference = -1;
  if (selected) difference = 1;
  sorted = [];
  galleryMap.forEach(function (image, index) {
    if (image.tags.has(tagCode)) {
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
            filterOrTagClicked={filterOrTagClicked}
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
