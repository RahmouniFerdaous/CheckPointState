import React from "react";
import { Container, Image } from "react-bootstrap";

const Profile = ({ fullName, bio, imgSrc, profession }) => {
  return (
    <div>
      <Container style={{ fontStyle: "italic", color: "teal" }}>
        <Image
          style={{ variant: "top", width: "250px", height: "280px" }}
          src={imgSrc}
          roundedCircle
        />
        <h1>{fullName}</h1>
        <span>{bio}</span>
        <hr />
        <h3>{profession}</h3>
      </Container>
    </div>
  );
};

export default Profile;
