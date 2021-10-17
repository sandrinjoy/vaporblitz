import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
   
    <Router>
    <Navbar/>
        <ScrollToTop />

        <Switch>
          
          <Route exact path="/" component={Home} />
          
        </Switch>
        <Footer />
    </Router>
   
    </>
  );
}

export default App;