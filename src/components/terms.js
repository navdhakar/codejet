import React from "react";
import { Link } from "react-router-dom";

export default function terms() {
  return (
    <div style={{ margin: "100px" }}>
      <div className="row" style={{ paddingBottom: "30px" }}>
        <div className="col-md-5">
          <h3 style={{ paddingBottom: "30px" }}>Terms & Conditions</h3>
          <h4 style={{ paddingBottom: "30px" }}>UNPAID INTERNSHIP👇</h4>
          {/* <p style={{ paddingBottom: "20px" }}> */}
            {" "}
            <h4>💡About the internship</h4><br></br>
          {/* </p> */}
          {/* <p style={{ paddingBottom: "30px" }}> */}
<b>Completion Certificate:</b>Awarded after successful completion of one month of internship.<br></br>
<b>Recommendation letter:</b>Will be provided to interns who performed really well in the tasks allotted.<br></br>
<b>Workshop/Guidance:</b> Will set the opportunity to work under supervision and chances to attend several interactive sessions.<br></br>
<b>Network Opportunity:</b> Multicultural diverse working environment is available for interns.We will post your profile on our website.This will help you to grow your network and finding more job & freelancing opportunities.<br></br>
<br></br>


          {/* </p> */}
          {/* <p>By hiring us you will not only have best IT services at your disposal but you will become part of great cause and revolution.</p> */}
          <h4>💡Details information</h4><br></br>
          <b>UNPAID INTERNSHIP:</b>This is an unpaid internship of one month during which you’ll be trained, mentored, and observed for future roles. You’ll be given opportunities to increase your exposure within the team and will also learn from the mentors.<br></br>
          <b>FLEXIBLE WORKING HOURS:</b>During the course of the internship you will be expected to work from home with the flexibility to manage your time. The tasks assigned are easy and can be finished in your extra time.<br></br>
          <b>WORK FROM HOME:</b>You’ll use your own computers with internet connections and coordinate with your team members through Whatsapp.<br></br>
          <br></br>
          <h4>💡LEARNING THROUGH THIS INTERNSHIP</h4><br></br>

          <b>SCHEDULED CALLS AND MEETINGS:</b> Regular contact with core team members via live online sessions.<br></br>
          <b>MENTOR STAND:</b> Our mentors are there to guide and support you at any time.You can reach the mentors through email or whatsapp.<br></br>
          <b>ON DEMAND SUPPORT:</b> you feel, you can mail us for help. We will guide you to the correct resources.<br></br>
        </div>
        <h4 style={{ paddingBottom: "30px" }}>UNPAID INTERNSHIP👇</h4>

      </div>
      <div className="row" style={{ paddingBottom: "30px" }}>
        <div className="col-md-5">
          <h1 style={{ paddingBottom: "20px" }}>Why us </h1>
          <p style={{ paddingBottom: "20px" }}>● We provide very affordable prices in compare to other IT services providers</p>
          <p style={{ paddingBottom: "20px" }}>
            ● We want to save students and IT service requirer like you from those middleman who charge absurd prices to you for their services and pay very
            less to students they hire in name of internship.
          </p>
          <p style={{ paddingBottom: "20px" }}>
            ● We connect developers directly to recruiter by eliminating third party middleman and cutting cost of operations hence saving your money.
          </p>
          <p style={{ paddingBottom: "20px" }}>● We hire highly skilled student developer who work under guidance of industry experts.</p>
          <p style={{ paddingBottom: "20px" }}>
            ● as our developers are students who are always learning new tech. services provided by our developers will be highly oriented with ever evolving
            new technology and so will be your product.
          </p>

          <p style={{ paddingBottom: "20px" }}>● you will be hiring new and fresh mindset of developer which is open to new opportunities and hard tasks.</p>
          <p style={{ paddingBottom: "20px" }}>
            ● If you have a startup idea, you can find highly motivated and tech enthusiastic developers to take it to the next big step.
          </p>
          <p style={{ paddingBottom: "20px" }}>
            ● We are not like other service based company , our team of developer is focussed solely on your project providing best service and support for you.
          </p>
          <p style={{ paddingBottom: "20px" }}>So what are you waiting for 🤗!!</p>
          <div className="container-fluid gtco-banner-area" style={{ marginBottom: "-500px" }}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="navnik">
                    {/* <Link to="/opportunity" className="mohirti" style={{ marginRight: "30px" }}>
                  Find Work
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </Link> */}
                    <Link to="/contact" className="mohirti" style={{ marginRight: "30px", marginLeft: "-35px" }}>
                      Contact us
                      <i className="fa fa-angle-right" aria-hidden="true" />
                    </Link>
                    <Link to="/hireus">
                      Hire us
                      <i className="fa fa-angle-right" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
