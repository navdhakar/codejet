import React from "react";

function Contact() {
  return (
    <div>
      <div
        className="container-fluid"
        style={{ marginTop: "80px" }}
        id="gtco-footer"
      >
        <div className="container">
          <div className="row">
            <div className="col" id="contact">
              <h4> Contact Us </h4>
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
              />
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
              />
              <textarea
                className="form-control"
                placeholder="Message"
                defaultValue={""}
              />
              <a href="/" className="submit-button">
                READ MORE <i className="fa fa-angle-right" aria-hidden="true" />
              </a>
            </div>
            <div className="col-md-6">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src="images/banner-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
