import React from "react";
import { Link } from "react-router-dom";

export default function Why() {
  return (
    <div style={{ margin: "100px" }}>
      <div className="row" style={{ paddingBottom: "30px" }}>
        <div className="col-md-5">
          <h1 style={{ paddingBottom: "30px" }}>In short 👋</h1>
          <p style={{ paddingBottom: "30px" }}>Say no to expensive coorporate hiring😎</p>
          <p style={{ paddingBottom: "20px" }}>
            {" "}
            <strong>💡 did you know most of IT service based companies hires students as intern for work at very less pay.</strong>
          </p>
          <p style={{ paddingBottom: "30px" }}>
            we are part of revolution where we are working toward diminishing the gap between student learning and earning. student developers who work hard
            deserves better incentives.
          </p>
          <p>By hiring us you will not only have best IT services at your disposal but you will become part of great cause and revolution.</p>
        </div>
      </div>
      <div className="row" style={{ paddingBottom: "30px" }}>
        <div className="col-md-5">
          <h1 style={{ paddingBottom: "20px" }}>Why us 👇</h1>
          <p style={{ paddingBottom: "20px" }}>● We provide very affordable prices in compare to other IT services providers</p>
          <p style={{ paddingBottom: "20px" }}>
            ● We want to save students and IT service requirer like you from those middleman who charge absurd prices to you for their services and pay very
            less to students they hire in name of internship.
          </p>
          <p style={{ paddingBottom: "20px" }}>
            ● We connect developers directly to recruiter by eliminating third party middleman and cutting cost of operations hence saving your money.
          </p>
          <p style={{ paddingBottom: "20px" }}>● We hire highly skilled student developer who work under guidance of industry experts.</p>
          <p style={{ paddingBottom: "20px" }}>
            ● as our developers are students who are always learning new tech. services provided by our developers will be highly oriented with ever evolving
            new technology and so will be your product.
          </p>

          <p style={{ paddingBottom: "20px" }}>● you will be hiring new and fresh mindset of developer who are open to new opportunities and hard tasks.</p>
          <p style={{ paddingBottom: "20px" }}>
            ● If you have a startup idea, you can find highly motivated and tech enthusiastic developers to take it to the next big step.
          </p>
          <p style={{ paddingBottom: "20px" }}>
            ● We are not like other service based company , our team of developer is focussed solely on your project providing best service and support for you.
          </p>
          <p style={{ paddingBottom: "20px" }}>So what are you waiting for 🤗!!</p>
          <div className=" gtco-banner" style={{ width: "100%" }}>
            <div className="row">
              {/* <Link to="/opportunity" className="mohirti" style={{ marginRight: "30px" }}>
                  Find Work
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </Link> */}
              <div className="col" style={{ marginBottom: "10%" }}>
                <Link className=" btn btn-primary btn-lg" to="/contact">
                  Contact us
                  {/* <i className="fa fa-angle-right" aria-hidden="true" /> */}
                </Link>
              </div>
              <div className="col">
                <Link className=" btn btn-primary" to="/hireus">
                  Hire us
                  {/* <i className="fa fa-angle-right" aria-hidden="true" /> */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
