import React from "react";
import "./Community.css";
export default function Community() {
  return (
    <div>
      <div className="card-container" style={{ marginBottom: "20px" }}>
        {/* <span className="pro">PRO</span> */}
        <img className="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" style={{ float: "left" }} />
        <h3 style={{ float: "left" }}>Dani daniels</h3>
        <div className="row">
          <div className="col">
            <h6>Projects completed</h6>
            <p>
              🔸React native app <br />
              🔸React native app
            </p>
          </div>
          <div className="col">
            <h6>Rating</h6>
            <p>⭐⭐⭐⭐⭐</p>
          </div>
        </div>
        {/* <div className="buttons">
          <button className="primary">Message</button>
          <button className="primary ghost">Following</button>
        </div> */}
        <div className="skills">
          <h6>Skills</h6>
          <div className="row">
            <div className="col">
              <ul>
                <li>UI / UX</li>
                <li>Front End Development</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
              </ul>
            </div>
            <div className="col">
              <div className="buttons" style={{ float: "right" }}>
                <button className="primary">Message</button>
                <button className="primary ghost">Following</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-container" style={{ marginBottom: "20px" }}>
        {/* <span className="pro">PRO</span> */}
        <img className="round" src="images/customer2.jpg" alt="user" style={{ float: "left" }} />
        <h3 style={{ float: "left" }}>Ricky Park</h3>
        <div className="row">
          <div className="col">
            <h6>Projects completed</h6>
            <p>
              🔸React native app
              <br />
              🔸React native app
            </p>
          </div>
          <div className="col">
            <h6>Rating</h6>
            <p>⭐⭐⭐⭐⭐</p>
          </div>
        </div>
        {/* <div className="buttons">
          <button className="primary">Message</button>
          <button className="primary ghost">Following</button>
        </div> */}
        <div className="skills">
          <h6>Skills</h6>
          <div className="row">
            <div className="col">
              <ul>
                <li>UI / UX</li>
                <li>Front End Development</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
              </ul>
            </div>
            <div className="col">
              <div className="buttons" style={{ float: "right" }}>
                <button className="primary">Message</button>
                <button className="primary ghost">Following</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-container" style={{ marginBottom: "20px" }}>
        {/* <span className="pro">PRO</span> */}
        <img className="round" src="images/customer1.jpg" alt="user" style={{ float: "left" }} />
        <h3 style={{ float: "left" }}>Ricky Park</h3>
        <div className="row">
          <div className="col">
            <h6>Projects completed</h6>
            <p>
              🔸React native app <br />
              🔸React native app
            </p>
          </div>
          <div className="col">
            <h6>Rating</h6>
            <p>⭐⭐⭐⭐⭐</p>
          </div>
        </div>
        {/* <div className="buttons">
          <button className="primary">Message</button>
          <button className="primary ghost">Following</button>
        </div> */}
        <div className="skills">
          <h6>Skills</h6>
          <div className="row">
            <div className="col">
              <ul>
                <li>UI / UX</li>
                <li>Front End Development</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
              </ul>
            </div>
            <div className="col">
              <div className="buttons" style={{ float: "right" }}>
                <button className="primary">Message</button>
                <button className="primary ghost">Following</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
