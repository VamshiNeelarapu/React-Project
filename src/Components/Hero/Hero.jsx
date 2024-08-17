import React from "react";
import Carousel from "react-bootstrap/Carousel";
import HeroCarouselImage from "./HeroCarouselImage";
import hero_section_1 from "../Assets/hero-section.jpg";
import hero_section_2 from "../Assets/h2.jpg";
import hero_section_3 from "../Assets/h3.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <Carousel fade>
        <Carousel.Item>
          <HeroCarouselImage image={hero_section_1} />
        </Carousel.Item>
        <Carousel.Item>
          <HeroCarouselImage image={hero_section_2} />
        </Carousel.Item>
        <Carousel.Item>
          <HeroCarouselImage image={hero_section_3} />
        </Carousel.Item>
      </Carousel>
      <div className="hero-message">
        <div className="welcome">UPGRADE YOUR FASHION</div>
        <div className="subtext">Find your perfect fit today</div>
        <button className="btn-4">
          <span>Shop Now</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
