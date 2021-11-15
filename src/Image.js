import React from "react";
import { useParams } from "react-router-dom";
import x_close from "./img/x_close4.png";
import { galleryMap } from "./galleryData";
import { useNavigate } from "react-router-dom";
//import history from './history';
//import { galleryMap } from "./galleryData";
//import { withRouter } from "react-router";

const ImageComponent = (props) => {
  let params = useParams();
  let navigate = useNavigate();
  let imageId = params.imageId;
  let image = galleryMap.get(imageId);
  let addToCart = props.addToCart;

  return (
    <div className="image-page-wrapper">
      <img
        src={x_close}
        alt="close"
        className="x-close-image"
        onClick={async (event) => {
          navigate(`/`, { replace: true });
        }}
      />

      <img className="image-preview" key={imageId} src={image} alt="alt text" />

      <div
        className="cart"
        onClick={async (event) => {
          addToCart("passing image ID to index");
        }}
      >
        Add to Cart
      </div>
    </div>
  );
};

export const ImagePreview = (props) => {
  return (
    <div>
      <ImageComponent addToCart={props.addToCart} />
    </div>
  );
};

export default ImageComponent;
