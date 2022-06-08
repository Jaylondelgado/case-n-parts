import React from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright, faLinkSlash } from "@fortawesome/free-solid-svg-icons";

import { myLinks, loginLinks } from "./Nav";

const Footer = () => {
  return (
    <footer className='footer mt-auto py-3 bg-dark h-23'>
      <div className='container align-content-center m-5'>
        <div className='row'>
          <div className='col text-start'>
            <span className='text-muted'>
              <h2>Case N' Parts</h2>
              <p>Create beautiful PC builds with the latest parts</p>
            </span>
          </div>
          <div className='col text-start'>
            <span className='text-muted'>
              <h4>Builds</h4>
              {myLinks.map((link, index) => {
                <NavLink key={index} to={link.path}>
                  <a>{link.name}</a>
                </NavLink>;
              })}
            </span>
          </div>
        </div>
        <div className='row'>
          <div className='col text-start'>
            <span className='text-muted'>
              <FontAwesomeIcon icon={faCopyright} /> 2022
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
