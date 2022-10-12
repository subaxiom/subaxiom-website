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
import Download from "./Download";
import Keys from "./Keys";
import Upload from "./Upload";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import nacl from "tweetnacl";
import naclUtil from "tweetnacl-util";
nacl.util = naclUtil;

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

var bytesToHex = function (bytes) {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join(
    ""
  );
};

var hexToBytes = function (hex) {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i !== bytes.length; i++) {
    bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
  }
  return bytes;
};

var encrypt = function (message) {
  let senderSecretKeyHex = process.env.REACT_APP_SENDER_SECRET_KEY_V1;
  let receiverPublicKeyHex = process.env.REACT_APP_RECEIVER_PUBLIC_KEY_V1;
  let senderSecretKeyBytes = hexToBytes(senderSecretKeyHex);
  let receiverPublicKeyBytes = hexToBytes(receiverPublicKeyHex);
  let nonceBytes = nacl.randomBytes(24);
  let nonceHex = bytesToHex(nonceBytes);
  let cipherBytes = nacl.box(
    nacl.util.decodeUTF8(message),
    nonceBytes,
    receiverPublicKeyBytes,
    senderSecretKeyBytes
  );
  let cipherHex = bytesToHex(cipherBytes);
  return { cipherHex: cipherHex, nonceHex: nonceHex };
};

var decrypt = function (cipherHex, nonceHex) {
  let senderPublicKeyHex = process.env.REACT_APP_SENDER_PUBLIC_KEY_V1;
  let receiverSecretKeyHex = process.env.REACT_APP_RECEIVER_SECRET_KEY_V1;
  let senderPublicKeyBytes = hexToBytes(senderPublicKeyHex);
  let receiverSecretKeyBytes = hexToBytes(receiverSecretKeyHex);
  let nonceBytes = hexToBytes(nonceHex);
  let cipherBytes = hexToBytes(cipherHex);

  let decryptedCipher = nacl.box.open(
    cipherBytes,
    nonceBytes,
    senderPublicKeyBytes,
    receiverSecretKeyBytes
  );
  let decryptedPlainText = nacl.util.encodeUTF8(decryptedCipher);
  return decryptedPlainText;
};

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const options = {
  // passing the client secret obtained from the server
  clientSecret: process.env.REACT_APP_STRIPE_SECRET_KEY
};
//process.env.REACT_APP_STRIPE_SECRET_KEY
//process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY

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
          <Elements stripe={stripePromise} options={options}>
            <StripeCheckout
              cartMap={cartMap}
              removeFromCart={removeFromCart}
              scrollToVertical={scrollToVertical}
              encrypt={encrypt}
            />
          </Elements>
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
        path="download/:cipherHex/:nonceHex"
        element={
          <Download
            cartMap={cartMap}
            removeFromCart={removeFromCart}
            galleryData={galleryData}
            decrypt={decrypt}
          />
        }
      />

      <Route path="keys" element={<Keys />} />
      <Route path="keys/:encryptedMessage" element={<Keys />} />
      <Route
        path="keys/:encryptedMessage/:decryptedCipher"
        element={<Keys />}
      />

      <Route path="upload" element={<Upload encrypt={encrypt} />} />
      <Route
        path="upload/:encryptedUrl/:nonce"
        element={<Upload encrypt={encrypt} />}
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
