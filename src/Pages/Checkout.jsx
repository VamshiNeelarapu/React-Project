import React, { useEffect } from "react";
import CheckputPage from "../Components/Checkout/CheckoutPage";

function Checkout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <CheckputPage />
    </div>
  );
}

export default Checkout;
