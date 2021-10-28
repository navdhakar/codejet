import React from "react";
import { Link } from "react-router-dom";

export default function Why() {
  return (
    <div style={{ margin: "100px" }}>
      <div className="row" style={{ paddingBottom: "30px" }}>
        <div className="col-md-5">
          <h1>Intro 👋</h1>
          <p>
            we are part of revolution where we are working toward diminishing the gap between student learning and earning. student developers who work hard
            deserves better incentives.
          </p>
        </div>
      </div>
      <div className="row" style={{ paddingBottom: "30px" }}>
        <div className="col-md-5">
          <h1 style={{ paddingBottom: "20px" }}>Why us 👇</h1>
          <p style={{ paddingBottom: "20px" }}>● We provide very affordable prices in compare to other IT services providers</p>
          <p style={{ paddingBottom: "20px" }}>
            ● We want to save students and IT service requirer like you from those middleman who charge absurd prices to you for their services and pay very
            less to students they hire in name of internship
          </p>

          <p style={{ paddingBottom: "20px" }}>
            ● as our developers are students who are always learning new tech. provided by our developers will be highly oriented with ever evolving new
            technology so will your product
          </p>

          <p style={{ paddingBottom: "20px" }}>● you will be hiring new and fresh mindset of developer which is open to new opportunities and hard tasks.</p>
          <p style={{ paddingBottom: "20px" }}>
            ● If you have a startup idea, you can find highly motivated and tech enthusiastic developers to take it to the next big step.
          </p>
          <p style={{ paddingBottom: "20px" }}>
            ● We are not like other service based company , our team of developer is focussed solely on your project providing best service and support for you.
          </p>
          <p style={{ paddingBottom: "20px" }}>So what are you waiting for 🤗!!</p>
          <div className="container-fluid gtco-banner-area">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="navnik">
                    {/* <Link to="/opportunity" className="mohirti" style={{ marginRight: "30px" }}>
                  Find Work
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </Link> */}
                    <Link to="/contact" className="mohirti" style={{ marginRight: "30px", marginLeft: "-35px" }}>
                      Contact us
                      <i className="fa fa-angle-right" aria-hidden="true" />
                    </Link>
                    <Link to="/hireus">
                      Hire us
                      <i className="fa fa-angle-right" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
