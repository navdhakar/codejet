import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Hire from "./components/Hire";
import Opportunity from "./components/Opportunity";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Why from "./components/Why";
import Hired from "./components/Hired";
import Community from "./components/Community";
import Profile from "./components/Profile";
import Emailver from "./components/Emailver";
import ProfileEdit from "./components/ProfileEdit";
import ReactGa from "react-ga";
import Paid from "./components/paid";

const server = process.env.NODE_ENV == "production" ? "https://codejet.herokuapp.com" : "http://127.0.0.1:8002";

function App() {
  useEffect(() => {
    ReactGa.initialize("G-H96HSG3SJ0");
    ReactGa.pageview("/");
  }, []);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/opportunity" exact component={Opportunity} />
        <Route path="/why" exact component={Why} />
        <Route path="/hireus" exact component={Hire} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/about" exact component={About} />
        <Route path="/hired" exact component={Hired} />
        <Route path="/community" exact component={Community} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/email_verification" exact component={Emailver} />
        <Route path="/edit_profile" exact component={ProfileEdit} />
        <Route path="/paid" exact component={Paid} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
