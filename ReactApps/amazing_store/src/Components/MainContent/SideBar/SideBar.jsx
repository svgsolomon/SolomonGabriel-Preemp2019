import React from "react";
import "../SideBar/SideBar.css";
const SideBar = props => {
  console.log("fooo", props);
  const categories = Object.keys(props.categories);
  console.log("categories array:", categories);
  return (
    <div className="sidebar-container">
      {categories.map((category, index) => {
        return (
          <button key={index} className="button-category-name">
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default SideBar;
