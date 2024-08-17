import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";

const Wishlist = () => {
  const { isAuthenticated, user } = useContext(AuthContext);
  return (
    <div>
      {!isAuthenticated ? (
        <h1>Sign in to view your wishlist!</h1>
      ) : (
        <h1> {user.name} Wishlist</h1>
      )}
    </div>
  );
};

export default Wishlist;
