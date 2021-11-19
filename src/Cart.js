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
  for (const [key, value] of cartMap) {
    //url = href + 'image/' + key;
    images.push(
      <div className="cartItem">
        <img
          className="thumbnail"
          key={key}
          src={value}
          alt={value.alt}
          onClick={async (event) => {
            //alert(url);
            //history.push(url)
            navigate(`/image/${key}`, { replace: true });
          }}
        />
        <div className="caption-wrapper">
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
                removeFromCart(key);
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
  return (
    <div className="page-wrapper">
      <NavBar cartMap={cartMap} />
      {images}
      <br />
      <br />
      <Link className="blue-link padding20" to="/">
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
