import React, { useContext } from "react";
import category_1 from "../../Images/pexels-kpaukshtite-1460838.jpg";
import category_2 from "../../Images/pexels-olly-948873.jpg";
import category_3 from "../../Images/pexels-olly-839011.jpg";
import "./Categories.css";
import { Link } from "react-router-dom";
import MenuContext from "../../Context/MenuContext";

const Categories = () => {
  const { setSelectedMenu } = useContext(MenuContext);
  return (
    <div className="category-wrapper">
      <h1>Categories</h1>
      <hr />
      <div className="box">
        <Link to="/mens" onClick={() => setSelectedMenu("Men")}>
          <div class="card">
            <div class="imgBx">
              <img src={category_3} alt="images" />
            </div>
            <div class="details">
              <h2>
                <span>Mens</span>
              </h2>
            </div>
          </div>
        </Link>

        <Link to="/womens" onClick={() => setSelectedMenu("Women")}>
          <div class="card">
            <div class="imgBx">
              <img src={category_2} alt="images" />
            </div>
            <div class="details">
              <h2>
                <span>Womens</span>
              </h2>
            </div>
          </div>
        </Link>

        <Link to="/accessories" onClick={() => setSelectedMenu("Accessories")}>
          <div class="card">
            <div class="imgBx">
              <img src={category_1} alt="images" />
            </div>
            <div class="details">
              <h2>
                <span>Accessories</span>
              </h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
