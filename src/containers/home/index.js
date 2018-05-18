import React, { Component } from "react";
import BackgroundSlideshow from "react-background-slideshow";
import image1 from "./image-1.jpg";
import image2 from "./image-2.jpg";
import image3 from "./image-3.jpg";
import image4 from "./image-4.jpg";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Link
          to="/online-restaurant/about"
          className="btn welcome-btn btn--ghost"
        >
          Welcome to Curry Bowl
        </Link>
        <BackgroundSlideshow
          images={[image1, image2, image3, image4]}
          disableClick={true}
        />
      </div>
    );
  }
}

export default Home;
