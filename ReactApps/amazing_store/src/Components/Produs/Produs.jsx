import React from "react";
import "../Produs/Produs.css";
// import axios from "axios";

// axios
//   .get("https://localhost:5000")
//   .then(function(response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function(error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function() {
//     // always executed
//   });

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
