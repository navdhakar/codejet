import React, { useState, useEffect, useRef, useHistory } from "react";
const server = process.env.NODE_ENV == "production" ? "https://codejet.herokuapp.com" : "http://127.0.0.1:8002";

export default function Discussion() {
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
          <p className="card-text mb-2 mx-md-5">{comment.comment.answer}</p>
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
    discussion_load([]);

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
        discussion_load(data[0].answers);
        // setImage();
        // if (data.profileImg) {
        //   setImage(data.profileImg);
        // }

        console.log(data[0].answers);

        console.log(discussion_data);
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
    <div className="col-lg-6">
      <h2 className="mb-2 align-top" style={{ marginTop: "" }}>
        Question of the day
      </h2>
      <div className="card" style={{ backgroundColor: "#ebebeb" }}>
        <div className="card-body">
          <h3>Q.{topic_data.post}</h3>
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
  );
}
