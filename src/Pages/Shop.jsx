import React, { useEffect } from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Banner from "../Components/Banner/Banner";
import { ParallaxProvider } from "react-scroll-parallax";
import Categories from "../Components/Categories/Categories";
import banner_image_1 from "../Images/pexels-pixabay-157886.jpg";
import banner_image_2 from "../Images/pexels-olly-845434.jpg";
import Trending from "../Components/HomePageSections/Trending";
import SpecialOffers from "../Components/HomePageSections/SpecialOffers";

const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const banner_popular = {
    position: "absolute",
    top: "20%",
    right: "133px",
    zIndex: "10",
    color: "white",
    textAlign: "center",
    padding: "20px",
  };

  const banner_offer = {
    position: "absolute",
    top: "20%",
    left: "20px",
    zIndex: "10",
    color: "white",
    textAlign: "center",
    padding: "20px",
  };

  return (
    <div>
      <ParallaxProvider>
        <Hero />
        <Categories />
        <Popular />
        <Banner
          image={banner_image_2}
          style={banner_offer}
          section="TRENDING"
        />
        <Trending />
        <Banner
          image={banner_image_1}
          style={banner_popular}
          section="SPECIAL OFFER"
        />
        <SpecialOffers />
      </ParallaxProvider>
    </div>
  );
};

export default Shop;
