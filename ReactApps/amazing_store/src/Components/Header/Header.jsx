import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import Contact from "../Contact/Contact";
import NavigationBar from "../NavigationBar/NavigationBar";
import SearchBar from "../SearchBar/SearchBar";

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
        </div>
      </div>
    );
  }
}
export default Header;
