import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

function App() {
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
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
