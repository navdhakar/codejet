import React from "react";
import { Link } from "react-router-dom";
import banner1 from "../banner1.jpg";
function Opportunity() {
  return (
    <div>
      <div>
        <div id="content" className="content-no-padding">
          <div
            id="banner-content"
            className="content-no-padding"
            timer
            timer-show={1}
            timer-message="timer"
            timer-placeholder
            timer-prelaunchenddate
            timer-type="campaign-timer"
          >
            <div id="homepage-carousel" className="carousel slide" data-ride="carousel" data-interval={5000}>
              <ol className="carousel-indicators">
                <li data-target="#homepage-carousel" data-slide-to={0} className="active" />
                <li data-target="#homepage-carousel" data-slide-to={1} />
                <li data-target="#homepage-carousel" data-slide-to={2} />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="jos-banner-container job-specialization-digital-marketing">
                    <div className="jos-details-container">
                      <div className="jos-banner-content">
                        <h1 className="heading">Helping Businessess in all domains</h1>
                        <p className="subheading">
                          Succesfully delivered digital products and platform for a diverse range of use cases across key industries.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item  ">
                  <div className="jos-banner-container job-specialization-digital-marketing">
                    <div className="jos-details-container">
                      <div className="jos-banner-content">
                        <h1 className="heading">Innovation is happening fast</h1>
                        <p className="subheading">
                          Our business is tech. We stay ahead of the disruption curve, so you can focus on what matters human experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="jos-banner-container job-specialization-data-science">
                    <div className="jos-details-container">
                      <div className="jos-banner-content">
                        <h1 className="heading">Go live in days and weeks, not in months and years</h1>
                        <p className="subheading">
                          we have created 100+ developer support case that that have saved our customers 1000+ hours in consulting fees.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="heading" id="know-more">
            Projects
          </p>


         
          
              <div className="row">
                    {/* <Link to="/opportunity" className="mohirti" style={{ marginRight: "30px" }}>
                  Find Work
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </Link> */}
                <div className="col" >

                    <Link className="btn btn-primary" to="/Opportunity" style={{float: "right" ,marginbottom: "5%"}}>
                      Free Internship 
                      {/* <i className="fa fa-angle-right" aria-hidden="true" /> */}
                    </Link>
                    </div>
                <div className="col" >

                    <Link to="/paid" className="btn btn-primary">
                      Paid Internship
                      {/* <i className="fa fa-angle-right" aria-hidden="true" /> */}
                    </Link>
                    </div>
                
              </div>
          
          


          <div id="courses-container" className="max-width-container">
            <div id="MostPopular" className="category-container">
              <div className="category-heading">
                Freshers
                <span className="course-count">(3)</span>
              </div>
              <div className="custom-carousel" data-category="Most_Popular">
                <div className="slider">
                  <div className="slider-item ">
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                      <div className="course-card">
                        <div className="course-image">
                          <img className="img-responsive" src="/topll.png" alt="Web Development" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Web Development</h4>
                          <p className="course-caption">Learn how to create a website from scratch</p>
                          <div className="course-block-footer-treatment">
                            <div className="duration-view">
                              Duration:
                              <span style={{ fontWeight: 500 }}>8 weeks</span>
                            </div>
                            <div className="know-more-button">
                              <div className="underline-animate">
                                <div
                                  className="line-container"
                                  style={{
                                    paddingTop: "8px",
                                    paddingLeft: "8px",
                                    paddingBottom: "6px",
                                  }}
                                >
                                  <span className="hover hover-1 line-span">
                                    <Link to="#" className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase" style={{ color: "blue" }}>
                                      Apply
                                    </Link>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="slider-item ">
                    <a href="/digital-marketing-training/?tracking_source=trainings-cards">
                      <div className="course-card">
                        {/* <div className="tag-slant tag-slant-top-left">
                          <span>75% OFF</span>
                        </div> */}
                        <div className="course-image">
                          <img className="img-responsive" src="/cached_uploads/home/images/digital-marketing.jpg" alt="Digital Marketing" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Digital Marketing</h4>
                          <p className="course-caption">Learn SEO, Search Engine Marketing, Web Analytics and more</p>
                          <div className="course-block-footer-treatment">
                            <div className="duration-view">
                              Duration:
                              <span style={{ fontWeight: 500 }}>8 weeks</span>
                            </div>
                            <div className="know-more-button">
                              <div className="underline-animate">
                                <div
                                  className="line-container"
                                  style={{
                                    paddingTop: "8px",
                                    paddingLeft: "8px",
                                    paddingBottom: "6px",
                                  }}
                                >
                                  <span className="hover hover-1 line-span">
                                    <Link to="#" className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase" style={{ color: "blue" }}>
                                      Apply
                                    </Link>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="slider-item ">
                    <a href="/financial-modeling-valuation-training/?tracking_source=trainings-cards">
                      <div className="course-card">
                        <div className="course-image">
                          <img
                            className="img-responsive"
                            src="/cached_uploads/home/images/financial-modeling-valuation.jpg"
                            alt="Financial Modeling and Valuation"
                          />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Financial Modeling and Valuation</h4>
                          <p className="course-caption">Learn financial modeling and valuation techniques from scratch</p>
                          <div className="course-block-footer-treatment">
                            <div className="duration-view">
                              Duration:
                              <span style={{ fontWeight: 500 }}>6 weeks</span>
                            </div>
                            <div className="know-more-button">
                              <div className="underline-animate">
                                <div
                                  className="line-container"
                                  style={{
                                    paddingTop: "8px",
                                    paddingLeft: "8px",
                                    paddingBottom: "6px",
                                  }}
                                >
                                  <span className="hover hover-1 line-span">
                                    <Link to="#" className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase" style={{ color: "blue" }}>
                                      Apply
                                    </Link>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="slider-item ">
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                      <div className="course-card">
                        <div className="course-image">
                          <img className="img-responsive" src="/cached_uploads/home/images/web-development.jpg" alt="Web Development" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Web Development</h4>
                          <p className="course-caption">Learn how to create a website from scratch</p>
                          <div className="course-block-footer-treatment">
                            <div className="duration-view">
                              Duration:
                              <span style={{ fontWeight: 500 }}>8 weeks</span>
                            </div>
                            <div className="know-more-button">
                              <div className="underline-animate">
                                <div
                                  className="line-container"
                                  style={{
                                    paddingTop: "8px",
                                    paddingLeft: "8px",
                                    paddingBottom: "6px",
                                  }}
                                >
                                  <span className="hover hover-1 line-span">
                                    <Link to="#" className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase" style={{ color: "blue" }}>
                                      Apply
                                    </Link>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="courses-container" className="max-width-container">
            <div id="MostPopular" className="category-container">
              <div className="category-heading">
                Intermediate level
                <span className="course-count">(3)</span>
              </div>
              <div className="custom-carousel" data-category="Most_Popular">
                <div className="slider">
                  <div className="slider-item ">
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                      <div className="course-card">
                        <div className="course-image">
                          <img className="img-responsive" src="/cached_uploads/home/images/web-development.jpg" alt="Web Development" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Web Development</h4>
                          <p className="course-caption">Learn how to create a website from scratch</p>
                          <div className="course-block-footer-treatment">
                            <div className="duration-view">
                              Duration:
                              <span style={{ fontWeight: 500 }}>8 weeks</span>
                            </div>
                            <div className="know-more-button">
                              <div className="underline-animate">
                                <div
                                  className="line-container"
                                  style={{
                                    paddingTop: "8px",
                                    paddingLeft: "8px",
                                    paddingBottom: "6px",
                                  }}
                                >
                                  <span className="hover hover-1 line-span">
                                    <Link to="#" className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase" style={{ color: "blue" }}>
                                      Apply
                                    </Link>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="slider-item ">
                    <a href="/digital-marketing-training/?tracking_source=trainings-cards">
                      <div className="course-card">
                        {/* <div className="tag-slant tag-slant-top-left">
                          <span>75% OFF</span>
                        </div> */}
                        <div className="course-image">
                          <img className="img-responsive" src="/cached_uploads/home/images/digital-marketing.jpg" alt="Digital Marketing" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Digital Marketing</h4>
                          <p className="course-caption">Learn SEO, Search Engine Marketing, Web Analytics and more</p>
                          <div className="course-block-footer-treatment">
                            <div className="duration-view">
                              Duration:
                              <span style={{ fontWeight: 500 }}>8 weeks</span>
                            </div>
                            <div className="know-more-button">
                              <div className="underline-animate">
                                <div
                                  className="line-container"
                                  style={{
                                    paddingTop: "8px",
                                    paddingLeft: "8px",
                                    paddingBottom: "6px",
                                  }}
                                >
                                  <span className="hover hover-1 line-span">
                                    <Link to="#" className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase" style={{ color: "blue" }}>
                                      Apply
                                    </Link>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="slider-item ">
                    <a href="/financial-modeling-valuation-training/?tracking_source=trainings-cards">
                      <div className="course-card">
                        <div className="course-image">
                          <img
                            className="img-responsive"
                            src="/cached_uploads/home/images/financial-modeling-valuation.jpg"
                            alt="Financial Modeling and Valuation"
                          />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Financial Modeling and Valuation</h4>
                          <p className="course-caption">Learn financial modeling and valuation techniques from scratch</p>
                          <div className="course-block-footer-treatment">
                            <div className="duration-view">
                              Duration:
                              <span style={{ fontWeight: 500 }}>6 weeks</span>
                            </div>
                            <div className="know-more-button">
                              <div className="underline-animate">
                                <div
                                  className="line-container"
                                  style={{
                                    paddingTop: "8px",
                                    paddingLeft: "8px",
                                    paddingBottom: "6px",
                                  }}
                                >
                                  <span className="hover hover-1 line-span">
                                    <Link to="#" className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase" style={{ color: "blue" }}>
                                      Apply
                                    </Link>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="slider-item ">
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                      <div className="course-card">
                        <div className="course-image">
                          <img className="img-responsive" src="/cached_uploads/home/images/web-development.jpg" alt="Web Development" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Web Development</h4>
                          <p className="course-caption">Learn how to create a website from scratch</p>
                          <div className="course-block-footer-treatment">
                            <div className="duration-view">
                              Duration:
                              <span style={{ fontWeight: 500 }}>8 weeks</span>
                            </div>
                            <div className="know-more-button">
                              <div className="underline-animate">
                                <div
                                  className="line-container"
                                  style={{
                                    paddingTop: "8px",
                                    paddingLeft: "8px",
                                    paddingBottom: "6px",
                                  }}
                                >
                                  <span className="hover hover-1 line-span">
                                    <Link to="#" className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase" style={{ color: "blue" }}>
                                      Apply
                                    </Link>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="courses-container" className="max-width-container">
            <div id="MostPopular" className="category-container">
              <div className="category-heading">
                Difficult level
                <span className="course-count">(3)</span>
              </div>
              <div className="custom-carousel" data-category="Most_Popular">
                <div className="slider">
                  <div className="slider-item ">
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                      <div className="course-card">
                        <div className="course-image">
                          <img className="img-responsive" src="/cached_uploads/home/images/web-development.jpg" alt="Web Development" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Web Development</h4>
                          <p className="course-caption">Learn how to create a website from scratch</p>
                          <div className="course-block-footer-treatment">
                            <div className="duration-view">
                              Duration:
                              <span style={{ fontWeight: 500 }}>8 weeks</span>
                            </div>
                            <div className="know-more-button">
                              <div className="underline-animate">
                                <div
                                  className="line-container"
                                  style={{
                                    paddingTop: "8px",
                                    paddingLeft: "8px",
                                    paddingBottom: "6px",
                                  }}
                                >
                                  <span className="hover hover-1 line-span">
                                    <Link to="#" className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase" style={{ color: "blue" }}>
                                      Apply
                                    </Link>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="slider-item ">
                    <a href="/digital-marketing-training/?tracking_source=trainings-cards">
                      <div className="course-card">
                        {/* <div className="tag-slant tag-slant-top-left">
                          <span>75% OFF</span>
                        </div> */}
                        <div className="course-image">
                          <img className="img-responsive" src="/cached_uploads/home/images/digital-marketing.jpg" alt="Digital Marketing" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Digital Marketing</h4>
                          <p className="course-caption">Learn SEO, Search Engine Marketing, Web Analytics and more</p>
                          <div className="course-block-footer-treatment">
                            <div className="duration-view">
                              Duration:
                              <span style={{ fontWeight: 500 }}>8 weeks</span>
                            </div>
                            <div className="know-more-button">
                              <div className="underline-animate">
                                <div
                                  className="line-container"
                                  style={{
                                    paddingTop: "8px",
                                    paddingLeft: "8px",
                                    paddingBottom: "6px",
                                  }}
                                >
                                  <span className="hover hover-1 line-span">
                                    <Link to="#" className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase" style={{ color: "blue" }}>
                                      Apply
                                    </Link>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="slider-item ">
                    <a href="/financial-modeling-valuation-training/?tracking_source=trainings-cards">
                      <div className="course-card">
                        <div className="course-image">
                          <img
                            className="img-responsive"
                            src="/cached_uploads/home/images/financial-modeling-valuation.jpg"
                            alt="Financial Modeling and Valuation"
                          />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Financial Modeling and Valuation</h4>
                          <p className="course-caption">Learn financial modeling and valuation techniques from scratch</p>
                          <div className="course-block-footer-treatment">
                            <div className="duration-view">
                              Duration:
                              <span style={{ fontWeight: 500 }}>6 weeks</span>
                            </div>
                            <div className="know-more-button">
                              <div className="underline-animate">
                                <div
                                  className="line-container"
                                  style={{
                                    paddingTop: "8px",
                                    paddingLeft: "8px",
                                    paddingBottom: "6px",
                                  }}
                                >
                                  <span className="hover hover-1 line-span">
                                    <Link to="#" className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase" style={{ color: "blue" }}>
                                      Apply
                                    </Link>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="slider-item ">
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                      <div className="course-card">
                        <div className="course-image">
                          <img className="img-responsive" src="/cached_uploads/home/images/web-development.jpg" alt="Web Development" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Web Development</h4>
                          <p className="course-caption">Learn how to create a website from scratch</p>
                          <div className="course-block-footer-treatment">
                            <div className="duration-view">
                              Duration:
                              <span style={{ fontWeight: 500 }}>8 weeks</span>
                            </div>
                            <div className="know-more-button">
                              <div className="underline-animate">
                                <div
                                  className="line-container"
                                  style={{
                                    paddingTop: "8px",
                                    paddingLeft: "8px",
                                    paddingBottom: "6px",
                                  }}
                                >
                                  <span className="hover hover-1 line-span">
                                    <Link to="#" className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase" style={{ color: "blue" }}>
                                      Apply
                                    </Link>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
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

export default Opportunity;
