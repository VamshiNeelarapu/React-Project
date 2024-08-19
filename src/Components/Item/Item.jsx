import React from "react";
import "./Item.css";

const Item = (props) => {
  return (
    <div className="item">
      <img className="something" src={props.image} alt="" />
      <p>{props.title}</p>
      {/* <p>{props.description}</p> */}
      <div className="item-prices">
        {/* <p>MRP: ${props.mrp}</p> */}
        {/* <p>Discount: {props.discount}%</p> */}
        {/* <p>Price: ${props.price}</p> */}
      </div>
    </div>
  );
};

export default Item;
