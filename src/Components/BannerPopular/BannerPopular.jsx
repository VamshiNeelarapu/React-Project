import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import "./BannerPopular.css";

const BannerPopular = (props) => {
  return (
    <div className="banner-container">
      <ParallaxBanner
        layers={[{ image: props.image, speed: -50 }]}
        className="banner-image"
      />
      <div className="banner-content">
        <h1>2024</h1>
        <h3>FASHION TRENDS</h3>
        <h5>SPECIAL OFFER</h5>
      </div>
      <ParallaxBanner />
    </div>
  );
};

export default BannerPopular;
