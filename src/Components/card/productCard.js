import "./productCard.css";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import AuthContext from "../../Context/AuthContext";
import toast, { Toaster } from "react-hot-toast";

function Card({ loadProducts, data }) {
  useEffect(() => {
    loadProducts();
  }, []);

  const [cart, setCart] = useState([]);
  const [test, setTest] = useState();

  const { isAuthenticated, user } = useContext(AuthContext);

  const addToCart = (item) => {
    let flag = false;
    cart.forEach((response) => {
      if (response.id === item.id) flag = true;
    });
    if (flag) return;

    setCart([...cart, item]);

    return axios.post(
      "http://localhost:9000/users?user_id=Vamshi/cartList",
      item
    );
  };

  const onAddWishlist = (product) => {
    let flag = false;

    if (isAuthenticated && user && user.name) {
      console.log("VALID");

      axios
        .get(`http://localhost:9000/users?name=${user.name}`)
        .then((response) => {
          const userData = response.data[0];
          userData.wishlist.forEach((item) => {
            if (item.id === product.id) {
              flag = true;
              return;
            }
          });

          if (!flag) {
            userData.wishlist.push(product);

            axios
              .put(`http://localhost:9000/users/${userData.id}`, userData)
              .then(() => {
                console.log(userData.wishlist);
                toast.success("Wishlisted Successfully!");
              });
          } else {
            toast.error("Already Added");
          }
        });
    } else {
      toast.error("Log in to add items to your wishlist.");
    }
  };

  const onAddCartlist = (product) => {
    let flag = false;

    if (isAuthenticated && user && user.name) {
      console.log("VALID");

      axios
        .get(`http://localhost:9000/users?name=${user.name}`)
        .then((response) => {
          const userData = response.data[0];
          userData.cart.forEach((item) => {
            if (item.id === product.id) {
              flag = true;
              return;
            }
          });

          if (!flag) {
            userData.cart.push(product);

            axios
              .put(`http://localhost:9000/users/${userData.id}`, userData)
              .then(() => {
                console.log(userData.cart);
                toast.success("Added to Cart!");
              });
          } else {
            toast.error("Already Added");
          }
        });
    } else {
      toast.error("Log in to add items to your cart.");
    }
  };

  return (
    <div className="card-container">
      <Toaster
        toastOptions={{
          success: {
            iconTheme: {
              primary: "green",
              secondary: "black",
            },
          },
          error: {
            iconTheme: {
              primary: "red",
              secondary: "black",
            },
          },
        }}
      />
      {data.length === 0 ? (
        <h2>Search results not found...</h2>
      ) : (
        data.map((item, index) => (
          <div key={index} className="card proCard">
            <img className="proImage" src={item.image} alt="Product Image" />
            <div className="rating">
              <FaStar className="activeStar" />
              <FaStar className="activeStar" />
              <FaStar className="activeStar" />
              <FaStar className="activeStar" />
              <FaStar className="inactiveStar" />
            </div>
            <p className="proCompany">{item.Company}</p>
            <p className="proTitle">{item.title}</p>
            <div className="proPrice">
              <sup>₹ </sup>
              {item.Price} <s className="MRP">₹{item.MRP}</s>
            </div>
            <button className="cart" onClick={() => onAddCartlist(item)}>
              <FaShoppingCart />
            </button>
            <button className="wish" onClick={() => onAddWishlist(item)}>
              <FaHeart />
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Card;
