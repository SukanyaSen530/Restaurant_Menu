import React from "react";

export default function Categories(props) {
  return (
    <>
      {props.categories.map((category, index) => (
        <button key={index} onClick={() => props.filterFood(category)}>
          {category}
        </button>
      ))}
    </>
  );
}
