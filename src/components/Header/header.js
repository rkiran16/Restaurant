import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/logo.png";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <Link to="/online-restaurant" className="link">
            Home
          </Link>
          <Link to="/online-restaurant/about" className="link">
            About
          </Link>
          <Link to="/online-restaurant/menu" className="link">
            Menu
          </Link>
          <Link to="/online-restaurant/catering" className="link">
            Catering
          </Link>
          <Link to="/online-restaurant/location" className="link">
            Location & Hours
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
