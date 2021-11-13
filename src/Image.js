import React from "react";
import { useParams } from "react-router-dom";
import x_close from "./img/x_close4.png";
import { galleryMap } from "./galleryData";
import { useNavigate } from "react-router-dom";
//import { galleryMap } from "./galleryData";
//import { withRouter } from "react-router";

const ImageComponent = () => {
  let params = useParams();
  let navigate = useNavigate();
  let imageId = params.imageId;
  let image = galleryMap.get(imageId);
  return (
    <div className="image-page-wrapper">
      <img
        src={x_close}
        alt="close"
        className="x-close-image"
        onClick={async (event) => {
          navigate(`/`);
        }}
      />

      <img className="image-preview" key={imageId} src={image} alt="alt text" />
    </div>
  );
};

export const ImagePreview = () => {
  return (
    <div>
      <ImageComponent />
    </div>
  );
};

export default ImageComponent;
