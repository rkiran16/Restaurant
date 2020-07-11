import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <Link to="/restaurant" className="link">
            Home
          </Link>
          <Link to="/restaurant/about" className="link">
            About
          </Link>
          <Link to="/restaurant/menu" className="link">
            Menu
          </Link>
          <Link to="/restaurant/catering" className="link">
            Catering
          </Link>
          <Link to="/restaurant/location" className="link">
            Location & Hours
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
