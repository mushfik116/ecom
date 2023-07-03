import React from "react";
import Checkout from "../features/checkout/Checkout";
import Navbar from "../features/navbar/Navbar";

const CheckoutPage = () => {
  return (
    <div>
      <Navbar>
        <Checkout />
      </Navbar>
    </div>
  );
};

export default CheckoutPage;
