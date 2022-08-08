import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { galleryData } from "./galleryData";
import { topicsMap, peopleMap } from "./filterData";

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
  topicsMap: topicsMap,
  peopleMap: peopleMap
};

var filterOrTagClicked = function (itemClicked) {
  if (itemClicked === "filter") {
    filter.expanded = !filter.expanded;
  } else {
    let tagSetName = itemClicked.tagSetName;
    let tagSetMap = null;
    if (tagSetName === "topics") {
      tagSetMap = filter.topicsMap;
    }
    if (tagSetName === "people") {
      tagSetMap = filter.peopleMap;
    }

    let selected = !tagSetMap.get(itemClicked.tagCode).selected;
    tagSetMap.get(itemClicked.tagCode).selected = selected;

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
