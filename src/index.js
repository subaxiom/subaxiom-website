import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { galleryData } from "./galleryData";
import { topicsMap, peopleMap } from "./filterData";

import App from "./App";
import ImagePreview from "./Image";
import Cart from "./Cart";
import StripeCheckout from "./StripeCheckout";
import StripeError from "./StripeError";
import StripeSuccess from "./StripeSuccess";
import Keys from "./Keys";
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
let similar = [];

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

var findSimilar = function (imageId, tagSet) {
  let galleryMap = galleryData.galleryMap;
  similar = [];

  galleryMap.forEach(function (image, index) {
    image.similarity = 0;
  });

  function incrementSimilarityScoreIfMatch(value) {
    galleryMap.forEach(function (image, index) {
      if (image.tags.has(value)) {
        image.similarity = image.similarity + 1;
      }
    });
  }

  tagSet.forEach(incrementSimilarityScoreIfMatch);

  galleryMap.forEach(function (image, index) {
    if (imageId !== index && image.similarity > 0) {
      similar.push({ imageId: index, similarity: image.similarity });
    }
  });

  similar.sort(function (a, b) {
    return b.similarity - a.similarity;
  });
  similar = similar.slice(0, 10);

  galleryData.similar = similar;
};

var scrollToVertical = function (y) {
  window.scrollTo(0, y);
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
            scrollToVertical={scrollToVertical}
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
            findSimilar={findSimilar}
            scrollToVertical={scrollToVertical}
          />
        }
      />
      <Route
        path="cart"
        element={
          <Cart
            cartMap={cartMap}
            removeFromCart={removeFromCart}
            scrollToVertical={scrollToVertical}
          />
        }
      />
      <Route
        path="stripecheckout"
        element={
          <StripeCheckout
            cartMap={cartMap}
            removeFromCart={removeFromCart}
            scrollToVertical={scrollToVertical}
          />
        }
      />
      <Route
        path="stripeerror"
        element={
          <StripeError
            cartMap={cartMap}
            removeFromCart={removeFromCart}
            scrollToVertical={scrollToVertical}
          />
        }
      />
      <Route
        path="stripesuccess"
        element={
          <StripeSuccess
            cartMap={cartMap}
            removeFromCart={removeFromCart}
            scrollToVertical={scrollToVertical}
          />
        }
      />

      <Route path="keys" element={<Keys cartMap={cartMap} />} />
      <Route
        path="keys/:encryptedMessage"
        element={<Keys cartMap={cartMap} />}
      />
      <Route
        path="keys/:encryptedMessage/:decryptedCipher"
        element={<Keys cartMap={cartMap} />}
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
