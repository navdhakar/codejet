import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <div className="container-fluid" style={{ marginTop: "80px", alignItems: "center" }} id="gtco-footer">
        <div className="container">
          <div className="row">
            <div className="col" id="contact">
              <h4>Student Register </h4>
              <input type="text" className="form-control" placeholder="Username" />
              <input type="email" className="form-control" placeholder="Email Address" />
              <input type="text" className="form-control" placeholder="College name" />
              <input type="text" className="form-control" placeholder="College branch/course" />

              <input type="text" className="form-control" placeholder="College year" />
              <input type="text" className="form-control" placeholder="Github profile" />
              <input type="password" className="form-control" placeholder="Password" />
              <a href="/" className="submit-button">
                Sign-Up <i className="fa fa-angle-right" aria-hidden="true" />
              </a>
              <h5 style={{ marginTop: "20px" }}>
                <Link to="/login">Already have an account?</Link>
              </h5>
            </div>
            <div className="col-md-6">
              <div className="card">
                <img className="card-img-top img-fluid" src="images/banner-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
