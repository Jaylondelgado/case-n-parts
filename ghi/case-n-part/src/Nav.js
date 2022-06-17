import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export const myLinks = [
  { name: "My Builds", path: "/builds/mybuilds" },
  { name: "Create Builds", path: "builds/create" },
  { name: "View Builds", path: "/builds/listbuilds" },
  { name: "Logout", path: "/logout" },
];

export const loginLinks = [
  { name: "Login", path: "/login" },
  { name: "Sign up", path: "/signup" },
];

const classesIfLoggedIn = "navbar-nav";
const classesIfNotLoggedIn = "navbar-nav ms-auto";

function Nav(props) {
  const links = props.token ? myLinks : loginLinks;
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <NavLink className="text-decoration-none" to="/">
          <h1 className="navbar-brand text-uppercase fs-2">
            {"Case N' Parts"}
          </h1>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul
            className={props.token ? classesIfLoggedIn : classesIfNotLoggedIn}
          >
            {links.map((link, index) => (
              <NavLink key={index} to={link.path}>
                <button className="btn btn-outline-primary me-4">
                  {link.name}
                </button>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
