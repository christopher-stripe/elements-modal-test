import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement
} from "@stripe/react-stripe-js";

import "./PaymentForm.css";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_TEST_PK);

const ELEMENT_OPTIONS = {
  style: {
    base: {
      lineHeight: "24px",
      fontSize: "16px",
      fontWeight: "400",
      fontFamily: 'system-ui, "Helvetica Neue", sans-serif'
    },
    ":focus": {}
  }
};

const PaymentForm = props => {
  const handleSubmit = e => {
    e.preventDefault();

    window.alert("Not implemented");
  };

  return (
    <Elements stripe={stripePromise}>
      <form className="PaymentForm">
        <label className="PaymentForm__field PaymentForm__nameField">
          Name on card
          <input className="PaymentForm__input" />
        </label>
        <label className="PaymentForm__field PaymentForm__numberField">
          Card Number
          <CardNumberElement options={{ ...ELEMENT_OPTIONS, showIcon: true }} />
        </label>
        <label className="PaymentForm__field PaymentForm__expiryField">
          Expiration
          <CardExpiryElement options={ELEMENT_OPTIONS} />
        </label>
        <label className="PaymentForm__field PaymentForm__cvcField">
          CVC
          <CardCvcElement options={ELEMENT_OPTIONS} />
        </label>
        <div className="PaymentForm__actions">
          <button className="PaymentForm__action" onClick={props.onCancel}>
            Cancel
          </button>
          <button
            type="submit"
            className="PaymentForm__action"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </Elements>
  );
};

export default PaymentForm;
