import React, { Component } from "react";
import Logo from "./logo.png";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="location">
          <a
            target="_blank"
            href="https://www.google.com/maps/place/4141+Hacks+Cross+Rd,+Memphis,+TN+38125/@35.03852,-89.795654,14z/data=!4m5!3m4!1s0x887f909f026b28a5:0x7a0da12ffd1f3f6c!8m2!3d35.0355972!4d-89.7966869?hl=en"
          >
            Curry Bowl on Google Maps{" "}
          </a>
        </div>
        <div className="footer-content">
          <div className="logo-container">
            <Link to="/">
              <img className="logo" src={Logo} alt="Curry Bowl" />
            </Link>
          </div>
          <div className="bottom-link">
            <h5>SITEMAP</h5>
            <ul>
              <li>
                <Link className="link" to="/">
                  HOME
                </Link>
              </li>
              <li>
                <Link className="link" to="/about">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link className="link" to="/menu">
                  MENU
                </Link>
              </li>
              <li>
                <Link className="link" to="/catering">
                  CATERING
                </Link>
              </li>
            </ul>
          </div>
          <div className="hours-container">
            <h5>BUSINESS HOURS</h5>
            <p className="timings">
              Monday-Sunday <span>11AM TO 10.00PM</span>
            </p>
            <h6>Lunch Buffet</h6>
            <p className="timings">
              Monday-Thursday <span>11AM TO 2.20PM</span>
            </p>
            <p className="timings timings--weekend">
              Saturday-Sunday <span>11:30AM TO 3PM</span>
            </p>
          </div>
          <div className="contacts-container">
            <h5>REACH US</h5>
            <p>4141 Hacks Cross Road, Memphis, TN 38125</p>
            <p>
              CALL US:{" "}
              <a className="link" href="tel://1-901-207-6051">
                (901) 207-6051
              </a>
            </p>

            <h6>FOLLOW US</h6>
            <ul>
              <li>FB</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <small>Curry Bowl © All Rights Reserved. 2017</small>
        </div>
      </footer>
    );
  }
}

export default Footer;
