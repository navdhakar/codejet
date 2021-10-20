import React, { useRef } from "react";

const server = process.env.NODE_ENV == "production" ? "production address" : "http://127.0.0.1:8002";
function Hire() {
  const companynameRef = useRef();
  const contactRef = useRef();
  const emailRef = useRef();
  const titleRef = useRef();
  const technologyRef = useRef();
  const budgetRef = useRef();
  const experienceRef = useRef();
  const descriptionRef = useRef();
  const timeRef = useRef();

  function hire(e) {
    e.preventDefault();
    const hire_data = {
      company_name: companynameRef.current.value,
      contact_no: contactRef.current.value,
      email: emailRef.current.value,
      project_title: titleRef.current.value,
      technology_required: technologyRef.current.value,
      budget: budgetRef.current.value,
      time_limit: timeRef.current.value,
      required_experience: experienceRef.current.value,
      project_description: descriptionRef.current.value,
    };

    fetch(`${server}/hire_api/hire/hire_us`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
      body: JSON.stringify(hire_data),
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
        console.log(hire_data);
        return res.json();
      })
      .then((data) => console.log(data));
  }

  return (
    <div>
      <div className="container-fluid" style={{ marginTop: "80px", marginBottom: "80px" }} id="gtco-footer">
        <div className="container">
          <div className="row">
            <div className="col" id="contact">
              <h4> Hire Us </h4>
              <input type="text" ref={companynameRef} className="form-control" placeholder="Company Name" />
              <input type="text" ref={contactRef} className="form-control" placeholder="Company Contact Number" />
              <input type="text" ref={emailRef} className="form-control" placeholder="Company Email" />
              <input type="text" ref={titleRef} className="form-control" placeholder="Project title" />

              <input type="text" ref={technologyRef} className="form-control" placeholder="Technology Required" />
              <input type="text" ref={budgetRef} className="form-control" placeholder="Budget" />
              <input type="text" ref={timeRef} className="form-control" placeholder="Time" />
              <input type="text" ref={experienceRef} className="form-control" placeholder="Experience Required" />
              <select className="form-control">
                <option value=" Web Development" selected>
                  Web Development
                </option>
                <option value="volvo">App Development</option>
                <option value="saab">Seo</option>
                <option value="vw">Web design(UI/UX)</option>
              </select>
              <textarea className="form-control" ref={descriptionRef} placeholder="Tell us About your Project" defaultValue={""} />
              <a href="/" className="submit-button" onClick={hire}>
                HIRE
                <i className="fa fa-angle-right" aria-hidden="true" />
              </a>
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

export default Hire;
