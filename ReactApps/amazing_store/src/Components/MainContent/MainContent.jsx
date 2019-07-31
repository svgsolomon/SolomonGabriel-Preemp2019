import React from "react";
import SideBar from "./SideBar/SideBar";

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // categories: {
      //   FACE: [
      //     "Creams & gels",
      //     "Patches",
      //     "Emulsions",
      //     "Toners",
      //     "Face cleansing",
      //     "Make up removal",
      //     "Scrubs",
      //     "Peeling",
      //     "Masks"
      //   ],
      //   BODY: [],
      //   FOOT: [],
      //   HANDS: [],
      //   HAIR: [],
      //   MAKEUP: []
      // }
      categories: [
        {
          key: "FACE",
          value: [
            "Creams & gels",
            "Patches",
            "Emulsions",
            "Toners",
            "Face cleansing",
            "Make up removal",
            "Scrubs",
            "Peeling",
            "Masks"
          ]
        },
        {
          key: "BODY",
          value: [
            "Creams & gels",
            "Patches",
            "Emulsions",
            "Toners",
            "Face cleansing",
            "Make up removal",
            "Scrubs",
            "Peeling",
            "Masks"
          ]
        },
        {
          key: "FOOT",
          value: [
            "Creams & gels",
            "Patches",
            "Emulsions",
            "Toners",
            "Face cleansing",
            "Make up removal",
            "Scrubs",
            "Peeling",
            "Masks"
          ]
        },
        {
          key: "HANDS",
          value: [
            "Creams & gels",
            "Patches",
            "Emulsions",
            "Toners",
            "Face cleansing",
            "Make up removal",
            "Scrubs",
            "Peeling",
            "Masks"
          ]
        },
        {
          key: "HAIR",
          value: [
            "Creams & gels",
            "Patches",
            "Emulsions",
            "Toners",
            "Face cleansing",
            "Make up removal",
            "Scrubs",
            "Peeling",
            "Masks"
          ]
        }
      ]
    };
  }

  render() {
    return (
      <>
        <SideBar categories={this.state.categories} />;
      </>
    );
  }
}

export default MainContent;
