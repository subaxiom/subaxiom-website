import React from "react";
import { ImageThumbnail } from "./ImageThumbnail";
import { useParams } from "react-router-dom";

const DownloadComponent = (props) => {
  let params = useParams();
  let galleryData = props.galleryData;
  let galleryMap = galleryData.galleryMap;
  let decrypt = props.decrypt;
  let cipherHex = params.cipherHex;
  let nonceHex = params.nonceHex;
  let decryptedMessage = decrypt(cipherHex, nonceHex);

  let thumbnailOnclick = function () {
    alert("do nothing please");
  };

  const imageIds = decryptedMessage.split("-");

  let images = [];
  for (var i = 0; i < imageIds.length; i++) {
    var imageId = imageIds[i];
    var image = galleryMap.get(imageId);
    image.imageId = imageId;

    images.push(
      <ImageThumbnail image={image} thumbnailOnclick={thumbnailOnclick} />
    );
  }

  return (
    <div className="page-wrapper">
      <h2>thank you for your business!</h2>
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

export const Download = (props) => {
  return (
    <div>
      <DownloadComponent
        removeFromCart={props.removeFromCart}
        galleryMap={props.galleryMap}
        cartMap={props.cartMap}
        decrypt={props.decrypt}
      />
    </div>
  );
};

export default DownloadComponent;
