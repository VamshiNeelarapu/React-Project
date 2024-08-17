import React from "react";
import logo from "../Assets/logo.png";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="footer">
      <div className="foot-panel">
        <div className="foot-list">
          <p>Get to Know Us</p>
          <li className="footer-list-hover">Careers</li>
          <li className="footer-list-hover">Blog</li>
          <li className="footer-list-hover">Press Releases</li>
          <li className="footer-list-hover">GlamCart Science</li>
        </div>

        <div className="foot-list">
          <p>Connect with Us</p>
          <li className="footer-list-hover">
            Facebook <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
          </li>
          <li className="footer-list-hover">
            Instagram <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </li>
          <li className="footer-list-hover">
            Twitter <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </li>
        </div>

        <div className="foot-list">
          <p>Make Money with Us</p>
          <li className="footer-list-hover">Sell on GlamCart</li>
          <li className="footer-list-hover">Sell under GlamCart</li>
          <li className="footer-list-hover">Become an Affiliate</li>
          <li className="footer-list-hover">Advertise Your Products</li>
        </div>

        <div className="foot-list">
          <p>Let Us Help You</p>
          <li className="footer-list-hover">COVID-19 and GlamCart</li>
          <li className="footer-list-hover">Your Account</li>
          <li className="footer-list-hover">Returns Centre</li>
          <li className="footer-list-hover">GlamCart App Download</li>
          <li className="footer-list-hover">Help</li>
        </div>
      </div>
      <div className="foot-panel2">
        <div className="logo">
          <img src={logo} alt="" width="150px" />
        </div>
        <div className="foot-lang">
          <select name="Language" id="foot-lang">
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Japanese">Japanese</option>
            <option value="Chinese">Chinese</option>
          </select>
        </div>
        <div className="foot-region">
          <i className="fa-regular fa-flag"></i>
          India
        </div>
      </div>
      <div className="foot-copyright">
        <div className="firstline">
          <a href="#">Copyright of Use and Sale</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Internet-Based Ads</a>
        </div>
        <div className="secondline">
          © 2024, GlamCart.com, Inc. or its affiliates
        </div>
      </div>
    </div>
  );
};

export default Footer;
