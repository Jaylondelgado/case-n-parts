import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Navbar } from "./static/cnpStyle";
import logo from "./static/logo.png";

const myLinks = [
  { name: "My Builds", path: "/mybuilds" },
  { name: "Create Builds", path: "/create" },
  { name: "View Builds", path: "/toprated" },
  { name: "Logout", path: "/logout" },
];

const loginLinks = [
  { name: "Login", path: "/login" },
  { name: "Sign up", path: '/signup' },
];

function Nav(props) {
  const links = props.token ? myLinks : loginLinks;
  return (
    <Navbar>
      {links.map((link, index) => (
        <NavLink key={index} to={link.path}>
          <Button>{link.name}</Button>
        </NavLink>
      ))}
      <div>
        <NavLink to="/">
          <img src={logo} alt="Case N Parts" width="350" />
        </NavLink>
      </div>
    </Navbar>
  );
}

export default Nav;
