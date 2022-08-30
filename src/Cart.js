import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { NavBar } from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
//import history from './history';
//import { galleryMap } from "./galleryData";
//import { withRouter } from "react-router";

const CartComponent = (props) => {
  let navigate = useNavigate();
  let removeFromCart = props.removeFromCart;
  let cartMap = props.cartMap;
  let scrollToTop = props.scrollToTop;

  let images = [];
  //let url = null;
  for (const [imageId, image] of cartMap) {
    var backgroundPos =
      "-" + image.thumbnailX + "px -" + image.thumbnailY + "px";
    //url = href + 'image/' + key;
    images.push(
      <div className="pageSection">
        <div
          className="thumbnail"
          key={imageId}
          title={image.relevancy}
          alt={image.title}
          onClick={async (event) => {
            //alert(url);
            //history.push(url)
            navigate(`/image/${imageId}`, { replace: true });
            scrollToTop();
          }}
        >
          <div
            style={{
              backgroundImage: `url(${image.thumbnailSrc})`,
              backgroundPosition: `${backgroundPos}`,
              backgroundRepeat: "no-repeat"
            }}
          />
        </div>
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
    images.push(<div className="caption">No items in cart.</div>);
  }

  return (
    <div className="page-wrapper top-buffer">
      <h2>shopping cart ({cartMap.size})</h2>
      <NavBar cartMap={cartMap} />
      {images}
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

export const Cart = (props) => {
  return (
    <div>
      <CartComponent
        removeFromCart={props.removeFromCart}
        cartMap={props.cartMap}
      />
    </div>
  );
};

export default CartComponent;
