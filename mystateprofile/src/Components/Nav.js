import React from "react";
import { Breadcrumb } from "react-bootstrap";
const Nav = () => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Friends</Breadcrumb.Item>
        <Breadcrumb.Item active>Profile</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default Nav;
