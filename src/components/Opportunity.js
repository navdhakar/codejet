import React from "react";

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
            timer-startdate={1634026795}
            timer-enddate={1634322599}
            timer-prelaunchenddate
            timer-type="campaign-timer"
          >
            <div
              id="homepage-carousel"
              className="carousel slide"
              data-ride="carousel"
              data-interval={5000}
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#homepage-carousel"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#homepage-carousel" data-slide-to={1} />
                <li data-target="#homepage-carousel" data-slide-to={2} />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div
                    id="sale-banner-container"
                    className="campaign-banner festive-offer-banner-1 "
                  >
                    <div id="banner-wrapper">
                      <div className="sale-banner-content">
                        <div className="content-wrapper">
                          <div className="timer-container">
                            <div className="timer-image desktop-timer">
                              <img
                                src="/static/images/home/sale/Festive_Offer_Sale/timer1.svg"
                                alt="banner"
                              />
                            </div>
                            <div id="timer" className="timer">
                              00d:00h:00m:00s
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item  ">
                  <div className="jos-banner-container job-specialization-digital-marketing">
                    <div className="jos-details-container">
                      <div className="jos-banner-content">
                        <h1 className="heading">
                          Job Oriented Specialization in Digital Marketing
                        </h1>
                        <p className="subheading">
                          A comprehensive industry oriented specialization
                          course that prepares freshers and professionals to
                          start a career in Digital Marketing.
                        </p>
                        <a
                          href="/job-specialization-digital-marketing/?tracking_source=IST_homepage_banner"
                          className="btn btn-primary regular"
                        >
                          Know more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="jos-banner-container job-specialization-data-science">
                    <div className="jos-details-container">
                      <div className="jos-banner-content">
                        <h1 className="heading">
                          Job Oriented Specialization in Data Science
                        </h1>
                        <p className="subheading">
                          A comprehensive industry oriented program to help you
                          build a career in Data Science and land a 3LPA+ job.
                        </p>
                        <a
                          href="/job-specialization-data-science/?tracking_source=IST_homepage_banner"
                          className="btn btn-primary regular"
                        >
                          Know more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="heading" id="know-more">
            Online Trainings we offer
          </p>
          <div id="courses-container" className="max-width-container">
            <div id="MostPopular" className="category-container">
              <div className="category-heading">
                Most Popular
                <span className="course-count">(10)</span>
              </div>
              <div className="custom-carousel" data-category="Most_Popular">
                <div className="slider">
                  <div className="slider-item ">
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                      <div className="course-card">
                        <div className="tag-slant tag-slant-top-left">
                          <span>75% OFF</span>
                        </div>
                        <div className="course-image">
                          <img
                            className="img-responsive"
                            src="/cached_uploads/home/images/web-development.jpg"
                            alt="Web Development"
                          />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Web Development</h4>
                          <p className="course-caption">
                            Learn how to create a website from scratch
                          </p>
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
                                    <div id="know-more-box">
                                      Know more
                                      <i
                                        className="is-icon-chevron-right-bold-s"
                                        aria-hidden="true"
                                        style={{}}
                                      />
                                    </div>
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
                        <div className="tag-slant tag-slant-top-left">
                          <span>75% OFF</span>
                        </div>
                        <div className="course-image">
                          <img
                            className="img-responsive"
                            src="/cached_uploads/home/images/digital-marketing.jpg"
                            alt="Digital Marketing"
                          />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Digital Marketing</h4>
                          <p className="course-caption">
                            Learn SEO, Search Engine Marketing, Web Analytics
                            and more
                          </p>
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
                                    <div id="know-more-box">
                                      Know more
                                      <i
                                        className="is-icon-chevron-right-bold-s"
                                        aria-hidden="true"
                                        style={{}}
                                      />
                                    </div>
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
                        <div className="tag-slant tag-slant-top-left">
                          <span>75% OFF</span>
                        </div>
                        <div className="course-image">
                          <img
                            className="img-responsive"
                            src="/cached_uploads/home/images/financial-modeling-valuation.jpg"
                            alt="Financial Modeling and Valuation"
                          />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">
                            Financial Modeling and Valuation
                          </h4>
                          <p className="course-caption">
                            Learn financial modeling and valuation techniques
                            from scratch
                          </p>
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
                                    <div id="know-more-box">
                                      Know more
                                      <i
                                        className="is-icon-chevron-right-bold-s"
                                        aria-hidden="true"
                                        style={{}}
                                      />
                                    </div>
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
                <div className="navigation-container  ">
                  <div className="navigation">
                    <i className="control left disabled" aria-hidden="true" />
                    <div className="indicators-container">
                      <div
                        className="indicators"
                        id="indicators-Most_Popular"
                      ></div>
                    </div>
                    <i className="control right" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
            <div id="Programming" className="category-container">
              <div className="category-heading">
                Programming
                <span className="course-count">(20)</span>
              </div>
              <div className="custom-carousel" data-category="Programming">
                <div className="slider">
                  <div className="slider-item ">
                    <a href="/python-training/?tracking_source=trainings-cards">
                      <div className="course-card">
                        <div className="tag-slant tag-slant-top-left">
                          <span>75% OFF</span>
                        </div>
                        <div className="course-image">
                          <img
                            className="img-responsive"
                            src="/cached_uploads/home/images/python.jpg"
                            alt="Programming with Python"
                          />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">
                            Programming with Python
                          </h4>
                          <p className="course-caption">
                            Build a fantasy cricket game using Python language
                          </p>
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
                                    <div id="know-more-box">
                                      Know more
                                      <i
                                        className="is-icon-chevron-right-bold-s"
                                        aria-hidden="true"
                                        style={{}}
                                      />
                                    </div>
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
                        <div className="tag-slant tag-slant-top-left">
                          <span>75% OFF</span>
                        </div>
                        <div className="course-image">
                          <img
                            className="img-responsive"
                            src="/cached_uploads/home/images/web-development.jpg"
                            alt="Web Development"
                          />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Web Development</h4>
                          <p className="course-caption">
                            Learn how to create a website from scratch
                          </p>
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
                                    <div id="know-more-box">
                                      Know more
                                      <i
                                        className="is-icon-chevron-right-bold-s"
                                        aria-hidden="true"
                                        style={{}}
                                      />
                                    </div>
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
                    <a href="/hacking-training/?tracking_source=trainings-cards">
                      <div className="course-card">
                        <div className="tag-slant tag-slant-top-left">
                          <span>75% OFF</span>
                        </div>
                        <div className="course-image">
                          <img
                            className="img-responsive"
                            src="/cached_uploads/home/images/hacking.jpg"
                            alt="Ethical Hacking"
                          />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Ethical Hacking</h4>
                          <p className="course-caption">
                            Learn to hack and secure web applications
                          </p>
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
                                    <div id="know-more-box">
                                      Know more
                                      <i
                                        className="is-icon-chevron-right-bold-s"
                                        aria-hidden="true"
                                        style={{}}
                                      />
                                    </div>
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
                    <a href="/c-plus-plus-training/?tracking_source=trainings-cards">
                      <div className="course-card">
                        <div className="tag-slant tag-slant-top-left">
                          <span>75% OFF</span>
                        </div>
                        <div className="course-image">
                          <img
                            className="img-responsive"
                            src="/cached_uploads/home/images/c-plus-plus.jpg"
                            alt="Programming with C and C++"
                          />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">
                            Programming with C and C++
                          </h4>
                          <p className="course-caption">
                            Build a strong programming foundation by learning C
                            and C++
                          </p>
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
                                    <div id="know-more-box">
                                      Know more
                                      <i
                                        className="is-icon-chevron-right-bold-s"
                                        aria-hidden="true"
                                        style={{}}
                                      />
                                    </div>
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
                    <a href="/android-training/?tracking_source=trainings-cards">
                      <div className="course-card">
                        <div className="tag-slant tag-slant-top-left">
                          <span>75% OFF</span>
                        </div>
                        <div className="course-image">
                          <img
                            className="img-responsive"
                            src="/cached_uploads/home/images/android.jpg"
                            alt="Android App Development"
                          />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">
                            Android App Development
                          </h4>
                          <p className="course-caption">
                            Build your own food ordering app
                          </p>
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
                                    <div id="know-more-box">
                                      Know more
                                      <i
                                        className="is-icon-chevron-right-bold-s"
                                        aria-hidden="true"
                                        style={{}}
                                      />
                                    </div>
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
                    <a href="/clinical-trials-analysis-reporting-training/?tracking_source=trainings-cards">
                      <div className="course-card">
                        <div className="tag-slant tag-slant-top-left">
                          <span>75% OFF</span>
                        </div>
                        <div className="course-image">
                          <img
                            className="img-responsive"
                            src="/cached_uploads/home/images/clinical-trials-analysis-reporting.jpg"
                            alt="Clinical Trial Analysis & Reporting"
                          />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">
                            Clinical Trial Analysis &amp; Reporting
                          </h4>
                          <p className="course-caption">
                            Learn to use SAS Programming for drug development!
                          </p>
                          <div className="course-block-footer-treatment">
                            <div className="duration-view">
                              Duration:
                              <span style={{ fontWeight: 500 }}>4 weeks</span>
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
                                    <div id="know-more-box">
                                      Know more
                                      <i
                                        className="is-icon-chevron-right-bold-s"
                                        aria-hidden="true"
                                        style={{}}
                                      />
                                    </div>
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
                    <a href="/matlab-training/?tracking_source=trainings-cards">
                      <div className="course-card">
                        <div className="tag-slant tag-slant-top-left">
                          <span>75% OFF</span>
                        </div>
                        <div className="course-image">
                          <img
                            className="img-responsive"
                            src="/cached_uploads/home/images/matlab.jpg"
                            alt="MATLAB"
                          />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">MATLAB</h4>
                          <p className="course-caption">
                            Master the platform used by millions of engineers
                            and scientists!
                          </p>
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
                                    <div id="know-more-box">
                                      Know more
                                      <i
                                        className="is-icon-chevron-right-bold-s"
                                        aria-hidden="true"
                                        style={{}}
                                      />
                                    </div>
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
                    <a href="/software-testing-training/?tracking_source=trainings-cards">
                      <div className="course-card">
                        <div className="tag-slant tag-slant-top-left">
                          <span>75% OFF</span>
                        </div>
                        <div className="course-image">
                          <img
                            className="img-responsive"
                            src="/cached_uploads/home/images/software-testing.jpg"
                            alt="Software Testing"
                          />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Software Testing</h4>
                          <p className="course-caption">
                            Master the Java basics, automation testing, and
                            Selenium!
                          </p>
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
                                    <div id="know-more-box">
                                      Know more
                                      <i
                                        className="is-icon-chevron-right-bold-s"
                                        aria-hidden="true"
                                        style={{}}
                                      />
                                    </div>
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
                    <a href="/nodejs-training/?tracking_source=trainings-cards">
                      <div className="course-card">
                        <div className="tag-slant tag-slant-top-left">
                          <span>75% OFF</span>
                        </div>
                        <div className="course-image">
                          <img
                            className="img-responsive"
                            src="/cached_uploads/home/images/nodejs.jpg"
                            alt="Node JS"
                          />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Node JS</h4>
                          <p className="course-caption">
                            Master the runtime environment used by Netflix,
                            Amazon, and IBM!
                          </p>
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
                                    <div id="know-more-box">
                                      Know more
                                      <i
                                        className="is-icon-chevron-right-bold-s"
                                        aria-hidden="true"
                                        style={{}}
                                      />
                                    </div>
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
                    <a href="/robotic-process-automation-training/?tracking_source=trainings-cards">
                      <div className="course-card">
                        <div className="tag-slant tag-slant-top-left">
                          <span>75% OFF</span>
                        </div>
                        <div className="course-image">
                          <img
                            className="img-responsive"
                            src="/cached_uploads/home/images/robotic-process-automation.jpg"
                            alt="Robotic Process Automation"
                          />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">
                            Robotic Process Automation
                          </h4>
                          <p className="course-caption">
                            Learn to build automation solutions using UiPath
                          </p>
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
                                    <div id="know-more-box">
                                      Know more
                                      <i
                                        className="is-icon-chevron-right-bold-s"
                                        aria-hidden="true"
                                        style={{}}
                                      />
                                    </div>
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
                    <a href="/plc-programming-training/?tracking_source=trainings-cards">
                      <div className="course-card">
                        <div className="tag-slant tag-slant-top-left">
                          <span>75% OFF</span>
                        </div>
                        <div className="course-image">
                          <img
                            className="img-responsive"
                            src="/cached_uploads/home/images/plc-programming.jpg"
                            alt="PLC Programming"
                          />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">PLC Programming</h4>
                          <p className="course-caption">
                            Build efficient PLC programs for industrial
                            automation projects!
                          </p>
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
                                    <div id="know-more-box">
                                      Know more
                                      <i
                                        className="is-icon-chevron-right-bold-s"
                                        aria-hidden="true"
                                        style={{}}
                                      />
                                    </div>
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
                    <a href="/ar-vr-training/?tracking_source=trainings-cards">
                      <div className="course-card">
                        <div className="tag-slant tag-slant-top-left">
                          <span>75% OFF</span>
                        </div>
                        <div className="course-image">
                          <img
                            className="img-responsive"
                            src="/cached_uploads/home/images/ar-vr.jpg"
                            alt="AR/VR"
                          />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">AR/VR</h4>
                          <p className="course-caption">
                            Develop futuristic AR/VR technologies &amp; step
                            into a virtual world!
                          </p>
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
                                    <div id="know-more-box">
                                      Know more
                                      <i
                                        className="is-icon-chevron-right-bold-s"
                                        aria-hidden="true"
                                        style={{}}
                                      />
                                    </div>
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
                <div className="navigation-container  ">
                  <div className="navigation">
                    <i className="control left disabled" aria-hidden="true" />
                    <div className="indicators-container">
                      <div
                        className="indicators"
                        id="indicators-Programming"
                      ></div>
                    </div>
                    <i className="control right" aria-hidden="true" />
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
