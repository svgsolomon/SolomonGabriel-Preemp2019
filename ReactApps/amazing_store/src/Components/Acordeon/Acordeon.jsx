import React from "react";

class Acordeon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activ: false
    };
  }
  render() {
    // const values = this.props.value.map((element, index) => {
    //   return <li key={index}>{element}</li>;
    // });

    let values = null;
    if (this.state.activ === true) {
      values = this.props.value.map((element, index) => {
        return (
          <li className="sidebar-items" key={index}>
            {element}
          </li>
        );
      });
    }
    const toggleActiv = () => {
      this.setState({ activ: !this.state.activ });
    };

    return (
      <>
        <div onClick={toggleActiv}>{this.props.title}</div>
        <div>{values}</div>
      </>
    );
  }
}
export default Acordeon;
