import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-content">
          <Link to="/online-restaurant">
            <img className="logo" src={Logo} alt="Curry Bowl" />
          </Link>
          <div className="hamburger-container">
            <input id="hamburger" type="checkbox" />
            <label for="hamburger">
              <div className="hamburger">
                <span />
                <span />
                <span />
              </div>
            </label>
            <nav>
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
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
