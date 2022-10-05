import React from "react";
import { useNavigate } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { NavBar } from "./NavBar";
import { ImageThumbnail } from "./ImageThumbnail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
//import history from './history';
//import { galleryMap } from "./galleryData";
//import { withRouter } from "react-router";

const CartComponent = (props) => {
  let navigate = useNavigate();
  let removeFromCart = props.removeFromCart;
  let cartMap = props.cartMap;
  let scrollToVertical = props.scrollToVertical;

  let thumbnailOnclick = function (imageId) {
    navigate(`/image/${imageId}`, { replace: true });
    scrollToVertical(0);
  };

  let images = [];
  //let url = null;
  for (const [imageId, image] of cartMap) {
    images.push(
      <div className="pageSection">
        <ImageThumbnail image={image} thumbnailOnclick={thumbnailOnclick} />
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
            <span
              className="smallLink"
              onClick={async (event) => {
                //alert(url);
                //history.push(url)
                removeFromCart(imageId);
                navigate(`/cart`, { replace: true });
              }}
            >
              <FontAwesomeIcon icon={faXmark} /> remove from cart
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (images.length === 0) {
    images.push(
      <div className="pageSection">
        <div className="caption">No items in cart.</div>
      </div>
    );
  }

  return (
    <div className="page-wrapper top-buffer">
      <h2>shopping cart ({cartMap.size} images)</h2>
      <NavBar cartMap={cartMap} />
      {images}

      <ProceedToCheckout cartMap={cartMap} />

      <br />
      <br />

      <Link className="bigLink" to="/">
        <FontAwesomeIcon icon={faCircleArrowLeft} /> return to gallery
      </Link>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

const ProceedToCheckout = (props) => {
  let navigate = useNavigate();
  let cartMap = props.cartMap;

  let html = [];

  if (cartMap.size > 0) {
    html.push(<br />);
    html.push(<br />);
    html.push(
      <div
        className="greenButton"
        onClick={async (event) => {
          navigate(`/stripecheckout`, { replace: true });
        }}
      >
        Proceed to Checkout &nbsp;
        <FontAwesomeIcon icon={faCircleArrowRight} />
      </div>
    );
    html.push(<br />);
    html.push(<br />);
  }
  return html;
};

export const Cart = (props) => {
  return (
    <div>
      <CartComponent
        removeFromCart={props.removeFromCart}
        cartMap={props.cartMap}
        scrollToVertical={props.scrollToVertical}
      />
    </div>
  );
};

export default CartComponent;
