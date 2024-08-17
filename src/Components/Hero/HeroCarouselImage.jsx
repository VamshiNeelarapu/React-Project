import React from "react";

const HeroCarouselImage = (props) => {
  return (
    <div
      className="heroCarouselImage"
      style={{
        background: `linear-gradient(360deg, black, transparent), url(${props.image})`,
        height: "500px",
        width: "100vw",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default HeroCarouselImage;
