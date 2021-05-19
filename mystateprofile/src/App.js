import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Nav from "./Components/Nav";
import Profile from "./Components/Profile";
import { Button } from "react-bootstrap";

class App extends Component {
  //rccp: react class component export
  constructor(props) {
    // rconst: react constructor
    super(props);
    this.state = {
      Person: {
        fullName: "Rahmouni Ferdaous",
        bio: "I'am a FullStack JS Developer, Laravel Developer and Computer/Mobile Expert",
        imgSrc: "/me.jpg",
        profession: "IT Engineer",
      },
      shows: "true",
      count: 0,
    };
    console.log("Profile is Initialised!");
  }

  OnToogle = () => {
    this.setState({
      shows: !this.state.shows,
    });
  };

  componentDidMount() {
    setInterval(() => {
      if (!this.state.show) {
        this.setState({ count: this.state.count + 1 });
      } else {
        this.setState({ count: 0 });
      }
    }, 1000);
    console.log("Profile is Mounted!");
  }
  componentDidUpdate() {
    console.log("Profile is Updated!");
  }
  render() {
    return (
      <div className="App">
        <Nav />
        {this.state.shows ? (
          <Profile
            fullName={this.state.Person.fullName}
            bio={this.state.Person.bio}
            imgSrc={this.state.Person.imgSrc}
            profession={this.state.Person.profession}
          />
        ) : (
          <span style={{ fontStyle: "italic", color: "purple" }}>
            {this.state.count}
          </span>
        )}
        <br />
        <Button
          onClick={this.OnToogle}
          style={{ size: "lg", marginTop: "20px", marginBottom: "20px" }}
          variant="info"
        >
          Toogle
        </Button>
      </div>
    );
  }
}
export default App;
