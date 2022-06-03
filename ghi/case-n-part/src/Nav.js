import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Navbar } from "./static/cnpStyle";
import logo from "./static/logo.png";

const links = [
  { name: "My Builds", path: "/mybuilds" },
  { name: "Create Builds", path: "/create" },
  { name: "View Builds", path: "/toprated" },
  { name: "Login", path: "/login" },
];

function Nav() {
  return (
    <Navbar>
      {links.map((link) => (
        <NavLink to={link.path} exact activeClassName="current">
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
