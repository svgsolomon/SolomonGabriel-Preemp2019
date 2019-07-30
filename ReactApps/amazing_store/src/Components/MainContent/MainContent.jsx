import React from "react";
import SideBar from "./SideBar/SideBar";

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: {
        FACE: [
          "Creams & gels",
          "Patches",
          "Emulsions",
          "Toners",
          "Face cleansing",
          "Make up removal",
          "Scrubs",
          "Peeling",
          "Masks"
        ],
        BODY: [],
        FOOT: [],
        HANDS: [],
        HAIR: [],
        MAKEUP: []
      }
    };
  }

  render() {
    return <SideBar categories={this.state.categories} />;
  }
}

export default MainContent;
