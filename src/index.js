import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { galleryMap } from "./galleryData";
//import history from './history';

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

var addToCart = function (imageId) {
  var image = galleryMap.get(imageId);
  cartMap.set(imageId, image);
  return cartMap;
};

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App cartMap={cartMap} />} />
      <Route
        path="image/:imageId"
        element={<ImagePreview addToCart={addToCart} cartMap={cartMap} />}
      />
      <Route path="cart" element={<Cart cartMap={cartMap} />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
