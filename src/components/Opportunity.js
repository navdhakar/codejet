import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import banner1 from "../banner1.jpg";
// import "./opportunity.css";
const server = process.env.NODE_ENV == "production" ? "https://codejet.herokuapp.com" : "http://127.0.0.1:8002";

function Opportunity() {
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
  function project_data(title, disc, duration, type) {
    console.log(title, disc, duration, type);
    selected_project = {
      title: title,
      discription: disc,
      duration: duration,
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
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
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
                Entry level
                <span className="course-count"></span>
              </div>
              <div className="custom-carousel" data-category="Most_Popular">
                <div className="slider" style={{ width: "100%", padding: "0px" }}>
                  <div className="slider-item ">
                    <a href="/web-development-training/?tracking_source=trainings-cards">
                      <div className="course-card" style={{ margin: "22px 8px" }}>
                        <div className="course-image">
                          <img className="img-responsive" src="images/top11.png" alt="Web Development" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Node JS Project</h4>
                          <p className="course-caption">
                            <b>Prerequisite(s) - </b>Html,css
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
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      value={"Entry level, Nodejs,HTML,CSS "}
                                      onClick={(event) =>
                                        select_project_handler(event, "Nodejs", "web development project with HTML and CSS", "12", "entry level")
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
                          <img className="img-responsive" src="images/news2.jpg" alt="Digital Marketing" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Java Project</h4>
                          <p className="course-caption">
                            <b>Prerequisite(s) -</b>Core Java-Awt,Swings,JDBC,Mysql
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
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      onClick={(event) => select_project_handler(event, "Java", "Core Java-Awt,Swings,JDBC,Mysql", "15", "entry level")}
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
                          <img className="img-responsive" src="images/python.jpg" alt="Financial Modeling and Valuation" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Python web Project</h4>
                          <p className="course-caption">
                            <b>Prerequisite(s) -</b>Html,css,Mysql
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
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      onClick={(event) =>
                                        select_project_handler(event, "Python", "web development project with python and HTML and CSS", "10", "entry level")
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
                          <img className="img-responsive" src="images/android2.jpg" alt="Financial Modeling and Valuation" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Android Project</h4>
                          <p className="course-caption">
                            <b>Prerequisite(s) -</b>xml,json,java,mysql
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
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      onClick={(event) => select_project_handler(event, "Android project", "xml,json,java,mysql", "15", "entry level")}
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
                    <a href="/digital-marketing-training/?tracking_source=trainings-cards">
                      <div className="course-card" style={{ margin: "22px 8px" }}>
                        {/* <div className="tag-slant tag-slant-top-left">
                          <span>75% OFF</span>
                        </div> */}
                        <div className="course-image">
                          <img className="img-responsive" src="images/reactjs.jpg" alt="Digital Marketing" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">React js Project</h4>
                          <p className="course-caption">
                            <b>Prerequisite(s) -</b> Html,CSS,JS,JSX, reactjs
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
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      onClick={(event) => select_project_handler(event, "Reactjs", "Html,CSS,JS,JSX, reactjs", "12", "entry level")}
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
                          <img className="img-responsive" src="images/Angularjs.jpg" alt="Financial Modeling and Valuation" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Angular js Project</h4>
                          <p className="course-caption">
                            <b>Prerequisite(s)-</b>Html, CSS, JavaScript,angular
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
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      onClick={(event) => select_project_handler(event, "Angularjs", "Html,CSS,JS,angularjs", "12", "entry level")}
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
                          <img className="img-responsive" src="images/PHP.jpg" alt="Financial Modeling and Valuation" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">PHP Project</h4>
                          <p className="course-caption">
                            <b>Prerequisite(s) -</b>Html,css,java script,Mysql
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
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      onClick={(event) => select_project_handler(event, "PHP", "Html,CSS,JS,Mysql", "10", "entry level")}
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
                          <img className="img-responsive" src="images/SQL.jpg" alt="Web Development" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">SQL Database Project</h4>
                          <p className="course-caption">
                            <b>Prerequisite(s) -</b>sql,plsql
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
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      onClick={(event) => select_project_handler(event, "Reactjs", "SQL Database project", "12", "entry level")}
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
              <div className="category-heading">
                Intermediate level
                <span className="course-count">(3)</span>
              </div>
              <div className="custom-carousel" data-category="Most_Popular">
                <div className="slider">
                  <div className="slider-item ">
                    <a href="/digital-marketing-training/?tracking_source=trainings-cards">
                      <div className="course-card" style={{ margin: "22px 8px" }}>
                        {/* <div className="tag-slant tag-slant-top-left">
                          <span>75% OFF</span>
                        </div> */}
                        <div className="course-image">
                          <img className="img-responsive" src="images/C++.jpg" alt="Digital Marketing" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">C++ Project</h4>
                          <p className="course-caption">
                            <b>Prerequisite(s) -</b> C/C++ language{" "}
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
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      onClick={(event) => select_project_handler(event, "C++ project", "c/c++ language", "12", "intermediate level")}
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
                          <img className="img-responsive" src="images/swift.jpg" alt="Financial Modeling and Valuation" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">IOS Project</h4>
                          <p className="course-caption">
                            <b>Prerequisite(s)-</b>Flutter,Kotlin,Java,React Native
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
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      onClick={(event) =>
                                        select_project_handler(event, "IOS project", "FLutter, Kotlin, React Native", "15", "intermediate level")
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
                          <img className="img-responsive" src="images/js.jpg" alt="Financial Modeling and Valuation" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Java Script Project</h4>
                          <p className="course-caption">
                            <b>Prerequisite(s) -</b>HTML, CSS, React (Intermediate level)
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
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      onClick={(event) =>
                                        select_project_handler(event, "JavaScript project", "HTML, CSS, React(Intermediate level)", "12", "intermediate level")
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
                          <img className="img-responsive" src="images/app.jpg" alt="Web Development" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">App Development Project</h4>
                          <p className="course-caption">
                            <b>Prerequisite(s) - -</b>Java, SQLite (basic DBMS queries)
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
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      onClick={(event) =>
                                        select_project_handler(event, "App development", "Java, SQLite(basic DBMS queries)", "15", "intermediate level")
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

          <div id="courses-container" className="max-width-container">
            <div id="MostPopular" className="category-container">
              {/* <div className="category-heading">
                Intermediate level
                <span className="course-count">(3)</span>
              </div> */}
              <div className="custom-carousel" data-category="Most_Popular">
                <div className="slider">
                  <div className="slider-item ">
                    <a href="/digital-marketing-training/?tracking_source=trainings-cards">
                      <div className="course-card" style={{ margin: "22px 8px" }}>
                        {/* <div className="tag-slant tag-slant-top-left">
                          <span>75% OFF</span>
                        </div> */}
                        <div className="course-image">
                          <img className="img-responsive" src="images/android.jpg" alt="Digital Marketing" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Android Project</h4>
                          <p className="course-caption">
                            <b>Prerequisite(s) - -</b>Java, SQLite (basic DBMS queries)
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
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      onClick={(event) => select_project_handler(event, "Android Project", "Java, SqLite", "15", "intermediate level")}
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
                          <img className="img-responsive" src="images/python2.jpg" alt="Financial Modeling and Valuation" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Python project</h4>
                          <p className="course-caption">
                            {" "}
                            <b> Prerequisite(s) -</b>HTML, CSS, JavaScript, Python, Flask
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
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      onClick={(event) =>
                                        select_project_handler(event, "Python project", "HTML,CSS,JavaScript,Python,Flask", "15", "intermediate level")
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
                          <img className="img-responsive" src="images/java.jpg" alt="Financial Modeling and Valuation" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Java Project</h4>
                          <p className="course-caption">
                            <b>Prerequisite(s) -</b>Java Basics, Android Basics
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
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      onClick={(event) =>
                                        select_project_handler(event, "Java Project", "Java Basics, Android basics", "15", "intermediate level")
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
                          <img className="img-responsive" src="images/Web.jpeg" alt="Web Development" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Web Development</h4>
                          <p className="course-caption">
                            <b>Prerequisite(s) -</b>HTML, CSS, React (Intermediate level)
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
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      onClick={(event) =>
                                        select_project_handler(event, "Web development", "HTML, CSS, React(Intermediate level)", "20", "intermediate level")
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
                      <div className="course-card" style={{ margin: "22px 8px" }}>
                        <div className="course-image">
                          <img className="img-responsive" src="images/MachineLearning.jpg" alt="Web Development" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Machine Learning Project</h4>
                          <p className="course-caption">
                            <b>Prerequisite(s) -</b>Python, API, Chatbot
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
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      onClick={(event) =>
                                        select_project_handler(event, "Machine Leanring Project", "Python, API, Chatbot", "25", "Difficult level")
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
                          <img className="img-responsive" src="images/web3.jpg" alt="Financial Modeling and Valuation" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Web Development(Full Stack)</h4>
                          <p className="course-caption">
                            <b>Prerequisite(s)-</b>Html, CSS, JavaScript, Java, Node.Js, MySQL,Vue
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
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      onClick={(event) =>
                                        select_project_handler(
                                          event,
                                          "Web Development(Full stack)",
                                          "Html, CSS, JavaScript, Java, Node.Js, MySQL,Vue, React",
                                          "25",
                                          "Difficult level"
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
                          <img className="img-responsive" src="images/ruby.jpg" alt="Web Development" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Ruby Project</h4>
                          <p className="course-caption">
                            <b>Prerequisite(s) -</b>JavaScript, PHP, Java, Node.Js, Vue,Python
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
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      onClick={(event) =>
                                        select_project_handler(event, "Ruby Project", "JavaScript, PHP, Java, Node.Js, Vue,Python", "20", "Difficult level")
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
                          <img className="img-responsive" src="images/app2.jpeg" alt="Web Development" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">App Development(Full stack)</h4>
                          <p className="course-caption">
                            <b>Prerequisite(s) -</b>Flutter, Dart, Javascript(Basics), Firebase
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
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      onClick={(event) =>
                                        select_project_handler(
                                          event,
                                          "App Development(Full stack)",
                                          "Flutter, Dart, Javascript(Basics), Firebase",
                                          "25",
                                          "Difficult level"
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

          <div id="courses-container" className="max-width-container">
            <div id="MostPopular" className="category-container">
              {/* <div className="category-heading">
                Intermediate level
                <span className="course-count">(3)</span>
              </div> */}
              <div className="custom-carousel" data-category="Most_Popular">
                <div className="slider">
                  <div className="slider-item ">
                    <a href="/digital-marketing-training/?tracking_source=trainings-cards">
                      <div className="course-card" style={{ margin: "22px 8px" }}>
                        {/* <div className="tag-slant tag-slant-top-left">
                          <span>75% OFF</span>
                        </div> */}
                        <div className="course-image">
                          <img className="img-responsive" src="images/java3.jpg" alt="Digital Marketing" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Java Project</h4>
                          <p className="course-caption">
                            <b>Prerequisite(s) -</b> Core Java,Spring, Multithreading with some concepts of Android
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
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      onClick={(event) =>
                                        select_project_handler(
                                          event,
                                          "Java Project",
                                          "Core Java,Spring, Multithreading with some concepts of Android",
                                          "25",
                                          "Difficult level"
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
                          <img className="img-responsive" src="images/cloud.jpg" alt="Financial Modeling and Valuation" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Cloud Project</h4>
                          <p className="course-caption">
                            <b>Prerequisite(s)-</b>Git, Any programming
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
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      onClick={(event) => select_project_handler(event, "Cloud Project", "Git, Any programming", "20", "Difficult level")}
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
                          <img className="img-responsive" src="images/blockchain.jpg" alt="Financial Modeling and Valuation" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Blockchain application using solidity</h4>
                          <p className="course-caption">
                            <b>Prerequisite(s) -</b>Decentralized systems, solidity, blockchain tech, truffle
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
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      onClick={(event) =>
                                        select_project_handler(
                                          event,
                                          "Blockchain application using solidity",
                                          "Decentralized systems, solidity, blockchain tech, truffle",
                                          "25",
                                          "Difficult level"
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
                          <img className="img-responsive" src="images/android3.jpg" alt="Web Development" />
                        </div>
                        <div className="course-block">
                          <h4 className="course-title">Android Project</h4>
                          <p className="course-caption">
                            <b>Prerequisite(s) -</b> Flutter, Dart, Javascript(Basics), Firebase
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
                                    <Link
                                      to="#"
                                      className="btn btn-outline-light my-2 my-sm-0 mr-3 text-uppercase"
                                      style={{ color: "blue" }}
                                      onClick={(event) =>
                                        select_project_handler(
                                          event,
                                          "Android Project",
                                          "Flutter, Dart, Javascript(React Native), Firebase",
                                          "25",
                                          "Difficult level"
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

export default Opportunity;
