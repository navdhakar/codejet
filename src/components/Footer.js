import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div>
      {/* <footer className="container-fluid" id="gtco-footer">
        <div
          className="container"
          style={{ justifyContent: "center", marginTop: "80px" }}
        >
          <div className="row">
            <div className="col-6">
              <h4>Company</h4>
              <ul className="nav flex-column company-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Contact
                  </a>
                </li>
              </ul>
              <h4 className="mt-5">Follow Us</h4>
              <ul className="nav follow-us-nav">
                <li className="nav-item">
                  <a className="nav-link pl-0" href="/">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <i className="fa fa-google" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <h4>Our Team</h4>
              <ul className="nav flex-column services-nav">
                <li className="nav-item">Mohit Jain</li>
                <li className="nav-item">Manish Suthar</li>
                <li className="nav-item">Navdeep Dhakar</li>
              </ul>
            </div>
            <div className="col-12">
              <p>&copy; 2021. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer> */}

      <div className="footer-container">
        <section className="footer-subscription">
          <p className="footer-subscription-heading">Join our newsletter to receive the updates</p>
          <div className="input-areas">
            <form>
              <input type="email" name="email" placeholder="Enter Email" className="footer-input" />
              <button className="btn btn--outline btn--medium">Subscribe</button>
            </form>
          </div>
        </section>
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Sections</h2>
              <Link to="/about">About</Link>
              <Link to="/opportunity">Opportunities</Link>
              <Link to="/hireus">Hire</Link>
              <Link to="/services">Services</Link>
            </div>
            <div className="footer-link-items">
              <h2>Contact Us</h2>
              <Link to="/contact">Contact</Link>
              <a href="mailto:codejethq@gmail.com">Email</a>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Our Team</h2>
              <Link to="/">Navdeep Dhakar</Link>
              <Link to="/">Mohit Jain</Link>
              <Link to="/">Manish Suthar</Link>
              <Link to="/">Jayesh Soni</Link>
            </div>
            <div className="footer-link-items">
              <h2>Social</h2>
              <a href="https://www.linkedin.com/in/code-jet-aa3644223">Linkedin</a>
              <a href="https://twitter.com/HqIndyq">Twitter</a>
            </div>
          </div>
        </div>
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <Link to="/" className="social-logo">
                CODEJET
              </Link>
            </div>
            <small className="website-rights">All right reserved | CODEJET © 2021</small>
            <div className="social-icons">
              <a className="social-icon-link Linkedin" href="https://www.linkedin.com/in/code-jet-aa3644223" aria-label="Linkedin">
                <i className="fab fa-linkedin"></i>
              </a>
              <a className="social-icon-link twitter" href="https://twitter.com/HqIndyq" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="social-icon-link Linkedin" href="https://www.linkedin.com/in/code-jet-aa3644223" aria-label="Linkedin">
                <i class="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
