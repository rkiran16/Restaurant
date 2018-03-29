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
            <div className="col-sm-12 col-md-6">
              <ul className="menu">
                <li className="menu__item">
                  <h6>
                    <span className="title">Campo Lindo Chicken</span>
                    <span className="price">$24.95</span>
                  </h6>
                  <p class="menu-list__item-desc">
                    <span class="desc__content">
                      Fava beans, artchokes, farro &amp; black current gastrique
                    </span>
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6" />
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
