import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { NavBar } from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
//import history from './history';
//import { galleryMap } from "./galleryData";
//import { withRouter } from "react-router";

const StripeCheckoutComponent = (props) => {
  let cartMap = props.cartMap;
  let encrypt = props.encrypt;
  let stripe = props.stripe;
  let options = props.options;
  let invoiceTable = [];

  let total = 0;
  let imageIds = "";

  for (const [imageId, image] of cartMap) {
    invoiceTable.push(
      <tr id={imageId}>
        <td>{image.title}</td>
        <td>$19.99</td>
      </tr>
    );
    total = total + 19.99;
    imageIds = imageIds + "-" + imageId;
  }
  total = total.toFixed(2);
  invoiceTable.push(
    <tr>
      <td>
        <b>TOTAL</b>
      </td>
      <td>
        <b>${total}</b>
      </td>
    </tr>
  );

  imageIds = imageIds.substring(1);
  let cipher = encrypt(imageIds);
  let cipherHex = cipher.cipherHex;
  let nonceHex = cipher.nonceHex;
  let successLink = "/download/" + cipherHex + "/" + nonceHex;

  return (
    <div className="page-wrapper top-buffer">
      <NavBar cartMap={cartMap} />
      <h2>checkout ({cartMap.size} images)</h2>
      <br />
      <br />
      <div className="pageSection">
        <table className="invoiceTable">{invoiceTable}</table>
      </div>
      <br />
      <div className="pageSection">
        <br />
        <br />
        <br />

        <Elements stripe={stripe} options={options}>
          <CheckoutForm />
        </Elements>

        <br />
        <br />
        <br />
        <br />
      </div>
      <br />
      <Link className="bigLink" to="/cart">
        <FontAwesomeIcon icon={faCircleArrowLeft} /> return to shopping cart
      </Link>
      <br />
      <br />
      <Link to={successLink}>stripe success page</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/stripeerror">stripe error page</Link>
      <br />
      <br />
    </div>
  );
};

export const StripeCheckout = (props) => {
  return (
    <div>
      <StripeCheckoutComponent
        stripe={props.stripe}
        options={props.options}
        removeFromCart={props.removeFromCart}
        cartMap={props.cartMap}
        encrypt={props.encrypt}
      />
    </div>
  );
};

export default StripeCheckoutComponent;
