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
                <div className="col-lg-12">
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
              </div>
              <div className="row">
                <div className="col-lg-8">
                  {/* Trending Top */}
                  {blogs_data.slice(0, 1).map((data) => (
                    <div className="trending-top mb-30">
                      <div className="trend-top-img">
                        <img src={data.image} alt="" />
                        <div className="trend-top-cap">
                          <span>Technology</span>
                          <h2>
                            <Link to={{ pathname: "/blog", state: data._id }}>{data.title}</Link>
                          </h2>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Trending Bottom */}
                  <div className="trending-bottom">
                    <div className="row">
                      {blogs_data.slice(1, 4).map((data) => (
                        <div className="col-lg-4">
                          <div className="single-bottom mb-35">
                            <div className="trend-bottom-img mb-30">
                              <img src={data.image} alt="" />
                            </div>
                            <div className="trend-bottom-cap">
                              <span className="color1">News</span>
                              <h4>
                                <Link to={{ pathname: "/blog", state: data._id }}>{data.title}</Link>
                              </h4>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="row">
                      {blogs_data.slice(13, 16).map((data) => (
                        <div className="col-lg-4">
                          <div className="single-bottom mb-35">
                            <div className="trend-bottom-img mb-30">
                              <img src={data.image} alt="" />
                            </div>
                            <div className="trend-bottom-cap">
                              <span className="color1">News</span>
                              <h4>
                                <Link to={{ pathname: "/blog", state: data._id }}>{data.title}</Link>
                              </h4>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="row">
                      {blogs_data.slice(16, 19).map((data) => (
                        <div className="col-lg-4">
                          <div className="single-bottom mb-35">
                            <div className="trend-bottom-img mb-30">
                              <img src={data.image} alt="" />
                            </div>
                            <div className="trend-bottom-cap">
                              <span className="color1">News</span>
                              <h4>
                                <Link to={{ pathname: "/blog", state: data._id }}>{data.title}</Link>
                              </h4>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Riht content */}
                <div className="col-lg-4">
                  {blogs_data.slice(4, 7).map((data) => (
                    <div className="trand-right-single ">
                      <div className="trand-right-img ">
                        <img src={data.image} alt="" />
                      </div>

                      <div className="trand-right-cap">
                        <span className="color1">Technology</span>
                        <h4>
                          <Link to={{ pathname: "/blog", state: data._id }}>{data.title}</Link>
                        </h4>
                      </div>
                    </div>
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
                    <div className="weekly2-news" style={{ marginLeft: "12%" }}>
                      <div className="row align-item-center">
                        <div className="weekly2-img ">
                          <img src={data.image} style={{ width: "80%" }} alt="" />
                        </div>
                      </div>
                      <div className="weekly2-caption">
                        <span className="color1">News</span>
                        <p>{data.date}</p>
                        <h4 className="mb-30">
                          <Link to={{ pathname: "/blog", state: data._id }}>{data.title}</Link>
                        </h4>
                      </div>
                    </div>
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
