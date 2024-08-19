import React from "react";
import "./FinalCheck.css";

function finalCheckout() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        paddingBottom: "30px",
      }}
    >
      <img src="green-tick.gif" className="finalTick" />
      <h3>Thank you! Your order is placed!</h3>
    </div>
  );
}

export default finalCheckout;
