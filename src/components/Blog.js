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
                    <Link to={{ pathname: "/sideblog", state: "61d674bf8321960131363f03" }}>
                      Software Development Engineer - Intern (Amazon WoW Applications)
                    </Link>
                  </h4>
                </div>
              </div>
              <hr></hr>
              <div className="trand-right-single d-flex">
                <div className="trand-right-img">
                  <img src="https://miro.medium.com/max/1024/1*4yeTXY-vKnoCZ0nlU9NFPA.png" alt="" />
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
