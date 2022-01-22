import React, { useState, useEffect, useRef, useHistory } from "react";
import { useLocation } from "react-router-dom";
import "./Discussion.css";
import { Link } from "react-router-dom";
import Services from "./Services";
const server = process.env.NODE_ENV == "production" ? "https://codejet.herokuapp.com" : "http://127.0.0.1:8002";

export default function Home() {
  const nameRef = useRef();
  const answerRef = useRef();
  const [blogs_data, blog_load] = useState([]);
  const [discussion_data, discussion_load] = useState([]);
  const [topic_data, topic_load] = useState({});
  const [votes, votes_counter] = useState([]);
  const [formValues, setFormValues] = useState([{ name: "", email: "" }]);
  const [showResults, setShowResults] = useState(false);
  const onClick = () => setShowResults(true);
  const changevisiblity = onClick ? "block" : "none";
  function Discussions(comment, indexes) {
    let vote_count = parseInt(comment.comment.votes);
    console.log(vote_count);
    const [like, like_counter] = useState(vote_count);
    const [isClick, setClick] = useState(false);
    console.log(comment.indexes);
    function like_changer(props) {
      const status = props;

      if (status) {
        like_counter(like - 1);

        const like_data = {
          id: comment.comment.id,
          like: "dec",
          indexe: comment.indexes,
          temp_id: comment.comment.temp_id,
        };

        fetch(`${server}/topic/discussion/vote_counter`, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors",
          body: JSON.stringify(like_data),
          // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          // body data type must match "Content-Type" header
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      } else {
        like_counter(like + 1);

        const like_data = {
          id: comment.comment.id,
          like: "inc",
          indexe: comment.indexes,
          temp_id: comment.comment.temp_id,
        };

        fetch(`${server}/topic/discussion/vote_counter`, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors",
          body: JSON.stringify(like_data),
          // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          // body data type must match "Content-Type" header
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      }
    }
    console.log(comment);
    const changeColour = isClick ? "#e01425" : "grey";

    return (
      <div className="row mb-4">
        <div className="row">
          <div className="col-lg-1">
            <img
              src={`https://avatars.dicebear.com/api/personas/${comment.comment.name}.svg`}
              alt="Profile image"
              className="rounded"
              style={{ borderRadius: "15px" }}
              width={"30px"}
            />
          </div>
          <div className="col-lg-11">
            <h6 className="card-subtitle " style={{ marginTop: "-18%", marginLeft: "25%" }}>
              {comment.comment.name}
            </h6>
          </div>
        </div>
        <div className="row  ">
          <p className="card-text mb-2 mx-md-5" style={{ fontSize: "15px", marginLeft: "3%" }}>
            {comment.comment.answer}
          </p>
        </div>
        <div className="row">
          <div className="col">
            <i
              class="fas fa-rocket mx-md-4"
              onClick={() => {
                setClick(!isClick);
                like_changer(isClick);
              }}
              style={{ color: changeColour, cursor: "pointer" }}
            >
              {" "}
              {like}
            </i>
          </div>
          <div className="col">
            <a href="#" className="card-link mx-md-5">
              {comment.comment.date}
            </a>
          </div>
        </div>
      </div>
    );
  }

  const Answer = () => (
    <a
      className="submit-button"
      onClick={() => {
        onClick();
      }}
    >
      Submit answer
      <i className="fa fa-angle-right" aria-hidden="true" />
    </a>
  );
  const req_blog = {
    all: "all",
  };
  function getCurrentDate(separator = "/") {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`;
  }
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
      .then(() => {
        fetch(`${server}/topic/discussion/today_discussion`, {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          mode: "cors",

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
            topic_load({
              post: data[0].post,
              id: data[0].post,
            });
            data[0].answers.sort((a, b) => parseInt(b.votes) - parseInt(a.votes));
            data[0].answers.slice(0, 3);

            discussion_load(data[0].answers.slice(0, 3));
            // setImage();
            // if (data.profileImg) {
            //   setImage(data.profileImg);
            // }

            console.log(data[0].answers);

            console.log(discussion_data);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function post(e) {
    const submit_data = {
      post: topic_data.post,
      submit_data: {
        name: nameRef.current.value,
        answer: answerRef.current.value,
        date: getCurrentDate(),

        votes: 0,
      },
    };
    console.log(submit_data);
    fetch(`${server}/topic/discussion/post`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
      body: JSON.stringify(submit_data),
      // no-cors, *cors, same-origin
      cache: "no-cache",
      credentials: "same-origin", // *default, no-cache, reload, force-cache, only-if-cached
      // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body data type must match "Content-Type" header
    })
      .then((res) => {
        //window.location.reload();
        //console.log(hire_data);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        submit_data.votes = "0";
        // window.reload();
        discussion_load([...discussion_data, submit_data.submit_data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const Results = () => (
    <div>
      <h4> Submit answer </h4>
      <input type="text" ref={nameRef} className="form-control" placeholder="name" />
      <textarea ref={answerRef} className="form-control" placeholder="answer" />
      <a className="submit-button" onClick={post} to="/">
        POST
        <i className="fa fa-angle-right" aria-hidden="true" />
      </a>
    </div>
  );
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
                  <h4>For latest news, discussions, opportunity</h4>
                  <div className="row">
                    <div className="col-lg-3">
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

                    <div className="col-lg-9">
                      <div id="whatsapp-button" style={{ marginBottom: "2%" }}>
                        <a href="https://chat.whatsapp.com/BuvQEX8ozLiL4SJ3cXlJCO">
                          <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                            </svg>
                          </div>
                          <span>Join us on Whatsapp</span>
                        </a>
                      </div>
                    </div>
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
                </div>
                <div className="col-lg-4">
                  <h2 className="mb-2 align-top" style={{ marginTop: "" }}>
                    Question of the day
                  </h2>
                  <div className="card" style={{ backgroundColor: "#ebebeb" }}>
                    <div className="card-body">
                      <Link to="/discussion">
                        <h3>Q.{topic_data.post}</h3>
                      </Link>
                      {discussion_data.map((data, index) => (
                        <Discussions key={Math.floor(Math.random() * 100 + 1)} comment={data} indexes={index} />
                      ))}
                      <div className="row" id="gtco-footer">
                        <div className="col" id="contact">
                          {/* <h5>If you need tech support, kindly fill up this form and our team will get in touch with you. so we can provide best developer for the job</h5>
              <br /> */}
                          {showResults ? <Results /> : null}
                          {!showResults ? <Answer /> : null}

                          {/* <textarea className="form-control" ref={descriptionRef} placeholder="discription" defaultValue={""} /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Trending Bottom */}
              <div className="row">
                <div className="col-lg-8">
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
              {/* Right content */}
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
