import React from "react";
import {
  CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement
} from "@stripe/react-stripe-js";

import "./PaymentForm.css";

const ELEMENT_OPTIONS = {
  style: {
    base: {
      lineHeight: "24px",
      fontSize: "16px",
      fontWeight: "400",
      fontFamily: 'system-ui, "Helvetica Neue", sans-serif'
    }
  }
};

const PaymentFormSplitElementFields = () => {
  return (
    <>
      <label className="PaymentForm__field PaymentForm__numberField">
        Card Number
        <CardNumberElement options={ELEMENT_OPTIONS} />
      </label>
      <label className="PaymentForm__field PaymentForm__expiryField">
        Expiration
        <CardExpiryElement options={ELEMENT_OPTIONS} />
      </label>
      <label className="PaymentForm__field PaymentForm__cvcField">
        CVC
        <CardCvcElement options={ELEMENT_OPTIONS} />
      </label>
    </>
  );
};

const PaymentFormCombinedElementField = () => {
  return (
    <label className="PaymentForm__field PaymentForm__cardField">
      Card details
      <CardElement options={ELEMENT_OPTIONS} />
    </label>
  );
};

const PaymentFormNoElementsFields = () => {
  return (
    <>
      <label className="PaymentForm__field PaymentForm__numberField">
        Card Number
        <input
          className="PaymentForm__input"
          placeholder="1234 1234 1234 1234"
        />
      </label>
      <label className="PaymentForm__field PaymentForm__expiryField">
        Expiration
        <input className="PaymentForm__input" placeholder="MM / YY" />
      </label>
      <label className="PaymentForm__field PaymentForm__cvcField">
        CVC
        <input className="PaymentForm__input" placeholder="CVC" />
      </label>
    </>
  );
};

const PaymentForm = ({ impl, onCancel }) => {
  const handleSubmit = e => {
    e.preventDefault();

    window.alert("Not implemented");
  };

  return (
    <form className="PaymentForm">
      <label className="PaymentForm__field PaymentForm__nameField">
        Name on card
        <input className="PaymentForm__input" />
      </label>
      {impl === "SPLIT_ELEMENTS" && <PaymentFormSplitElementFields />}
      {impl === "COMBINED_ELEMENT" && <PaymentFormCombinedElementField />}
      {impl === "NO_ELEMENTS" && <PaymentFormNoElementsFields />}
      <div className="PaymentForm__actions">
        <button
          type="button"
          className="PaymentForm__action"
          onClick={onCancel}
        >
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
  );
};

export default PaymentForm;
