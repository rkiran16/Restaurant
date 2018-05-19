import React, { Component } from "react";
import menubg from "./menubg.jpg";
import { connect } from "react-redux";
import Footer from "../../components/footer/footer";
import Collapsible from "react-collapsible";

class Menu extends Component {
  createMenu = menu => {
    return menu.map((item, index) => (
      <Collapsible
        key={index}
        trigger={item.name}
        lazyRender={true}
        open={index == 0 ? true : false}
      >
        {item.items.map((menuItem, menuItemIndex) => (
          <div
            key={menuItemIndex}
            className="d-flex justify-content-between px-4 py-2"
          >
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
      </Collapsible>
    ));
  };

  render() {
    return (
      <div className="menu-container">
        <h1 className="heading">THE MENU</h1>
        <div className="container menu-wrapper">
          {this.createMenu(this.props.menu)}
        </div>
        <Footer />
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
