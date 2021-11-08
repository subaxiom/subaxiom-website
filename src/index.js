import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Image from "./Image";

/*
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
*/

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="image/:imageId" element={<Image />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
