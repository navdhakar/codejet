import React, { react, useState } from "react";
import Logo from "../logo.png";
import { Link, Redirect, useHistory } from "react-router-dom";

function Navbar() {
  let history = useHistory();
  const [logged, setlog] = useState();
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
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + ";path=/";
  }
  function logout(e) {
    setCookie("auth_token", null);
    window.location.reload();
    // <Redirect to="/login" />;
    history.push("/login");
    // e.preventDefault();
  }
  function Logout() {
    return (
      <Link className="btn btn-info my-2 my-sm-0 text-uppercase" onClick={logout}>
        logout
      </Link>
    );
  }
  function Notlogin() {
    return (
      <>
        <Link to="/login" className="btn btn-outline-dark my-2 my-sm-0 mr-3 text-uppercase">
          login
        </Link>
        <Link to="/signup" className="btn btn-info my-2 my-sm-0 text-uppercase">
          sign up
        </Link>
      </>
    );
  }
  const log = getCookie("auth_token");
  function Login() {
    const log = getCookie("auth_token");
    if (!log) {
      console.log("log in");
      return <Notlogin />;
    }
    console.log("no login");
    return <Logout />;
  }
  console.log(log);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-transparent" id="gtco-main-nav">
        <div className="container">
          <Link className="nav-link" to="/">
            <img src={Logo} alt="logo" style={{ height: "50px" }} className="navnik2" />
          </Link>
          <button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse">
            <span className="bar1" /> <span className="bar2" /> <span className="bar3" />
          </button>
          <div id="my-nav" className="collapse navbar-collapse navnik3">
            <ul className="navbar-nav mr-auto ">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="/contact">
                  Contact
                </Link> */}
                <Link className="nav-link" to="/community">
                  Community
                </Link>
              </li>
            </ul>

            <form className="form-inline my-2 my-lg-0">
              {/* <Link to="/login" className="btn btn-outline-dark my-2 my-sm-0 mr-3 text-uppercase">
                login
              </Link>
              <Link to="/signup" className="btn btn-info my-2 my-sm-0 text-uppercase">
                sign up
              </Link> */}
              <Login />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
