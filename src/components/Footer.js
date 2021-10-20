import React from "react";

function Footer() {
  return (
    <div>
      <footer class="container-fluid" id="gtco-footer">
        <div
          class="container"
          style={{ justifyContent: "center", marginTop: "80px" }}
        >
          <div class="row">
            <div class="col-6">
              <h4>Company</h4>
              <ul class="nav flex-column company-nav">
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Services
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Contact
                  </a>
                </li>
              </ul>
              <h4 class="mt-5">Follow Us</h4>
              <ul class="nav follow-us-nav">
                <li class="nav-item">
                  <a class="nav-link pl-0" href="/">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    <i class="fa fa-google" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-6">
              <h4>Our Team</h4>
              <ul class="nav flex-column services-nav">
                <li class="nav-item">Mohit Jain</li>
                <li class="nav-item">Manish Suthar</li>
                <li class="nav-item">Navdeep Dhakar</li>
              </ul>
            </div>
            <div class="col-12">
              <p>&copy; 2021. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
