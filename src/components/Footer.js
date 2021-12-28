import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import "./About.css";

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
          <p className="footer-subscription-heading">Join us on Discord and make this community and yourself more stronger. </p>
          <div id="discord-button">
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
        </section>
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Sections</h2>
              <Link to="/about">About</Link>
              <Link to="/opportunity">Opportunities</Link>
              <Link to="/hireus">Hire</Link>
              <Link to="/services">Services</Link>
              <Link to="/terms">Terms & Conditions</Link>
            </div>
            <div className="footer-link-items">
              <h2>Contact Us</h2>
              <Link to="/contact">Contact</Link>
              <a href="mailto:codejethq@gmail.com">Email</a>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Co-Founder</h2>
              <Link to="https://twitter.com/dev_navdeep">Navdeep Dhakar</Link>
              <Link to="/">Mohit Jain</Link>
              {/* <Link to="/">Manish Suthar</Link>
              <Link to="/">Jayesh Soni</Link> */}
            </div>
            {/* <div className="footer-link-items">
              <h2>Social</h2>
              <a href="https://www.linkedin.com/in/code-jet-aa3644223">Linkedin</a>
              <a href="https://twitter.com/HqIndyq">Twitter</a>
            </div> */}
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
              <h4 className="mj">Find us on :</h4>
              <a className="social-icon-link twitter" href="https://twitter.com/CodejetHq" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="social-icon-link Linkedin" href="https://www.instagram.com/codejet.online/?hl=en" aria-label="Linkedin">
                <i class="fab fa-instagram"></i>
              </a>
              <a className="social-icon-link Linkedin" href="https://www.linkedin.com/in/codejethq/" aria-label="Linkedin">
                <i className="fab fa-linkedin"></i>
              </a>
              <a className="social-icon-link Linkedin" href="https://www.youtube.com/channel/UCgT135sKT2vvY04WDHN3muQ" aria-label="Linkedin">
                <i className="fab fa-youtube"></i>
              </a>
              <a className="social-icon-link Linkedin" href="https://www.facebook.com/Codejet-100550882512015/?ref=pages_you_manage" aria-label="Linkedin">
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
