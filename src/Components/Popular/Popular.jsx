import React, { useState } from "react";
import "./Popular.css";
import Item from "../Item/Item";
import axios from "axios";
import { useEffect } from "react";

const Popular = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      let response = await axios.get("http://localhost:8000/products");
      setProducts(response.data);
    };
    getProducts();
  }, []);

  return (
    <div className="popular">
      <h1>Popular in Fashion</h1>
      <hr />
      <div className="popularItem">
        {products.map((item, index) => {
          return (
            <Item
              key={index}
              title={item.title}
              description={item.description}
              mrp={item.MRP}
              price={item.price}
              discount={item.discount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
