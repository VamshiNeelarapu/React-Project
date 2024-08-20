import React from "react";
import styles from "./AboutSection.module.css";
import logo from "../Assets/logo.png";
import section_image_1 from "../../Images/pexels-pixabay-157675.jpg";
import section_image_2 from "../../Images/pexels-harsh-kushwaha-804217-1689731.jpg";

const About = () => {
  return (
    <div className={styles["about-wrapper"]}>
      <div className={styles["about-header"]}>
        <img src={logo} alt="logo" />
        <div className={styles["content"]}>
          <h1>About GlamCart</h1>
          <span>
            Welcome to GlamCart, where style meets convenience. Discover the
            story behind our passion for fashion and how we bring the latest
            trends right to your doorstep.
          </span>
        </div>
      </div>
      <div className={styles["about-section"]}>
        <div className={styles["content"]}>
          <h3>Our Purpose</h3>
          <span>
            At GlamCart, our purpose is to revolutionize the way you experience
            fashion. We believe everyone deserves to feel confident and stylish,
            no matter where they are. Our mission is to bring the latest trends
            and timeless classics directly to your doorstep, making high-quality
            fashion accessible and convenient for all. We are passionate about
            curating a diverse collection of apparel, accessories, and beauty
            products that cater to every style and occasion.
          </span>
        </div>
        <img src={section_image_1} alt="" />
      </div>
      <div className={styles["about-section"]}>
        <img src={section_image_2} alt="" />
        <div className={styles["content"]}>
          <h3>Our Values</h3>
          <span>
            Our values are the foundation of everything we do: <br />
            <br />
            <b>Inclusivity:</b> We celebrate diversity and believe that fashion
            should be for everyone. Our collections cater to a wide range of
            styles, sizes, and preferences, ensuring that everyone can find
            something they love.
            <br />
            <br />
            <b>Quality:</b> We are committed to offering products that meet the
            highest standards of quality. From the materials we choose to the
            craftsmanship of each piece, we ensure that our customers receive
            only the best.
            <br />
            <br />
            <b>Innovation:</b> We are always on the lookout for the latest
            trends and innovations in fashion. Our team works tirelessly to
            bring fresh, exciting styles to our customers, keeping them ahead of
            the curve.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
