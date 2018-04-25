import React, { Component } from "react";
import menubg from "./menubg.jpg";

class Menu extends Component {
  render() {
    return (
      <div className="menu-container">
        <h1 className="heading">THE MENU</h1>
        <div className="menu-wrapper">
          <h2 className="">STARTERS</h2>
          <div className="row">
            <div className="col-sm-12 col-md-6" />
            <div className="col-sm-12 col-md-6" />
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
