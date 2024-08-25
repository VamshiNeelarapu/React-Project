import React, { useEffect } from "react";
import "./FinalCheck.css";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const FinalCheckout = () => {
  useEffect(() => {
    toast.success("Confirmation mail sent!");
  }, []);
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        paddingBottom: "30px",
      }}
    >
      <Toaster />
      <img src="green-tick.gif" className="finalTick" />
      <h3>Thank you! Your order is placed!</h3>
    </div>
  );
};

export default FinalCheckout;
