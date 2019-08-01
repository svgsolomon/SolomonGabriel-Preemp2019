import React from "react";
import "../Filters/Filters.css";

const Filters = () => {
  return (
    <>
      <div className="filters">
        <div className="brand">
          <span className="brand-filter">
            Brand: <span className="filter-blue">All brands</span>
          </span>
          <span className="skin-filter">
            Skin type: <span className="filter-blue">For oily skin</span>
          </span>
          <span className="age-filter">
            Age: <span className="filter-blue">30+</span>
          </span>
        </div>
        <div className="sort">
          <span className="sort-by">
            Sort: <span className="filter-blue">By Popularity</span>
          </span>
        </div>
      </div>
    </>
  );
};
export default Filters;
