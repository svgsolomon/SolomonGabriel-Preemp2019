import React from "react";
import "../Produs/Produs.css";
class Produs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="toate_produsele">
        <div className="produs">
          <img src={this.props.poza} alt="ceva" />
          <div className="descriere">{this.props.descriere} </div>
          <div className="pret">{this.props.pret}</div>
        </div>
      </div>
    );
  }
}
export default Produs;
