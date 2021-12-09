import React, { useRef, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
const server = process.env.NODE_ENV == "production" ? "https://codejet.herokuapp.com" : "http://127.0.0.1:8002";

function Signup() {
  let history = useHistory();
  const usernameRef = useRef();
  const emailRef = useRef();
  const collegenameRef = useRef();
  const branchRef = useRef();
  const collegeyearRef = useRef();
  const githubRef = useRef();
  const passwordRef = useRef();
  const [errormsg, setmsg] = useState("");
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

  function user_detail(e) {
    // e.preventDefault();
    const user_data = {
      name: usernameRef.current.value,
      email: emailRef.current.value,
      college_name: collegenameRef.current.value,
      college_branch: branchRef.current.value,
      college_year: collegeyearRef.current.value,
      github_profile: githubRef.current.value,
      password: passwordRef.current.value,
    };
    // console.log(serviceRef.current.value);
    fetch(`${server}/signup/register/new_user`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
      body: JSON.stringify(user_data),
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
        console.log(res.status);
        if (res.status == 400) {
          console.log(res);
          setmsg("email already registered");
          throw new Error("user already exist please login");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);

        history.push("/email_verification");
      })
      .catch((err) => {
        console.log(err);
      });
    e.preventDefault();
  }
  return (
    <div>
      <div className="container-fluid" style={{ marginTop: "80px", alignItems: "center" }} id="gtco-footer">
        <div className="container">
          <div className="row">
            <div className="col" id="contact">
              <h4>Student Register </h4>
              <input type="text" ref={usernameRef} className="form-control" placeholder="Username" />
              <input type="email" ref={emailRef} className="form-control" placeholder="Email Address" />
              {errormsg && (
                <span className="error" style={{ color: "red" }}>
                  {" "}
                  {errormsg}{" "}
                </span>
              )}
              <input type="text" ref={collegenameRef} className="form-control" placeholder="College name" />
              <input type="text" ref={branchRef} className="form-control" placeholder="College branch/course" />

              <input type="text" ref={collegeyearRef} className="form-control" placeholder="College year" />
              <input type="text" ref={githubRef} className="form-control" placeholder="Github profile" />
              <input type="password" ref={passwordRef} className="form-control" placeholder="Password" />
              <a href="/" className="submit-button" onClick={user_detail}>
                Sign-Up <i className="fa fa-angle-right" aria-hidden="true" />
              </a>
              <h5 style={{ marginTop: "20px" }}>
                <Link to="/login">Already have an account?</Link>
              </h5>
            </div>
            <div className="col-md-6">
              <div className="card">
                <img className="card-img-top img-fluid" src="images/banner-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
