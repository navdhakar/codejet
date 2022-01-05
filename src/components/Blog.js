import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";
import { LinkedinShareButton, TwitterShareButton, FacebookShareButton, EmailShareButton } from "react-share";
import { LinkedinIcon, FacebookIcon, TwitterIcon, EmailIcon } from "react-share";

import "./blog.css";

const server = process.env.NODE_ENV == "production" ? "https://codejet.herokuapp.com" : "http://127.0.0.1:8002";
export default function Blog(props) {
  // const location = useLocation();
  // const index = location.state;

  console.log(props.location.state);
  const [blogs_data, blog_load] = useState({});
  const req_blog = {
    id: props.location.state,
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
        blog_load({
          title: data.title,
          image: data.image,
          date: data.date,
          blog: data.blog_description,
        });
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
    <main style={{ width: "100%" }}>
      {/* About US Start */}
      <div className="about-area" style={{ width: "100%" }}>
        <div className="container" style={{ width: "100%" }}>
          {/* Hot Aimated News Tittle*/}
          <div className="row">
            <div className="col-lg-12"></div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              {/* Trending Tittle */}
              <div className="about-right mb-90">
                <div className="section-tittle mb-30 pt-30">
                  <h3>{blogs_data.title}</h3>
                  <span>{blogs_data.date}</span>
                </div>
                <div className="about-img">
                  <img src={blogs_data.image} alt="" />
                </div>
                <br></br>
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blogs_data.blog) }} style={{ width: "100%" }}></div>

                <div className="social-share pt-30">
                  <div className="section-tittle">
                    <h3 className="mr-20">Share:</h3>
                    <ul>
                      <li>
                        <LinkedinShareButton url={window.location.href} title={blogs_data.title} source={"codeJET"}>
                          {" "}
                          <LinkedinIcon size={32} round={true} />
                        </LinkedinShareButton>
                      </li>
                      <li>
                        <TwitterShareButton url={window.location.href} title={blogs_data.title} via={"CodejetHq"} hashtags={["codeJET"]}>
                          {" "}
                          <TwitterIcon size={32} round={true} />
                        </TwitterShareButton>
                      </li>
                      <li>
                        <FacebookShareButton url={window.location.href} quote={blogs_data.title} sourcehashtag={"#codeJET"}>
                          {" "}
                          <FacebookIcon size={32} round={true} />
                        </FacebookShareButton>
                      </li>
                      <li>
                        <EmailShareButton
                          url={window.location.href}
                          subject={blogs_data.title}
                          body={
                            "Read about awesome articles about college placements. Internships, Technology and events for students on codeJET https://codejet.online/"
                          }
                        >
                          {" "}
                          <EmailIcon size={32} round={true} />
                        </EmailShareButton>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* From */}
              {/* <div className="row">
                <div className="col-lg-8">
                  <form className="form-contact contact_form mb-80" action="contact_process.php" method="post" id="contactForm" noValidate="novalidate">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <textarea
                            className="form-control w-100 error"
                            name="message"
                            id="message"
                            cols={30}
                            rows={9}
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Enter Message'"
                            placeholder="Enter Message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            className="form-control error"
                            name="name"
                            id="name"
                            type="text"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Enter your name'"
                            placeholder="Enter your name"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            className="form-control error"
                            name="email"
                            id="email"
                            type="email"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Enter email address'"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            className="form-control error"
                            name="subject"
                            id="subject"
                            type="text"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Enter Subject'"
                            placeholder="Enter Subject"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <button type="submit" className="button button-contactForm boxed-btn">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div> */}
            </div>
            <div className="col-lg-4" style={{ marginTop: "10%" }}>
              <h3>More</h3>
              <hr></hr>
              <div className="trand-right-single d-flex">
                <div className="trend-bottom-img mb-30">
                  <img src="https://pbs.twimg.com/media/FDwrDJwXEBIRMqV?format=jpg&name=4096x4096" alt="" style={{ width: "100%" }} />
                </div>
                <div className="trand-right-cap">
                  <span className="color1 mx-md-3">Internship</span>
                  <h4 className=" mx-md-3">
                    <Link to={{ pathname: "/sideblog", state: "61d2b20ebab7fd04021362e0" }}>
                      Discovery Inc. summer 2022 internship for 3rd year CSE college students.
                    </Link>
                  </h4>
                </div>
              </div>
              <hr></hr>
              <div className="trand-right-single d-flex">
                <div className="trand-right-img">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
                <div className="trand-right-cap">
                  <span className="color1 mx-md-3">Internship</span>
                  <h4 className=" mx-md-3">
                    <Link to={{ pathname: "/sideblog", state: "61d2ff32ecee6a01778744f7" }}>Reactjs development work from home JOB/INTERNSHIP</Link>
                  </h4>
                </div>
              </div>
            </div>
            {/* Section Tittle */}
            {/* <div className="section-tittle mb-40">
              <h3>Follow Us</h3>
            </div>
            <br></br> */}
            {/* Flow Socail */}
            {/* <div className="single-follow mb-45">
              <div className="single-box">
                <div className="follow-us d-flex align-items-center">
                  <div className="follow-social">
                    <a href="#">
                      <img src="assets/img/news/icon-fb.png" alt="" />
                    </a>
                  </div>
                  <div className="follow-count">
                    <span>8,045</span>
                    <p>Fans</p>
                  </div>
                </div>
                <div className="follow-us d-flex align-items-center">
                  <div className="follow-social">
                    <a href="#">
                      <img src="assets/img/news/icon-tw.png" alt="" />
                    </a>
                  </div>
                  <div className="follow-count">
                    <span>8,045</span>
                    <p>Fans</p>
                  </div>
                </div>
                <div className="follow-us d-flex align-items-center">
                  <div className="follow-social">
                    <a href="#">
                      <img src="assets/img/news/icon-ins.png" alt="" />
                    </a>
                  </div>
                  <div className="follow-count">
                    <span>8,045</span>
                    <p>Fans</p>
                  </div>
                </div>
                <div className="follow-us d-flex align-items-center">
                  <div className="follow-social">
                    <a href="#">
                      <img src="assets/img/news/icon-yo.png" alt="" />
                    </a>
                  </div>
                  <div className="follow-count">
                    <span>8,045</span>
                    <p>Fans</p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* New Poster */}
            {/* <div className="news-poster d-none d-lg-block">
                <img src="assets/img/news/news_card.jpg" alt="" />
              </div> */}
          </div>
        </div>
      </div>
      {/* About US End */}
    </main>
  );
}
