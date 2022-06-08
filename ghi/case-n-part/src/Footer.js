import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright, faLinkSlash } from "@fortawesome/free-solid-svg-icons";

import { myLinks, loginLinks } from "./Nav";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark h-23">
      <div className="container align-content-center m-5">
        <div className="row">
          <div className="col-sm-8 text-start">
            <span className="text-muted">
              <h2>Case N' Parts</h2>
              <p>Create beautiful PC builds with the latest parts</p>
              <FontAwesomeIcon icon={faCopyright} /> 2022
            </span>
          </div>
          <div className="col-sm text-start">
            <div className="text-muted">
              <h4>Builds</h4>
              {myLinks.map((link, index) => {
                return (
                  <Link key={index} to={link.path}>
                    <p>{link.name}</p>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="col-sm text-start">
            <div className="text-muted">
              <h4>Account</h4>
              {loginLinks.map((link, index) => {
                return (
                  <Link key={index} to={link.path}>
                    <p>{link.name}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
