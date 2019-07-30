import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import Contact from "../Contact/Contact";
import NavigationBar from "../NavigationBar/NavigationBar";
import SearchBar from "../SearchBar/SearchBar";
import Mycart from "../MyCart/MyCart";

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-top-container">
          <Logo />
          <Contact />
          <NavigationBar />
        </div>
        <div className="header-bottom-container">
          <SearchBar />
          <Mycart />
        </div>
      </div>
    );
  }
}
export default Header;
