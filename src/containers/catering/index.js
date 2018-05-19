import React, { Component } from "react";
import StoreLocation from "../../components/footer/storelocation";

class Catering extends Component {
  render() {
    return (
      <div>
        <div className="catering-section">
          <form className="catering-form">
            <h3>
              Email Us! <hr className="hr-tick" />
            </h3>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="inputEmail5"
                placeholder="Subject"
              />
            </div>
            <div className="form-group">
              <textarea
                rows="6"
                className="form-control"
                id="inputEmail6"
                placeholder="Message"
              />
            </div>
            <div className="d-flex justify-content-center align-content-center">
              <button className="btn">SUBMIT</button>
            </div>
          </form>
        </div>
        <StoreLocation />
      </div>
    );
  }
}

export default Catering;
