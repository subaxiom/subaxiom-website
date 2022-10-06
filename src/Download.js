import React from "react";
import { ImageThumbnail } from "./ImageThumbnail";
import { useParams } from "react-router-dom";
import { saveAs } from "file-saver";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const DownloadComponent = (props) => {
  let params = useParams();
  let galleryData = props.galleryData;
  let galleryMap = galleryData.galleryMap;
  let decrypt = props.decrypt;
  let cipherHex = params.cipherHex;
  let nonceHex = params.nonceHex;
  let decryptedMessage = decrypt(cipherHex, nonceHex);

  const imageIds = decryptedMessage.split("-");

  let images = [];
  for (var i = 0; i < imageIds.length; i++) {
    let imageId = imageIds[i];
    let image = galleryMap.get(imageId);
    image.imageId = imageId;
    let saveFile = () => {
      saveAs(image.src, image.title.replaceAll(" ", "") + ".jpg");
    };

    images.push(
      <div className="pageSection">
        <ImageThumbnail image={image} thumbnailOnclick={saveFile} />
        <div className="caption-wrapper">
          <h3>{image.title}</h3>
          <div className="caption">
            $19.99
            <br />
            hi-res 4000 x 3000 png
            <br />
            watermark removed
            <br />
            royalty free license
            <br />
            <br />
            <div className="greenButton" onClick={saveFile}>
              <FontAwesomeIcon icon={faDownload} /> Download
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <h2>Thank you for your business!</h2>
      <br />
      <br />
      {images}
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
