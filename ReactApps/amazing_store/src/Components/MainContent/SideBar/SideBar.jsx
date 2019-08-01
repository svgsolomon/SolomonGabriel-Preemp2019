import React from "react";
import "../SideBar/SideBar.css";
import "../../Acordeon/Acordeon";
import Acordeon from "../../Acordeon/Acordeon";

const SideBar = props => {
  return (
    <div className="sidebar-container">
      {props.categories.map((category, index) => {
        return (
          <Acordeon key={index} title={category.key} value={category.value} />
        );
      })}
    </div>
  );
};

export default SideBar;
