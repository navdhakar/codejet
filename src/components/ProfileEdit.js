import React, { useState, useEffect, useRef } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
let history = useHistory();

import "./profileEdit.css";
const server = process.env.NODE_ENV == "production" ? "https://codejet.herokuapp.com" : "http://127.0.0.1:8002";

export default function ProfileEdit() {
  const [profile_data, profile_load] = useState({});
  const [image, setImage] = useState();

  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const usernameRef = useRef();
  const emailRef = useRef();
  const collegenameRef = useRef();
  const branchRef = useRef();
  const collegeyearRef = useRef();
  const githubRef = useRef();
  const skillsRef = useRef();

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
  const header_data = {
    "Content-Type": "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
  };

  if (getCookie("auth_token") != null || undefined) {
    header_data.authorization = getCookie("auth_token");
    console.log(header_data);
  } else {
    console.log(header_data);
  }
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };
  useEffect(() => {
    fetch(`${server}/signup/register/current`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
      // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: header_data,
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body data type must match "Content-Type" header
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data fetched");
        // profile_data.name = data.name;
        // profile_data.email = data.email;
        // profile_data.college_name = data.college_name;
        // profile_data.college_year = data.college_year;
        // profile_data.college_branch = data.college_branch;
        // profile_data.github_profile = data.github_profile;
        // profile_load([]);
        profile_load({
          name: data.name,
          email: data.email,
          college_name: data.college_name,
          college_year: data.college_year,
          college_branch: data.college_branch,
          github_profile: data.github_profile,
          skills: data.skills,
        });
        setImage();
        if (data.profileImg) {
          setImage(data.profileImg);
        }
        console.log(image);
        console.log(data);
        console.log(profile_data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleSubmission = (e) => {
    const header_profile_data = {
      // "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    };
    if (getCookie("auth_token") != null || undefined) {
      header_profile_data.authorization = getCookie("auth_token");
      console.log(header_profile_data);
    } else {
      console.log(header_profile_data);
    }
    const formData = new FormData();

    formData.append("profileImg", selectedFile);

    fetch(`${server}/signup/register/profile_upload`, {
      method: "POST",
      body: formData, // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
      // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: header_profile_data,
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body data type must match "Content-Type" header
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        history.push("/profile");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // e.preventDefault();
  };
  const update_data = (e) => {
    const updated_data = {
      name: usernameRef.current.value,
      email: emailRef.current.value,
      college_name: collegenameRef.current.value,
      college_branch: branchRef.current.value,
      college_year: collegeyearRef.current.value,
      github_profile: githubRef.current.value,
      skills: skillsRef.current.value,
    };
    fetch(`${server}/signup/register/data_update`, {
      method: "POST",
      body: JSON.stringify(updated_data), // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
      // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: header_data,
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body data type must match "Content-Type" header
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        history.push("/profile");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log(updated_data);
  };
  return (
    <div>
      <div className="container">
        <div className="main-body">
          <div className="row">
            <div className="col-lg-4">
              <div className="card1">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src={image} alt="Admin" className="rounded p-1 bg-primary" width={110} />

                    <div className="row">
                      <form>
                        <div className="form-group">
                          <input type="file" name="profileImg" onChange={changeHandler} id="inputfile" />
                          <label for="file" class="file">
                            +
                          </label>
                          {isFilePicked ? (
                            <div>
                              <p>Imagename: {selectedFile.name}</p>
                              <p>Filetype: {selectedFile.type}</p>
                              <p>Size in bytes: {selectedFile.size}</p>
                              <p>lastModifiedDate: {selectedFile.lastModifiedDate.toLocaleDateString()}</p>
                            </div>
                          ) : (
                            <p>Select a image file</p>
                          )}
                        </div>
                        <div className="form-group">
                          <button className="btn btn-primary" onClick={handleSubmission} type="submit">
                            Upload
                          </button>
                        </div>
                      </form>
                    </div>

                    <div className="mt-3">
                      <h4>{profile_data.name}</h4>
                      <p className="text-secondary mb-1">Full Stack Developer</p>
                      <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                      <button className="btn btn-primary">Follow</button>
                      <button className="btn btn-outline-primary">Message</button>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-globe me-2 icon-inline"
                        >
                          <circle cx={12} cy={12} r={10} />
                          <line x1={2} y1={12} x2={22} y2={12} />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                        Website
                      </h6>
                      <span className="text-secondary">https://bootdey.com</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github me-2 icon-inline"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        Github
                      </h6>
                      <input type="text" className="form-control" ref={githubRef} defaultValue={profile_data.github_profile} />
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-twitter me-2 icon-inline text-info"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                        Twitter
                      </h6>
                      <span className="text-secondary">@bootdey</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-instagram me-2 icon-inline text-danger"
                        >
                          <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                        Instagram
                      </h6>
                      <span className="text-secondary">bootdey</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-facebook me-2 icon-inline text-primary"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                        Facebook
                      </h6>
                      <span className="text-secondary">bootdey</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input type="text" ref={usernameRef} className="form-control" defaultValue={profile_data.name} />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input type="text" className="form-control" ref={emailRef} defaultValue={profile_data.email} />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">College name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input type="text" className="form-control" ref={collegenameRef} defaultValue={profile_data.college_name} />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">College branch</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input type="text" className="form-control" ref={branchRef} defaultValue={profile_data.college_branch} />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">College year</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input type="text" className="form-control" ref={collegeyearRef} defaultValue={profile_data.college_year} />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Skills</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input type="text" className="form-control" ref={skillsRef} defaultValue={profile_data.skills} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3" />
                    <div className="col-sm-9 text-secondary">
                      <button className="btn btn-primary" onClick={update_data} type="submit">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="d-flex align-items-center mb-3">Project Status</h5>
                      <p>Web Design</p>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p>Website Markup</p>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: "72%" }}
                          aria-valuenow={72}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p>One Page</p>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "89%" }}
                          aria-valuenow={89}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p>Mobile Template</p>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow={55}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p>Backend API</p>
                      <div className="progress" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "66%" }}
                          aria-valuenow={66}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
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
