import React, { Component } from "react";
import WOW from "wow.js";
import homeBG from "./home-bg.jpg";
import { Link } from "react-router-dom";
import ourStoryImage from "./restaurant.jpg";
import Footer from "../../components/footer/footer";

class Home extends Component {
  componentDidMount() {
    const wow = new WOW();
    wow.init();
  }

  render() {
    return (
      <div className="home">
        <div className="introduction">
          <div className="content wow fadeInDown">
            <h1 className="heading">Welcome to Curry Bowl</h1>
            <p>
              "Curry Bowl" is an authentic yet innovative Indian Restaurant,
              with a menu that honors tradition while reinventing it.
            </p>
            <Link to="/menu" className="btn">
              View Our Menu
            </Link>
          </div>
        </div>
        <div className="about">
          <div className="content wow fadeInLeft">
            <h3 className="heading">Our Story</h3>
            <p>
              Curry Bowl Indian Cuisine is family owned and operated. We
              understand and strive on such importance of cultural taste and
              diversity. We offer a full buffet for Indian dishes which varies
              from day-to-day. There are over 100 Indian dishes served here,
              that is why we encourage you to come again, so that you can
              explore the many different taste we have to offer.
            </p>
            <p>
              Our food “Curry Bowl” is simple, fresh and flavorful that appeals
              to all of the FIVE SENSES.
            </p>
          </div>
          <div className="image-container">
            <img src={ourStoryImage} className="img-fluid" alt="Our Story" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
