import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { NavBar } from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
//import history from './history';
//import { galleryMap } from "./galleryData";
//import { withRouter } from "react-router";

const StripeSuccessComponent = (props) => {
  let cartMap = props.cartMap;
  let invoiceTable = [];
  let chris = process.env.REACT_APP_CHRIS; //test
  let total = 0;

  for (const [imageId, image] of cartMap) {
    invoiceTable.push(
      <tr id={imageId}>
        <td>{image.title}</td>
        <td>$19.99</td>
      </tr>
    );
    total = total + 19.99;
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
        STRIPE SUCCESS
        <br />
        {chris}
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
      <Link to="/stripesuccess">stripe success page</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/stripeerror">stripe error page</Link>
      <br />
      <br />
    </div>
  );
};

export const StripeSuccess = (props) => {
  return (
    <div>
      <StripeSuccessComponent
        removeFromCart={props.removeFromCart}
        cartMap={props.cartMap}
      />
    </div>
  );
};

export default StripeSuccessComponent;
