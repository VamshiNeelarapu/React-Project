import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import MenuContext from "../../Context/MenuContext";

const Navbar = () => {
  const { selectedMenu, setSelectedMenu } = useContext(MenuContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" width="150px" />
      </div>
      <ul className="nav-menu">
        <li onClick={() => setSelectedMenu("Shop")}>
          <NavLink
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "none" : "none",
                color: isActive ? "Hotpink" : "white",
              };
            }}
            to="/"
          >
            Shop
          </NavLink>
          {selectedMenu === "Shop" ? <hr /> : ""}
        </li>
        <li onClick={() => setSelectedMenu("Men")}>
          <NavLink
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "none" : "none",
                color: isActive ? "Hotpink" : "white",
              };
            }}
            to="/mens"
          >
            Mens
          </NavLink>
          {selectedMenu === "Men" ? <hr /> : ""}
        </li>
        <li onClick={() => setSelectedMenu("Women")}>
          <NavLink
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "none" : "none",
                color: isActive ? "Hotpink" : "white",
              };
            }}
            to="/womens"
          >
            Womens
          </NavLink>
          {selectedMenu === "Women" ? <hr /> : ""}
        </li>
        <li onClick={() => setSelectedMenu("Accessories")}>
          <NavLink
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "none" : "none",
                color: isActive ? "Hotpink" : "white",
              };
            }}
            to="/accessories"
          >
            Accessories
          </NavLink>
          {selectedMenu === "Accessories" ? <hr /> : ""}
        </li>
        <li onClick={() => setSelectedMenu("About")}>
          <NavLink
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "none" : "none",
                color: isActive ? "Hotpink" : "white",
              };
            }}
            to="/about"
          >
            About
          </NavLink>
          {selectedMenu === "About" ? <hr /> : ""}
        </li>
      </ul>
      <div className="nav-login-cart">
        <NavLink to="/login">
          <button>Login</button>
        </NavLink>

        <NavLink
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "none" : "none",
              color: isActive ? "red" : "white",
              transition: isActive ? "0.5s" : "0.5s",
            };
          }}
          to="/wishlist"
        >
          <FontAwesomeIcon icon={faHeart} />
        </NavLink>
        <div className="nav-cart">
          <NavLink
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "none" : "none",
                color: isActive ? "Hotpink" : "white",
              };
            }}
            to="/cart"
          >
            <FontAwesomeIcon icon={faCartShopping} />
            <div className="nav-cart-count">0</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
