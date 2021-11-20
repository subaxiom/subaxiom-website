import React from "react";
import { useParams, Link } from "react-router-dom";
import { galleryMap } from "./galleryData";
import { useNavigate } from "react-router-dom";
import { NavBar } from "./NavBar";
//import history from './history';
//import { galleryMap } from "./galleryData";
//import { withRouter } from "react-router";

const ImageComponent = (props) => {
  let params = useParams();
  let imageId = params.imageId;
  let image = galleryMap.get(imageId);
  let cartMap = props.cartMap;

  return (
    <div className="page-wrapper top-buffer">
      <NavBar cartMap={cartMap} />
      <img
        className="image-preview"
        key={imageId}
        src={image.src}
        alt={image.title}
      />
      <div className="caption-wrapper">
        <h2>{image.title}</h2>
        <div className="caption">
          $19.99 for hi-res 4000 x 3000 png image
          <br />
          (subAxiom.com watermark removed)
          <br />
          <br />
          <br />
          <AddToCartComponent
            cartMap={cartMap}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
            imageId={imageId}
          />
        </div>
        <br />
        <br />
        <Link className="blue-link" to="/">
          ⮢ return to gallery
        </Link>
      </div>
    </div>
  );
};

const AddToCartComponent = (props) => {
  let navigate = useNavigate();
  let imageId = props.imageId;
  let addToCart = props.addToCart;
  let removeFromCart = props.removeFromCart;
  let cartMap = props.cartMap;

  if (cartMap.has(imageId)) {
    return (
      <div className="inCartMessage">
        Image added to cart.
        <br />
        <Link className="blue-link" to="/cart">
          view cart
        </Link>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <span
          className="blue-link"
          onClick={async (event) => {
            //alert(url);
            //history.push(url)
            removeFromCart(imageId);
            navigate(`/image/${imageId}`, { replace: true });
          }}
        >
          🗙 remove from cart
        </span>
      </div>
    );
  } else {
    return (
      <div
        className="greenButton"
        onClick={async (event) => {
          addToCart(imageId);
          navigate(`/image/${imageId}`, { replace: true });
        }}
      >
        + Add to Cart
      </div>
    );
  }
};

export const ImagePreview = (props) => {
  return (
    <div>
      <ImageComponent
        cartMap={props.cartMap}
        addToCart={props.addToCart}
        removeFromCart={props.removeFromCart}
      />
    </div>
  );
};

export default ImageComponent;
