import React from "react";
import "./Item.css";

export default function Item(props) {
  return (
    <article className="Card">
      <img src={props.img} alt={props.title} className="image" />
      <footer>
        <div className="food_flex">
          <h4 className="food_title">{props.title}</h4>
          <h4 className="food_price">₹{props.price}</h4>
        </div>
        <p className="food_desc"> {props.desc}</p>
      </footer>
    </article>
  );
}
