import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-content">
          <Link to="/">
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
              <Link to="/" className="link">
                About Us
              </Link>
              <Link to="/menu" className="link">
                Menu
              </Link>
              <Link to="/" className="link">
                Catering
              </Link>
              <Link to="/" className="link">
                Gallery
              </Link>
              <Link to="/" className="link">
                Hours
              </Link>
              <Link to="/" className="link">
                Location
              </Link>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
