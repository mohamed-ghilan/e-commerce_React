import React from "react";
import "./ExploreMenue.css";
import { menu_list } from "../../assets/assets";

const ExploreMenue = ({category, setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
        inventore suscipit doloremque optio enim ipsam maiores asperiores
        laboriosam officia autem odio explicabo tempora
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
              ></img>
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr></hr>
    </div>
  );
};

export default ExploreMenue;
