import React, { Component } from "react";
import locationImg from "./location.png";

class Location extends Component {
  render() {
    return (
      <div className="map-container">
        <a
          target="_blank"
          className="location-image"
          rel="noopener noreferrer"
          href="https://www.google.com/maps/place/1700+Fennell+St,+Maitland,+FL+32751/@28.6272448,-81.4011086,17z/data=!3m1!4b1!4m5!3m4!1s0x88e770e38af9c3a5:0x829ced45f27b7e61!8m2!3d28.6272401!4d-81.3989199?hl=en"
        >
          <img src={locationImg} alt="CURRY BOWL" />
        </a>
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
