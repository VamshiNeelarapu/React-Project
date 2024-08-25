import React, { useEffect } from "react";
import logo from "../logo.svg";
import AboutSection from "../Components/About/AboutSection";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about">
      <AboutSection />
    </div>
  );
};

export default About;
