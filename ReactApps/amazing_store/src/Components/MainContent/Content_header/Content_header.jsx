import React from "react";
import "../Content_header/Content_header.css";
const Content_header = () => {
  return (
    <div className="content-header">
      <div className="content-header-text">
        <h2>Creams & gels</h2>
      </div>

      <div className="pagination">
        <h4>
          Showing {60} of {392}
        </h4>
        <div className="arrows">
          <span className="arrow-left">
            <i className="fas fa-chevron-left" />
          </span>
          <span className="arrow-right">
            <i className="fas fa-chevron-right" />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Content_header;
