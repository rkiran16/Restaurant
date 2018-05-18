import React, { Component } from "react";
import Pin from "./pin.png";

class StoreLocation extends Component {
  render() {
    return (
      <div className="location">
        <img src={Pin} alt="location" className="wow pulse" />
        <a
          target="_blank"
          href="https://www.google.com/maps/place/1700+Fennell+St,+Maitland,+FL+32751/@28.6272448,-81.4011086,17z/data=!3m1!4b1!4m5!3m4!1s0x88e770e38af9c3a5:0x829ced45f27b7e61!8m2!3d28.6272401!4d-81.3989199?hl=en"
        >
          Curry Bowl on Google Maps{" "}
        </a>
      </div>
    );
  }
}

export default StoreLocation;
