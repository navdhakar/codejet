import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
const server = process.env.NODE_ENV == "production" ? "https://codejet.herokuapp.com" : "http://127.0.0.1:8002";

function Emailver() {
  const otpRef = useRef();
  let history = useHistory();
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

  function otp_check(e) {
    // e.preventDefault();
    const otp_data = {
      otp: otpRef.current.value,
    };
    // console.log(serviceRef.current.value);
    fetch(`${server}/signup/register/verify_email`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
      body: JSON.stringify(otp_data),
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
        if (res.status == 400) {
          console.log(res);
          setmsg("OTP didn't match");
          throw new Error("OTP didn't match");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCookie("auth_token", data.token_data);
        console.log(getCookie("auth_token"));
        history.push("/profile");
        window.location.reload();
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
              <h4>Verify your email</h4>

              <input type="email" ref={otpRef} className="form-control" placeholder="OTP" />
              {errormsg && (
                <span className="error" style={{ color: "red" }}>
                  {" "}
                  {errormsg}{" "}
                </span>
              )}
              <a href="/" className="submit-button" onClick={otp_check}>
                Verify <i className="fa fa-angle-right" aria-hidden="true" />
              </a>
              <h5 style={{ marginTop: "20px" }}>
                <Link to="/signup">Click here to create an account!</Link>
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

export default Emailver;
