import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";
import Services from "./Services";
const server = process.env.NODE_ENV == "production" ? "https://codejet.herokuapp.com" : "http://127.0.0.1:8002";

export default function Home() {
  const [blogs_data, blog_load] = useState([]);
  const req_blog = {
    all: "all",
  };
  useEffect(() => {
    fetch(`${server}/hire_api/hire/work`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
      body: JSON.stringify(req_blog),
      // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: { "Content-Type": "application/json" },
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
        blog_load(data);
        // setImage();
        // if (data.profileImg) {
        //   setImage(data.profileImg);
        // }

        console.log(data);
        console.log(blogs_data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <main>
        {/* Trending Area Start */}
        <div className="trending-area fix">
          <div className="container">
            <div className="trending-main">
              {/* Trending Tittle */}
              <div className="row">
                <div className="col-lg-2">
                  <div className="trending-tittle">
                    <strong>Trending now</strong>
                    {/* <p>Rem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
                    {/* <div className="trending-animated">
                      <ul id="js-news" className="js-hidden">
                        <li className="news-item">Bangladesh dolor sit amet, consectetur adipisicing elit.</li>
                        <li className="news-item">Spondon IT sit amet, consectetur.......</li>
                        <li className="news-item">Rem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                      </ul>
                    </div> */}
                  </div>
                </div>

                <div className="col-lg-10">
                  <h5>for latest news,discussion, opportunity</h5>
                  <div id="discord-button" style={{ marginBottom: "2%" }}>
                    <a href="https://discord.gg/V3PN23dPTH">
                      <div class="icon">
                        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245 240">
                          <path
                            class="st0"
                            d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"
                          />
                          <path
                            class="st0"
                            d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"
                          />
                        </svg>
                      </div>
                      <span>Join us on Discord</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8">
                  {/* Trending Top */}
                  {blogs_data.slice(0, 1).map((data) => (
                    <Link to={{ pathname: "/blog", state: data._id }}>
                      <div className="trending-top mb-30">
                        <div className="trend-top-img">
                          <img src={data.image} alt="" />
                          <div className="trend-top-cap">
                            <h5 style={{ color: "white", fontWeight: "normal" }}>{data.views} views</h5>
                            <h2 style={{ color: "white" }}>{data.title}</h2>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                  {/* Trending Bottom */}
                  <div className="trending-bottom">
                    <div className="row">
                      {blogs_data.slice(1, 4).map((data) => (
                        <div className="col-lg-4">
                          <Link to={{ pathname: "/blog", state: data._id }}>
                            <div className="single-bottom mb-35">
                              <div className="trend-bottom-img mb-30">
                                <img src={data.image} alt="" />
                              </div>
                              <div className="trend-bottom-cap">
                                <div className="row">
                                  <div className="col">
                                    <span className="color1">News</span>
                                  </div>
                                  <div className="col">
                                    <span className="color3">{data.views} views</span>
                                  </div>
                                </div>
                                <h4>{data.title}</h4>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className="row">
                      {blogs_data.slice(13, 16).map((data) => (
                        <div className="col-lg-4">
                          <Link to={{ pathname: "/blog", state: data._id }}>
                            <div className="single-bottom mb-35">
                              <div className="trend-bottom-img mb-30">
                                <img src={data.image} alt="" />
                              </div>
                              <div className="trend-bottom-cap">
                                <div className="row">
                                  <div className="col">
                                    <span className="color1">News</span>
                                  </div>
                                  <div className="col">
                                    <span className="color3">{data.views} views</span>
                                  </div>
                                </div>
                                <h4>{data.title}</h4>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className="row">
                      {blogs_data.slice(16, 19).map((data) => (
                        <div className="col-lg-4">
                          <Link to={{ pathname: "/blog", state: data._id }}>
                            <div className="single-bottom mb-35">
                              <div className="trend-bottom-img mb-30">
                                <img src={data.image} alt="" />
                              </div>
                              <div className="trend-bottom-cap">
                                <div className="row">
                                  <div className="col">
                                    <span className="color1">News</span>
                                  </div>
                                  <div className="col">
                                    <span className="color3">{data.views} views</span>
                                  </div>
                                </div>
                                <h4>{data.title}</h4>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Riht content */}
                <div className="col-lg-4">
                  {blogs_data.slice(4, 9).map((data) => (
                    <Link to={{ pathname: "/blog", state: data._id }}>
                      <div className="trand-right-single ">
                        <div className="trand-right-img ">
                          <img src={data.image} alt="" />
                        </div>

                        <div className="trand-right-cap">
                          <div className="row">
                            <div className="col">
                              <span className="color1">Technology</span>
                            </div>
                            <div className="col">
                              <span className="color3">{data.views} views</span>
                            </div>
                          </div>
                          <h4>{data.title}</h4>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Trending Area End */}
        {/*   Weekly-News start */}

        <div className="weekly2-news-area  weekly2-pading gray-bg">
          <div className="container">
            <div className="weekly2-wrapper">
              {/* section Tittle */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-tittle mb-30">
                    <h3>Weekly Top News</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                {blogs_data.slice(9, 13).map((data) => (
                  <div className="col-lg-3 justify-content-center">
                    <Link to={{ pathname: "/blog", state: data._id }}>
                      <div className="weekly2-news" style={{ marginLeft: "12%" }}>
                        <div className="row align-item-center">
                          <div className="weekly2-img ">
                            <img src={data.image} style={{ width: "80%" }} alt="" />
                          </div>
                        </div>
                        <div className="weekly2-caption">
                          <div className="row">
                            <div className="col">
                              <span className="color1">News</span>
                            </div>
                            <div className="col">
                              <span className="color3">{data.views} views</span>
                            </div>
                          </div>
                          <p>{data.date}</p>
                          <h4 className="mb-30">{data.title}</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* End Weekly-News */}
        {/* Whats New Start */}

        {/*Recent Articles End */}
        {/*Start pagination */}
        <div className="pagination-area pb-45 text-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="single-wrap d-flex justify-content-center">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-start">
                      <li className="page-item">
                        <a className="page-link" href="#">
                          <span className="flaticon-arrow roted" />
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          01
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          02
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          03
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          <span className="flaticon-arrow right-arrow" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End pagination  */}
      </main>

      {/* JS here */}
      {/* All JS Custom Plugins Link Here here */}
      {/* Jquery, Popper, Bootstrap */}
      {/* Jquery Mobile Menu */}
      {/* Jquery Slick , Owl-Carousel Plugins */}
      {/* Date Picker */}
      {/* One Page, Animated-HeadLin */}
      {/* Breaking New Pluging */}
      {/* Scrollup, nice-select, sticky */}
      {/* contact js */}
      {/* Jquery Plugins, main Jquery */}
    </div>
  );
}
