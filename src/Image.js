import React from "react";
import { useParams, Link } from "react-router-dom";
import x_close from "./img/x_close4.png";
import { galleryMap } from "./galleryData";
import { useNavigate } from "react-router-dom";
import { NavBar } from "./NavBar";
//import history from './history';
//import { galleryMap } from "./galleryData";
//import { withRouter } from "react-router";

const ImageComponent = (props) => {
  let params = useParams();
  let navigate = useNavigate();
  let imageId = params.imageId;
  let image = galleryMap.get(imageId);
  let addToCart = props.addToCart;
  let cartMap = props.cartMap;

  return (
    <div>
      <NavBar cartMap={cartMap} />
      <div className="image-page-wrapper">
        <img
          src={x_close}
          alt="close"
          className="x-close-image"
          onClick={async (event) => {
            navigate(`/`, { replace: true });
          }}
        />

        <img
          className="image-preview"
          key={imageId}
          src={image}
          alt="alt text"
        />
        <div className="caption-wrapper">
          <div className="caption">
            $19.99 for hi-res 4000 x 3000 png image
            <br />
            (subAxiom.com watermark removed)
            <br />
            <br />
            <br />
            <div
              className="greenButton"
              onClick={async (event) => {
                addToCart(imageId);
                navigate(`/cart`, { replace: true });
              }}
            >
              + Add to Cart
            </div>
          </div>
          <br />
          <br />
          <Link className="return-link" to="/">
            ⮢ return to gallery
          </Link>
        </div>
      </div>
    </div>
  );
};

export const ImagePreview = (props) => {
  return (
    <div>
      <ImageComponent addToCart={props.addToCart} cartMap={props.cartMap} />
    </div>
  );
};

export default ImageComponent;
