import React, { Component } from "react";
import Home from "../home";
import Map from "./map";

class Location extends Component {
  render() {
    return (
      <div className="map-container">
        <Map />
        <div className="location-details">
          <div className="content">
            <h3 className="mb-4">LOCATION & HOURS</h3>
            <p className="mb-2">1700 Fennell St</p>
            <p className="mb-2">MaitLand, FL 32751</p>
            <p>
              <a className="link" href="tel://1-407-745-0868">
                (407) 745-0868
              </a>
            </p>
            <h4 className="mb-4">BUSINESS HOURS</h4>
            <p>
              Monday-Sunday{" "}
              <i className="d-inline-flex ml-3">11AM TO 10.00PM</i>
            </p>
            <h6 className="mb-3">Lunch Buffet</h6>
            <p>
              Monday-Thursday{" "}
              <i className="d-inline-flex ml-3">11AM TO 2.20PM</i>
            </p>
            <p>
              Saturday-Sunday{" "}
              <i className="d-inline-flex ml-3">11:30AM TO 3PM</i>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Location;
