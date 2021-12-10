import React from "react";
import "./Community.css";
export default function Community() {
  return (
    <div>
      <h3 style={{ marginLeft: "5%", marginBottom: "2%" }}>Top students</h3>

      <div className="card-container" style={{ marginBottom: "20px", height: "10%" }}>
        {/* <span className="pro">PRO</span> */}
        <img className="round" src="images/customer1.jpg" width="180" height="230" alt="user" style={{ float: "left" }} />
        <div className="row">
          <div className="col">
            <h3 style={{ float: "left" }}>Shephali Bansal</h3>
          </div>
          <div className="col" style={{ marginLeft: "5%" }}>
            <div className="row">
              <h6>Projects completed</h6>
            </div>
            <ul style={{ color: "black" }}>
              <div className="row">
                <li>
                  <nobr>Marketing Agency Website</nobr>
                </li>
              </div>
              <div className="row">
                <li>
                  <nobr>IOS App Design</nobr>
                </li>
              </div>
              <div className="row">
                <li>
                  <nobr>Text Editor</nobr>
                </li>
              </div>
            </ul>
          </div>

          <div className="col" style={{ marginLeft: "5%" }}>
            <div className="row">
              <h6>Rating</h6>
            </div>
            <div className="row">
              <p>⭐⭐⭐⭐</p>
            </div>
          </div>
        </div>
        {/* <div className="buttons">
          <button className="primary">Message</button>
          <button className="primary ghost">Following</button>
        </div> */}
        <div className="skills">
          <h6 style={{ color: "#fff" }}>Skills</h6>
          <div className="row">
            <div className="col">
              <ul>
                <li>UI / UX</li>
                {/* <li>Full stack Development</li> */}
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
                <li>Python</li>
                <li>Java</li>
                <li>JSP</li>
                <li>Ajax</li>
              </ul>
            </div>
            <div className="col">
              <div className="buttons" style={{ float: "right" }}>
                {/* <button className="primary">Message</button> */}
                {/* <button className="primary ghost">See More</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-container" style={{ marginBottom: "20px", height: "10%" }}>
        {/* <span className="pro">PRO</span> */}
        <img className="round" src="images/customer2.jpg" width="180" height="230" alt="user" style={{ float: "left" }} />

        <div className="row">
          <div className="col">
            <h3 style={{ float: "left" }}>Mayank Gupta</h3>
          </div>
          <div className="col" style={{ marginLeft: "5%" }}>
            <div className="row">
              <h6>Projects completed</h6>
            </div>
            <ul style={{ color: "black" }}>
              <div className="row">
                <li>
                  <nobr>Online Banking Project</nobr>
                </li>
              </div>
              <div className="row">
                <li>
                  <nobr>Music streaming app</nobr>
                </li>
              </div>
              {/* <div className="row">
                <li>
                  <nobr>Text Editor</nobr>
                </li>
              </div> */}
            </ul>
          </div>

          <div className="col" style={{ marginLeft: "5%" }}>
            <div className="row">
              <h6>Rating</h6>
            </div>
            <div className="row">
              <p>⭐⭐⭐⭐</p>
            </div>
          </div>
        </div>
        {/* <div className="buttons">
          <button className="primary">Message</button>
          <button className="primary ghost">Following</button>
        </div> */}
        <div className="skills">
          <h6 style={{ color: "#fff" }}>Skills</h6>
          <div className="row">
            <div className="col">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
                <li>JSP</li>
                <li>Ajax</li>
              </ul>
            </div>
            <div className="col">
              <div className="buttons" style={{ float: "right" }}>
                {/* <button className="primary">Message</button> */}
                {/* <button className="primary ghost">See More</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-container" style={{ marginBottom: "20px" }}>
        {/* <span className="pro">PRO</span> */}
        <img className="round" src="images/customer3.jpg" width="180" height="230" alt="user" style={{ float: "left" }} />
        <div className="row">
          <div className="col">
            <h3 style={{ float: "left" }}>Priyanka Gupta</h3>
          </div>
          <div className="col" style={{ marginLeft: "5%" }}>
            <div className="row">
              <h6>Projects completed</h6>
            </div>
            <ul style={{ color: "black" }}>
              <div className="row">
                <li>
                  <nobr>Broadcasting Chatserver</nobr>
                </li>
              </div>
              <div className="row">
                <li>
                  <nobr>Travel Website</nobr>
                </li>
              </div>
              {/* <div className="row">
                <li>
                  <nobr>Text Editor</nobr>
                </li>
              </div> */}
            </ul>
          </div>

          <div className="col" style={{ marginLeft: "5%" }}>
            <div className="row">
              <h6>Rating</h6>
            </div>
            <div className="row">
              <p>⭐⭐⭐</p>
            </div>
          </div>
        </div>
        {/* <div className="buttons">
          <button className="primary">Message</button>
          <button className="primary ghost">Following</button>
        </div> */}
        <div className="skills">
          <h6 style={{ color: "#fff" }}>Skills</h6>
          <div className="row">
            <div className="col">
              <ul>
                <li>UI / UX</li>
                {/* <li>Front End Development</li> */}
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Core Java</li>
                <li>Android</li>
                {/* <li>React</li> */}
                {/* <li>Node</li> */}
              </ul>
            </div>
            <div className="col">
              <div className="buttons" style={{ float: "right" }}>
                {/* <button className="primary">Message</button> */}
                {/* <button className="primary ghost">See More</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-container" style={{ marginBottom: "20px" }}>
        {/* <span className="pro">PRO</span> */}
        <img className="round" src="images/customer4.jpg" width="180" height="230" alt="user" style={{ float: "left" }} />
        <div className="row">
          <div className="col">
            <h3 style={{ float: "left" }}>Divya Agarwal</h3>
          </div>
          <div className="col" style={{ marginLeft: "5%" }}>
            <div className="row">
              <h6>Projects completed</h6>
            </div>
            <ul style={{ color: "black" }}>
              <div className="row">
                <li>
                  <nobr>Hotel Management Website</nobr>
                </li>
              </div>
              <div className="row">
                <li>
                  <nobr>Biomatric Enrollment app</nobr>
                </li>
              </div>
              {/* <div className="row">
                <li>
                  <nobr>Text Editor</nobr>
                </li>
              </div> */}
            </ul>
          </div>

          <div className="col" style={{ marginLeft: "5%" }}>
            <div className="row">
              <h6>Rating</h6>
            </div>
            <div className="row">
              <p>⭐⭐</p>
            </div>
          </div>
        </div>
        {/* <div className="buttons">
          <button className="primary">Message</button>
          <button className="primary ghost">Following</button>
        </div> */}
        <div className="skills">
          <h6 style={{ color: "#fff" }}>Skills</h6>
          <div className="row">
            <div className="col">
              <ul>
                <li>UI / UX</li>
                <li>Front End Development</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                {/* <li>React</li>
                <li>Node</li> */}
              </ul>
            </div>
            <div className="col">
              <div className="buttons" style={{ float: "right" }}>
                {/* <button className="primary">Message</button> */}
                {/* <button className="primary ghost">See More</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-container" style={{ marginBottom: "20px" }}>
        {/* <span className="pro">PRO</span> */}
        <img className="round" src="images/customer5.jpg" width="180" height="230" alt="user" style={{ float: "left" }} />
        <div className="row">
          <div className="col">
            <h3 style={{ float: "left" }}>Rajat Agarwal</h3>
          </div>
          <div className="col" style={{ marginLeft: "5%" }}>
            <div className="row">
              <h6>Projects completed</h6>
            </div>
            <ul style={{ color: "black" }}>
              <div className="row">
                <li>
                  <nobr>Ecommerce Website</nobr>
                </li>
              </div>
              <div className="row">
                <li>
                  <nobr>React native app</nobr>
                </li>
              </div>
              {/* <div className="row">
                <li>
                  <nobr>Text Editor</nobr>
                </li>
              </div> */}
            </ul>
          </div>

          <div className="col" style={{ marginLeft: "5%" }}>
            <div className="row">
              <h6>Rating</h6>
            </div>
            <div className="row">
              <p>⭐⭐</p>
            </div>
          </div>
        </div>
        {/* <div className="buttons">
          <button className="primary">Message</button>
          <button className="primary ghost">Following</button>
        </div> */}
        <div className="skills">
          <h6 style={{ color: "#fff" }}>Skills</h6>
          <div className="row">
            <div className="col">
              <ul>
                {/* <li>UI / UX</li>
                <li>Front End Development</li> */}
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                {/* <li>Node</li> */}
              </ul>
            </div>
            <div className="col">
              <div className="buttons" style={{ float: "right" }}>
                {/* <button className="primary">Message</button> */}
                {/* <button className="primary ghost">See More</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
