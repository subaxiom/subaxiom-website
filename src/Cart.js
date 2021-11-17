import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { NavBar } from "./NavBar";
//import history from './history';
//import { galleryMap } from "./galleryData";
//import { withRouter } from "react-router";

const CartComponent = (props) => {
  let navigate = useNavigate();
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
      </div>
    );
  }
  return (
    <div className="viewCart">
      <NavBar cartMap={cartMap} />
      {images}
      <br />
      <br />
      <Link className="return-link" to="/">
        ⮢ return to gallery
      </Link>
    </div>
  );
};

export const Cart = (props) => {
  return (
    <div>
      <CartComponent cartMap={props.cartMap} />
    </div>
  );
};

export default CartComponent;
