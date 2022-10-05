import React from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "./NavBar";

const StripeSuccessComponent = (props) => {
  let params = useParams();
  let cartMap = props.cartMap;
  let decrypt = props.decrypt;
  let cipherHex = params.cipherHex;
  let nonceHex = params.nonceHex;
  let decryptedMessage = decrypt(cipherHex, nonceHex);

  const imageIds = decryptedMessage.split("-");

  for (var i = 0; i < imageIds; i++) {
    alert(imageIds[i]);
  }

  return (
    <div className="page-wrapper top-buffer">
      <NavBar cartMap={cartMap} />
      <h2>thank you for your business!</h2>
      <br />
      <br />
      <br />
      <div className="pageSection">
        <br />
        <br />
        <br />
        STRIPE SUCCESS
        <br />
        <br />
        {decryptedMessage}
        <br />
        {imageIds.length}
        <br />
      </div>
      <br />
      <br />
      <br />
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
        decrypt={props.decrypt}
      />
    </div>
  );
};

export default StripeSuccessComponent;
