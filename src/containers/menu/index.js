import React, { Component } from "react";
import menubg from "./menubg.jpg";
import { connect } from "react-redux";

class Menu extends Component {
  createSubMenu = subMenu => {
    return subMenu.map((item, index) => (
      <div className="mb-5">
        <h3 className="d-flex justify-content-start mb-3" key={index}>
          {item.name}
        </h3>
        {item.items.map((menuItem, menuItemIndex) => (
          <div className="d-flex justify-content-between mb-3">
            <div className="d-flex flex-column">
              <span className="d-flex lead">
                <strong>{menuItem.itemName}</strong>
              </span>
              <span className="d-flex">{menuItem.description}</span>
            </div>
            <span className="d-flex lead">
              <strong>{menuItem.price}</strong>
            </span>
          </div>
        ))}
      </div>
    ));
  };

  createMenu = menu => {
    return menu.map((item, index) => (
      <div>
        <h1
          className="d-flex justify-content-center text-uppercase"
          key={index}
        >
          {item.title}
        </h1>
        {this.createSubMenu(item.category.subCategory)}
      </div>
    ));
  };

  render() {
    return (
      <div className="menu-container">
        <h1 className="heading">THE MENU</h1>
        <div className="container menu-wrapper">
          {this.createMenu(this.props.menu)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.counter.count,
    menu: state.counter.menu
  };
}

export default connect(mapStateToProps)(Menu);
