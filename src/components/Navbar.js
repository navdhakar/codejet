import React from "react";
import Logo from "../logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-transparent" id="gtco-main-nav">
        <div className="container">
          <Link className="nav-link" to="/">
            <img src={Logo} alt="logo" style={{ height: "50px" }} className="navnik2" />
          </Link>
          <button className="navbar-toggler" data-target="#my-nav" onClick="myFunction(this)" data-toggle="collapse">
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
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <Link to="/login" className="btn btn-outline-dark my-2 my-sm-0 mr-3 text-uppercase">
                login
              </Link>
              <Link to="/signup" className="btn btn-info my-2 my-sm-0 text-uppercase">
                sign up
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
