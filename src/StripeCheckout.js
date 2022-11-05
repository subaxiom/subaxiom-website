import React, { useMemo, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import { NavBar } from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCreditCard,
  faSpinner,
  faTriangleExclamation
} from "@fortawesome/free-solid-svg-icons";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";

const StripeCheckoutComponent = (props) => {
  let cartMap = props.cartMap;
  let encrypt = props.encrypt;
  let testMode = props.testMode;
  let invoiceTable = [];

  let totalInteger = 0;
  let imageIds = "";

  for (const [imageId, image] of cartMap) {
    invoiceTable.push(
      <tr id={imageId}>
        <td>{image.title}</td>
        <td>$19.99</td>
      </tr>
    );
    totalInteger = totalInteger + 1999;
    imageIds = imageIds + "-" + imageId;
  }
  let totalDisplay = (totalInteger / 100).toFixed(2);
  invoiceTable.push(
    <tr>
      <td>
        <b>TOTAL</b>
      </td>
      <td>
        <b>${totalDisplay}</b>
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
        <h2>credit card authorization:</h2>
        <br />
        <StripeCreditCardForm
          amountInteger={totalInteger}
          amountDisplay={totalDisplay}
          successLink={successLink}
          testMode={testMode}
        />
        <br />
        <br />
      </div>
      <br />
      <Link className="bigLink" to="/cart">
        <FontAwesomeIcon icon={faCircleArrowLeft} /> return to shopping cart
      </Link>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

/*  <Link to={successLink}>stripe success page</Link>  */

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

const useOptions = () => {
  const options = useMemo(() => ({
    style: {
      base: {
        fontSize: "20px",
        color: "#424770",
        fontFamily: "Roboto, Source Code Pro, monospace, SFUIDisplay",
        "::placeholder": { color: "#aaaacc" }
      },
      invalid: {
        backgroundColor: "#ffd0db",
        color: "#9e2146"
      }
    }
  }));

  return options;
};

const StripeCreditCardForm = (props) => {
  const navigate = useNavigate();
  const successLink = props.successLink;
  const testMode = props.testMode;
  const amountInteger = props.amountInteger;
  const amountDisplay = props.amountDisplay;
  const stripePromise = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [payIcon, setPayIcon] = useState({ icon: faCreditCard, spin: false });
  const [errorMessage, setErrorMessage] = useState({
    on: false,
    field: null,
    message: null
  });
  const [email, setEmail] = useState(null);

  let stripeSecretKey = "sk_test_tN0JNQsxVA6hJekv699aRqbY00MqX4ONBw";
  if (!testMode) {
    stripeSecretKey = process.env.REACT_APP_STRIPE_SECRET_KEY;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPayIcon({ icon: faSpinner, spin: true });

    if (!stripePromise || !elements) {
      setErrorMessage({
        on: true,
        field: "all",
        message: "Error loading the credit card form."
      });
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const paymentMethod = await stripePromise.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });

    if (paymentMethod.error) {
      //alert(JSON.stringify(paymentMethod.error));
      let field = "cvc";
      if (paymentMethod.error.code.includes("number")) {
        field = "cardNumber";
      }
      if (paymentMethod.error.code.includes("expiry")) {
        field = "expirationDate";
      }

      setPayIcon({ icon: faCreditCard, spin: false });
      setErrorMessage({
        on: true,
        field: field,
        message: paymentMethod.error.message
      });
    } else {
      const paymentMethodId = paymentMethod.paymentMethod.id;

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Bearer " + stripeSecretKey
        },
        body:
          "amount=" +
          amountInteger +
          "&currency=usd&confirm=true&payment_method=" +
          paymentMethodId +
          "&receipt_email=" +
          email
      };
      const response = await fetch(
        "https://api.stripe.com/v1/payment_intents",
        requestOptions
      );
      const paymentIntent = await response.json();

      if (paymentIntent.error) {
        setPayIcon({ icon: faCreditCard, spin: false });
        setErrorMessage({
          on: true,
          field: "card",
          message: paymentIntent.error.message
        });
      } else {
        // PAYMENT SUCCESS
        //alert("PaymentIntent = " + JSON.stringify(paymentIntent));
        navigate(successLink, { replace: true });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ErrorMessage errorMessage={errorMessage} />
      <div className="caption">
        <label>
          Email
          <input
            className="StripeElement stripeEmail"
            name="email"
            type="email"
            placeholder="jane.doe@example.com"
            required
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </label>
        <label>
          Card number
          <CardNumberElement
            className="stripeCardNumber"
            options={options}
            onChange={(event) => {
              if (errorMessage.field === "cardNumber") {
                setErrorMessage({
                  on: false,
                  field: null,
                  message: null
                });
              }
            }}
          />
        </label>
        <label>
          Expiration date
          <CardExpiryElement
            className="stripeExpiration"
            options={options}
            onChange={(event) => {
              if (errorMessage.field === "expirationDate") {
                setErrorMessage({
                  on: false,
                  field: null,
                  message: null
                });
              }
            }}
          />
        </label>
        <label>
          CVC
          <CardCvcElement
            className="stripeCvc"
            options={options}
            onChange={(event) => {
              if (errorMessage.field === "cvc") {
                setErrorMessage({
                  on: false,
                  field: null,
                  message: null
                });
              }
            }}
          />
        </label>
        <button className="greenButton" type="submit" disabled={!stripePromise}>
          <FontAwesomeIcon icon={payIcon.icon} spin={payIcon.spin} />
          &nbsp;&nbsp;Pay&nbsp;${amountDisplay}
        </button>
      </div>
    </form>
  );
};

const ErrorMessage = (props) => {
  let errorMessage = props.errorMessage;
  let message = null;

  if (errorMessage.on) {
    message = errorMessage.message;
    return (
      <div style={{ margin: "20px 0px" }}>
        <span className="errorMessage">
          <FontAwesomeIcon icon={faTriangleExclamation} />
          &nbsp;&nbsp;
          {message}
        </span>
        <br />
      </div>
    );
  } else {
    return null;
  }
};

export default StripeCheckoutComponent;
