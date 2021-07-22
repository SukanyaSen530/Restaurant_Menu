import React, { useState } from "react";
import "./Items.css";
import Item from "./Item";
import Categories from "./Categories";
import { menu } from "../data";

export default function Items() {
  const [foodList, setFoodList] = useState(menu);

  const fetchFood = (category) => {
    if (category === "all") {
      setFoodList(menu);
      return;
    } else {
      const newFoodList = menu.filter((food) => food.category === category);
      setFoodList(newFoodList);
    }
  };

  const displayFoodList = foodList.map((food) => (
    <Item key={food.id} {...food} />
  ));

  const categoryList = ["all", ...new Set(menu.map((item) => item.category))];

  return (
    <main>
      <h1 className="title">Restaurant Menu</h1>
      <div className="under-line"></div>
      <div className="display_menu">
        <Categories filterFood={fetchFood} categories={categoryList} />
      </div>
      <section>{displayFoodList}</section>
    </main>
  );
}
