import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import "./Banner.css";

const Banner = (props) => {
  return (
    <div className="banner-container">
      <ParallaxBanner
        layers={[{ image: props.image, speed: -50 }]}
        className="banner-image"
      />
      <div className="banner-content" style={props.style}>
        <h1>2024</h1>
        <h3>FASHION TRENDS</h3>
        <h5>{props.section}</h5>
      </div>
      <ParallaxBanner />
    </div>
  );
};

export default Banner;
