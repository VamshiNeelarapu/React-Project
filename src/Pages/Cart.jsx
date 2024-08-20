import React, { useContext } from "react";
import CartPage from "../Components/Cart/CartPage";
import AuthContext from "../Context/AuthContext";

const Cart = () => {
  const { isAuthenticated, user } = useContext(AuthContext);
  return (
    <div>
      {!isAuthenticated ? (
        <h1>Sign in to view your cartList!</h1>
      ) : (
        <div>
          <h1> {user.name}'s Cart</h1>
          <CartPage />
        </div>
      )}
    </div>
  );
};

export default Cart;
