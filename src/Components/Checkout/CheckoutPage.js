import React, { useState, useContext } from "react";
import "./CheckoutPage.css";
import AuthContext from "../../Context/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";

const CheckputPage = () => {
  const { isAuthenticated, user } = useContext(AuthContext);
  const [name, setname] = useState([user.name]);
  const [paymentForm, setPaymentForm] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolderName: "",
  });

  const [touched, setTouched] = useState({
    cardNumber: false,
    expiryDate: false,
    cvv: false,
    cardHolderName: false,
  });

  const formatCardNumber = (value) => {
    return value
      .replace(/\s?/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
  };

  const filterAlphabetic = (value) => {
    return value.replace(/[^a-zA-Z\s]/g, "");
  };

  const filterNumeric = (value) => {
    return value.replace(/[^0-9]/g, "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "cardNumber") {
      formattedValue = formatCardNumber(value);
    } else if (name === "cardHolderName") {
      formattedValue = filterAlphabetic(value);
    } else if (name === "cvv") {
      formattedValue = filterNumeric(value);
    }

    setPaymentForm({
      ...paymentForm,
      [name]: formattedValue,
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const validate = () => {
    const errors = {};
    const cardNumberWithoutSpaces = paymentForm.cardNumber.replace(/\s/g, "");
    if (!cardNumberWithoutSpaces || cardNumberWithoutSpaces.length < 16) {
      errors.cardNumber = "Invalid card number. ";
    }
    if (
      !paymentForm.expiryDate ||
      !/^(0[1-9]|1[0-2])\/\d{2}$/.test(paymentForm.expiryDate)
    ) {
      errors.expiryDate = " Enter in MM/YY format";
    }
    if (!paymentForm.cvv || paymentForm.cvv.length !== 3) {
      errors.cvv = " Enter your valid 3-digit CVV";
    }
    if (!paymentForm.cardHolderName || paymentForm.cardHolderName.length < 3) {
      errors.cardHolderName = " Enter the Card Holder ";
    }
    return errors;
  };

  const errors = validate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted", paymentForm);
    } else {
      console.log("Errors", errors);
    }
  };

  const onClick = () => {
    // console.log(name);
    let flag = false;

    if (user.name != "") {
      console.log("VALID");

      axios
        .get(`http://localhost:9000/users?name=${user.name}`)
        .then((user) => {
          user.data[0].cart = [];

          axios
            .put(`http://localhost:9000/users/${user.data[0].id}`, user.data[0])
            .then(console.log(user.data[0].cart));
        });
    }
  };

  return (
    <div className="paymentcontainers">
      <div className="payment-form">
        <h2>Payment</h2>
        <div className="imgs">
          <img src="mastercard.png" alt="Mastercard" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="Enter card number"
              className="form-control"
              value={paymentForm.cardNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              maxLength="19"
            />
            {touched.cardNumber && errors.cardNumber && (
              <div className="invalid">{errors.cardNumber}</div>
            )}
          </div>

          <div className="form-group">
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              placeholder="MM/YY"
              value={paymentForm.expiryDate}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.expiryDate && errors.expiryDate && (
              <div className="invalid">{errors.expiryDate}</div>
            )}
          </div>

          <div className="form-group">
            <input
              type="text"
              id="cvv"
              name="cvv"
              placeholder="CVV"
              value={paymentForm.cvv}
              onChange={handleChange}
              onBlur={handleBlur}
              maxLength="3"
            />
            {touched.cvv && errors.cvv && (
              <div className="invalid">{errors.cvv}</div>
            )}
          </div>

          <div className="form-group">
            <input
              type="text"
              id="cardHolderName"
              name="cardHolderName"
              placeholder="Cardholder name"
              value={paymentForm.cardHolderName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.cardHolderName && errors.cardHolderName && (
              <div className="invalid">{errors.cardHolderName}</div>
            )}
          </div>
          <Link to="/finalcheckout">
            <button type="submit" id="paymentbtn" onClick={() => onClick()}>
              Proceed To Pay
            </button>
          </Link>

          <br />
        </form>
      </div>
    </div>
  );
};

export default CheckputPage;
