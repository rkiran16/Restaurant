import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Pin from "../../components/footer/pin.png";
const AnyReactComponent = () => (
  <img src={Pin} alt="location" className="wow pulse pin" />
);

export default class Map extends Component {
  static defaultProps = {
    center: { lat: 28.62724, lng: -81.39892 },
    zoom: 15
  };

  createMapOptions = function(maps) {
    return {
      panControl: false,
      mapTypeControl: false,
      scrollwheel: false,
      styles: [
        {
          stylers: [
            { saturation: -100 },
            { gamma: 0.8 },
            { lightness: 4 },
            { visibility: "on" }
          ]
        }
      ]
    };
  };

  render() {
    return (
      <div className="google-map">
        <GoogleMapReact
          defaultCenter={this.props.center}
          options={this.createMapOptions}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={28.62724} lng={-81.39892} />
        </GoogleMapReact>
      </div>
    );
  }
}
