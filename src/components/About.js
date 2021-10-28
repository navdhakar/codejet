import React from "react";

function About() {
  return (
    <div style={{ margin: "100px" }}>
      <div className="row" style={{ paddingBottom: "30px" }}>
        <div className="col-md-5">
          <h1>Who we are?</h1>
          <p>
            we are team of developer focussed in improving countries IT space by connecting startups with top notch and dedicated student developers across
            various colleges and revolutionizing student learning and earning at same time.
          </p>
        </div>
      </div>
      <div className="row" style={{ paddingBottom: "30px" }}>
        <div className="col-md-5">
          <h1>What we do?</h1>
          <p>We provide best IT services from top of the class student developers across at very affordable prices .</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <h1>How we do?</h1>
          <p>We hire highly dedicated students from various colleges across country to provide best IT services and support for startups and businesses.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
