import React from "react";
import ReactDOM from "react-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import App from "./App";
import "./index.css";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_TEST_PK);

ReactDOM.render(
  <Elements stripe={stripePromise}>
    <App />
  </Elements>,
  document.getElementById("root")
);
