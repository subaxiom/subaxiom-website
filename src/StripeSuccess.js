import React from "react";
import { ImageThumbnail } from "./ImageThumbnail";
import { useParams } from "react-router-dom";
import { NavBar } from "./NavBar";

const StripeSuccessComponent = (props) => {
  let params = useParams();
  let galleryData = props.galleryData;
  let galleryMap = galleryData.galleryMap;
  let scrollToVertical = props.scrollToVertical;
  let cartMap = props.cartMap;
  let decrypt = props.decrypt;
  let cipherHex = params.cipherHex;
  let nonceHex = params.nonceHex;
  let decryptedMessage = decrypt(cipherHex, nonceHex);

  const imageIds = decryptedMessage.split("-");

  let images = [];
  for (var i = 0; i < imageIds.length; i++) {
    var imageId = imageIds[i];
    var image = galleryMap.get(imageId);
    image.imageId = imageId;

    images.push(
      <ImageThumbnail image={image} scrollToVertical={scrollToVertical} />
    );
  }

  return (
    <div className="page-wrapper top-buffer">
      <NavBar cartMap={cartMap} />
      <h2>thank you for your business!</h2>
      <br />
      <br />
      <br />
      <div className="pageSection">
        {images}
        <br />
        <br />
        <br />
        <br />
        <br />
        {decryptedMessage}
        <br />
        {imageIds.length}
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export const StripeSuccess = (props) => {
  return (
    <div>
      <StripeSuccessComponent
        removeFromCart={props.removeFromCart}
        galleryMap={props.galleryMap}
        scrollToVertical={props.scrollToVertical}
        cartMap={props.cartMap}
        decrypt={props.decrypt}
      />
    </div>
  );
};

export default StripeSuccessComponent;
