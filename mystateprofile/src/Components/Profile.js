import React, { Component } from "react";
import { Container, Image, Button } from "react-bootstrap";

class Profile extends Component {
  // rccp: react class component
  styles = {
    fontStyle: "italic",
    color: "teal",
  };
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
    console.log("Profile is Rendred on the DOM!");
    return (
      <div>
        {this.state.shows ? (
          <Container style={this.styles}>
            <Image
              style={{ variant: "top", width: "250px", height: "280px" }}
              src={this.state.Person.imgSrc}
              roundedCircle
            />
            <h1>{this.state.Person.fullName}</h1>
            <span>{this.state.Person.bio}</span>
            <hr />
            <h3>{this.state.Person.profession}</h3>
          </Container>
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

export default Profile;
