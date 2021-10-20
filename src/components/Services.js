import React from "react";

function Services() {
  return (
    <div>
      <div className="container-fluid gtco-features" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h2>
                {" "}
                Explore The Services
                <br />
                We Offer For You{" "}
              </h2>
              <p>
                we provide rich set of services like web app development, mobile
                app development, UI/UX design and many more to make your
                business grow fast and making it current technology ready.{" "}
              </p>
              <a href="/">
                All Services{" "}
                <i className="fa fa-angle-right" aria-hidden="true" />
              </a>
            </div>
            <div className="col-lg-8">
              <svg id="bg-services" width="100%" viewBox="0 0 1000 800">
                <defs>
                  <linearGradient
                    id="PSgrad_02"
                    x1="64.279%"
                    x2="0%"
                    y1="76.604%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      stopColor="rgb(1,230,248)"
                      stopOpacity={1}
                    />
                    <stop
                      offset="100%"
                      stopColor="rgb(29,62,222)"
                      stopOpacity={1}
                    />
                  </linearGradient>
                </defs>
                <path
                  fillRule="evenodd"
                  opacity="0.102"
                  fill="url(#PSgrad_02)"
                  d="M801.878,3.146 L116.381,128.537 C26.052,145.060 -21.235,229.535 9.856,312.073 L159.806,710.157 C184.515,775.753 264.901,810.334 338.020,792.380 L907.021,652.668 C972.912,636.489 1019.383,573.766 1011.301,510.470 L962.013,124.412 C951.950,45.594 881.254,-11.373 801.878,3.146 Z"
                />
              </svg>
              <div className="row">
                <div className="col">
                  <div className="card text-center">
                    <div className="oval">
                      <img
                        className="card-img-top"
                        src="images/web-design.png"
                        alt=""
                      />
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">Web Design</h3>
                      <p className="card-text">
                        Making highly responsive <br />
                        and modernised web application
                      </p>
                    </div>
                  </div>
                  <div className="card text-center">
                    <div className="oval">
                      <img
                        className="card-img-top"
                        src="images/marketing.png"
                        alt=""
                      />
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">SEO</h3>
                      <p className="card-text">
                        Services for growing your website traffic from organic
                        search results
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card text-center">
                    <div className="oval">
                      <img
                        className="card-img-top"
                        src="images/seo.png"
                        alt=""
                      />
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">App develpoment</h3>
                      <p className="card-text">
                        We offer top-notch mobile app development services
                      </p>
                    </div>
                  </div>
                  <div className="card text-center">
                    <div className="oval">
                      <img
                        className="card-img-top"
                        src="images/graphics-design.png"
                        alt=""
                      />
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">UI/UX Design</h3>
                      <p className="card-text">
                        Highly interactive and modern UI/UX designs
                      </p>
                    </div>
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

export default Services;
