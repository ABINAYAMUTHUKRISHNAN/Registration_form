import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Form_sam from "./Components/Form_sam";
import Details from "./Components/Details";
import View2 from "./Components/View2";
class App extends Component {
  render() {
    return <Details />;
  }
}

export default App;
