import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Nav from "./Components/Nav";
import Profile from "./Components/Profile";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Profile />
      </div>
    );
  }
}
export default App;
