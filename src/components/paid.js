import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import banner1 from "../banner1.jpg";
// import "./Paid.css";
const server = process.env.NODE_ENV == "production" ? "https://codejet.herokuapp.com" : "http://127.0.0.1:8002";

function Paid() {
  let history = useHistory();

  const [profile_data, profile_load] = useState({});

  let selected_project = {};
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + ";path=/";
  }
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
  }
  const header_data = {
    "Content-Type": "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
  };
  if (getCookie("auth_token") != null || undefined) {
    header_data.authorization = getCookie("auth_token");
    console.log(header_data);
  } else {
    console.log(header_data);
  }
  useEffect(() => {
    fetch(`${server}/signup/register/current`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
      // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: header_data,
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body data type must match "Content-Type" header
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data fetched");
        // profile_data.name = data.name;
        // profile_data.email = data.email;
        // profile_data.college_name = data.college_name;
        // profile_data.college_year = data.college_year;
        // profile_data.college_branch = data.college_branch;
        // profile_data.github_profile = data.github_profile;
        // profile_load([]);
        profile_load({
          name: data.name,
          email: data.email,
          college_name: data.college_name,
          college_year: data.college_year,
          college_branch: data.college_branch,
          github_profile: data.github_profile,
          skills: data.skills,
        });

        console.log(data);
        console.log(profile_data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function project_data(title, disc, amnt, type) {
    console.log(title, disc, amnt, type);
    selected_project = {
      title: title,
      discription: disc,
      duration: amnt,
      type: type,
    };
    console.log(selected_project);
    // select_project_handler();
    // event.prevenDefault();
  }

  const select_project_handler = (event, title, disc, duration, type) => {
    console.log(title, disc, duration, type);
    selected_project = {
      title: title,
      discription: disc,
      duration: duration,
      type: type,
    };
    // console.log(selected_project);
    const log = getCookie("auth_token");

    if (!log) {
      history.push("/login");
    } else {
      const project_data = {
        name: profile_data.name,
        email: profile_data.email,
        college_name: profile_data.college_name,
        college_branch: profile_data.college_branch,
        college_year: profile_data.college_year,
        selected_project: selected_project,
      };
      const confirmBox = window.confirm("Do you really want to appyly for this project?");
      if (confirmBox === true) {
        fetch(`${server}/students/opportunity/selected_project`, {
          method: "POST",
          body: JSON.stringify(project_data), // *GET, POST, PUT, DELETE, etc.
          mode: "cors",
          // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: header_data,
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          // body data type must match "Content-Type" header
        })
          .then((res) => {
            if (res.status == 200) {
              history.push("/apply");
            }
            return res.json();
          })
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    }
    console.log(project_data);
    event.preventDefault();
  };

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
            style={{ height: "50%" }}
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

          <p className="heading" id="know-more" align="center">
            Projects
          </p>

          <div className="row">
            <div className="col">
              <Link className="btn btn-primary" to="/Paid" style={{ float: "right", marginbottom: "5%" }}>
                Free Internship
                {/* <i className="fa fa-angle-right" aria-hidden="true" /> */}
              </Link>
            </div>
            <div className="col">
              <Link to="/paid" className="btn btn-primary">
                Paid Internship
                {/* <i className="fa fa-angle-right" aria-hidden="true" /> */}
              </Link>
            </div>
          </div>

          <div id="courses-container" className="max-width-container">
            <div id="MostPopular" className="category-container">
              <div className="category-heading">
                level
                <span className="course-count"></span>
              </div>
              <div className="custom-carousel" data-category="Most_Popular">
                <div className="slider" style={{ width: "100%", padding: "0px" }}>
                  <div className="slider-item ">
                    <a href="/financial-modeling-valuation-training/?tracking_source=trainings-cards">
                      <div className="course-card" style={{ margin: "22px 8px" }}>
                        <div className="course-image">
                          <img className="img-responsive" src="images/Web.jpeg" alt="Financial Modeling and Valuation" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Real state Website</h4>
                          <p className="course-caption">
                            <b>Prerequisite(s) -</b>Html,css,js,any framework preferred
                          </p>
                          <div className="course-block-footer-treatment">
                            <div className="duration-view">
                              Amount:
                              <span style={{ fontWeight: 500 }}>₹42,000 INR</span>
                            </div>
                            <div className="know-more-button">
                              <div className="underline-animate">
                                <div
                                  className="line-container"
                                  style={{
                                    paddingTop: "2px",
                                    paddingLeft: "8px",
                                    paddingBottom: "6px",
                                  }}
                                >
                                  <span className="hover hover-1 line-span">
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      onClick={(event) =>
                                        select_project_handler(event, "Real state Website", "Html,css,js,any framework preferred", "₹42,000 INR", "paid")
                                      }
                                    >
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
                      <div className="course-card" style={{ margin: "22px 8px" }}>
                        <div className="course-image">
                          <img className="img-responsive" src="images/top11.png" alt="Web Development" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Crypto Mining platform</h4>
                          <p className="course-caption">
                            <b>Prerequisite(s) - </b>HTML,CSS,JavaScript ,PHP,Web Design,Web Scraping
                          </p>

                          <div className="course-block-footer-treatment">
                            <div className="duration-view">
                              Amount:
                              <span style={{ fontWeight: 500 }}>₹35,000 INR</span>
                            </div>
                            <div className="know-more-button">
                              <div className="underline-animate">
                                <div
                                  className="line-container"
                                  style={{
                                    paddingTop: "2px",
                                    paddingLeft: "8px",
                                    paddingBottom: "6px",
                                  }}
                                >
                                  <span className="hover hover-1 line-span">
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      value={"Entry level, Nodejs,HTML,CSS "}
                                      onClick={(event) =>
                                        select_project_handler(
                                          event,
                                          "Crypto Mining platform",
                                          "HTML,CSS,JavaScript ,PHP,Web Design,Web Scraping",
                                          "₹35,000 INR",
                                          "paid"
                                        )
                                      }
                                    >
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
                      <div className="course-card" style={{ margin: "22px 8px" }}>
                        {/* <div className="tag-slant tag-slant-top-left">
                          <span>75% OFF</span>
                        </div> */}
                        <div className="course-image">
                          <img className="img-responsive" src="images/app2.jpeg" alt="Digital Marketing" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">App Development</h4>
                          <p className="course-caption">
                            <b>Prerequisite(s) -</b> Html,CSS,JS,Android
                          </p>
                          <div className="course-block-footer-treatment">
                            <div className="duration-view">
                              Amount:
                              <span style={{ fontWeight: 500 }}>₹20,000 INR</span>
                            </div>
                            <div className="know-more-button">
                              <div className="underline-animate">
                                <div
                                  className="line-container"
                                  style={{
                                    paddingTop: "2px",
                                    paddingLeft: "8px",
                                    paddingBottom: "6px",
                                  }}
                                >
                                  <span className="hover hover-1 line-span">
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      onClick={(event) =>
                                        select_project_handler(event, "App Development", "Html,CSS,JS,Android, reactjs", "₹20,000 INR", "paid")
                                      }
                                    >
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
                      <div className="course-card" style={{ margin: "22px 8px" }}>
                        {/* <div className="tag-slant tag-slant-top-left">
                          <span>75% OFF</span>
                        </div> */}
                        <div className="course-image">
                          <img className="img-responsive" src="images/angularjs.jpg" alt="Digital Marketing" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Angular Project</h4>
                          <p className="course-caption">
                            <b>Prerequisite(s) -</b>angularjs, web development
                          </p>
                          <div className="course-block-footer-treatment">
                            <div className="duration-view">
                              Amount:
                              <span style={{ fontWeight: 500 }}>₹18,000 INR</span>
                            </div>
                            <div className="know-more-button">
                              <div className="underline-animate">
                                <div
                                  className="line-container"
                                  style={{
                                    paddingTop: "2px",
                                    paddingLeft: "8px",
                                    paddingBottom: "6px",
                                  }}
                                >
                                  <span className="hover hover-1 line-span">
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      onClick={(event) => select_project_handler(event, "Angular Project", "angularjs, web development", "₹18,000 INR", "paid")}
                                    >
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
              {/* <div className="category-heading">
                Intermediate level
                <span className="course-count">(3)</span>
              </div> */}
              <div className="custom-carousel" data-category="Most_Popular">
                <div className="slider">
                  <div className="slider-item ">
                    <a href="/financial-modeling-valuation-training/?tracking_source=trainings-cards">
                      <div className="course-card" style={{ margin: "22px 8px" }}>
                        <div className="course-image">
                          <img className="img-responsive" src="images/App4.png" alt="App development" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">App Development</h4>
                          <p className="course-caption">
                            <b>Prerequisite(s)-</b>IOS development, android develooment, ionic framework,prestashop
                          </p>
                          <div className="course-block-footer-treatment">
                            <div className="duration-view">
                              Amount:
                              <span style={{ fontWeight: 500 }}>₹20,000 INR</span>
                            </div>
                            <div className="know-more-button">
                              <div className="underline-animate">
                                <div
                                  className="line-container"
                                  style={{
                                    paddingTop: "2px",
                                    paddingLeft: "8px",
                                    paddingBottom: "6px",
                                  }}
                                >
                                  <span className="hover hover-1 line-span">
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      onClick={(event) =>
                                        select_project_handler(
                                          event,
                                          "App Development",
                                          "IOS development, android develooment, ionic framework,prestashop",
                                          "₹20,000 INR",
                                          "paid"
                                        )
                                      }
                                    >
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
                      <div className="course-card" style={{ margin: "22px 8px" }}>
                        <div className="course-image">
                          <img className="img-responsive" src="images/web3.jpg" alt="Web Development" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Wordpress Website</h4>
                          <p className="course-caption">
                            <b>Prerequisite(s) -</b>wordpress, HTML,CSS,woo commerce, graphic design
                          </p>
                          <div className="course-block-footer-treatment">
                            <div className="duration-view">
                              Amount:
                              <span style={{ fontWeight: 500 }}>₹17,000 INR</span>
                            </div>
                            <div className="know-more-button">
                              <div className="underline-animate">
                                <div
                                  className="line-container"
                                  style={{
                                    paddingTop: "2px",
                                    paddingLeft: "8px",
                                    paddingBottom: "6px",
                                  }}
                                >
                                  <span className="hover hover-1 line-span">
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      onClick={(event) =>
                                        select_project_handler(
                                          event,
                                          "Wordpress Website",
                                          "wordpress, HTML,CSS,woo commerce, graphic design",
                                          "₹17,000 INR",
                                          "paid"
                                        )
                                      }
                                    >
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
                      <div className="course-card" style={{ margin: "22px 8px" }}>
                        <div className="course-image">
                          <img className="img-responsive" src="images/app.jpg" alt="Financial Modeling and Valuation" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">UI/UX Design</h4>
                          <p className="course-caption">
                            <b>Prerequisite(s) -</b>flutter, app development
                          </p>
                          <div className="course-block-footer-treatment">
                            <div className="duration-view">
                              Amount:
                              <span style={{ fontWeight: 500 }}>₹10,000 INR</span>
                            </div>
                            <div className="know-more-button">
                              <div className="underline-animate">
                                <div
                                  className="line-container"
                                  style={{
                                    paddingTop: "2px",
                                    paddingLeft: "8px",
                                    paddingBottom: "6px",
                                  }}
                                >
                                  <span className="hover hover-1 line-span">
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      onClick={(event) => select_project_handler(event, "UI/UX Design", "flutter, app development", "₹10,000 INR", "paid")}
                                    >
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
                      <div className="course-card" style={{ margin: "22px 8px" }}>
                        <div className="course-image">
                          <img className="img-responsive" src="images/android2.jpg" alt="Financial Modeling and Valuation" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">React Native App Development</h4>
                          <p className="course-caption">
                            <b>Prerequisite(s) -</b>React native, android, iOS, javascript
                          </p>
                          <div className="course-block-footer-treatment">
                            <div className="duration-view">
                              Amount:
                              <span style={{ fontWeight: 500 }}>₹5,000 INR</span>
                            </div>
                            <div className="know-more-button">
                              <div className="underline-animate">
                                <div
                                  className="line-container"
                                  style={{
                                    paddingTop: "2px",
                                    paddingLeft: "8px",
                                    paddingBottom: "6px",
                                  }}
                                >
                                  <span className="hover hover-1 line-span">
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      onClick={(event) =>
                                        select_project_handler(
                                          event,
                                          "React Native App Development",
                                          "React native, android, iOS, javascript",
                                          "₹5,000 INR",
                                          "paid"
                                        )
                                      }
                                    >
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

export default Paid;
