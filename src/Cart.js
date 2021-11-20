import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { NavBar } from "./NavBar";
//import history from './history';
//import { galleryMap } from "./galleryData";
//import { withRouter } from "react-router";

const CartComponent = (props) => {
  let navigate = useNavigate();
  let removeFromCart = props.removeFromCart;
  let cartMap = props.cartMap;

  let images = [];
  //let url = null;
  for (const [imageId, image] of cartMap) {
    //url = href + 'image/' + key;
    images.push(
      <div className="cartItem">
        <img
          className="thumbnail"
          key={imageId}
          src={image.src}
          alt={image.title}
          onClick={async (event) => {
            //alert(url);
            //history.push(url)
            navigate(`/image/${imageId}`, { replace: true });
          }}
        />
        <div className="caption-wrapper">
          <h3>{image.title}</h3>
          <div className="caption">
            $19.99 for hi-res 4000 x 3000 png image
            <br />
            (subAxiom.com watermark removed)
            <br />
            <br />
            <br />
            <span
              className="blue-link"
              onClick={async (event) => {
                //alert(url);
                //history.push(url)
                removeFromCart(imageId);
                navigate(`/cart`, { replace: true });
              }}
            >
              🗙 remove from cart
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
      <Link className="blue-link" to="/">
        ⮢ return to gallery
      </Link>
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
