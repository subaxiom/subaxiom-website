import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import history from './history';

import App from "./App";
import ImagePreview from "./Image";
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

var addToCart = function (imageId) {
  alert(imageId);
};

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="image/:imageId"
        element={<ImagePreview addToCart={addToCart} />}
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
