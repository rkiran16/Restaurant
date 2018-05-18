import React, { Component } from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";

class Logo extends Component {
  render() {
    return (
      <div className="logo-container">
        <Link to="/online-restaurant">
          <img className="logo" src={logo} alt="Curry Bowl" />
        </Link>
        <p className="title">Indian CookHouse</p>
      </div>
    );
  }
}

export default Logo;
