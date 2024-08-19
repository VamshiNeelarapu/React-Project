import React, { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import HeroCarouselImage from "./HeroCarouselImage";
import hero_section_1 from "../Assets/hero-section.jpg";
import hero_section_2 from "../Assets/h2.jpg";
import hero_section_3 from "../Assets/h3.jpg";
import "./Hero.css";
import { NavLink, useNavigate } from "react-router-dom";
import MenuContext from "../../Context/MenuContext";
import AuthContext from "../../Context/AuthContext";

const Hero = () => {
  const { selectedMenu, setSelectedMenu } = useContext(MenuContext);
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
        <div className="welcome">DISCOVER YOUR UNIQUE STYLE</div>
        <div className="subtext">
          Explore the latest trends and find your perfect look with GlamCart
        </div>
        <button onClick={() => setSelectedMenu("Men")} className="btn-4">
          <NavLink
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "none" : "none",
                color: isActive ? "Hotpink" : "white",
              };
            }}
            to="/mens"
          >
            Shop Now
          </NavLink>
          {selectedMenu === "Men" ? <hr /> : ""}
          {/* <span>Shop Now</span> */}
        </button>
      </div>
    </div>
  );
};

export default Hero;
