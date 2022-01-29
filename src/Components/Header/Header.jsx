import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import "./style.scss";

const Header = (props) => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="gkp-header__menu-items gkp-header--projects"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <div className="gkp-header__menu-items gkp-header--projects">
            <Nav.Link href="/">Projects</Nav.Link>
          </div>
          <div className="gkp-header__menu-items gkp-header--projects">
            <Nav.Link href="/about">About</Nav.Link>
          </div>
          {/* <div className="gkp-header__menu-items gkp-header--projects">
            <Nav.Link href="/freelance">Freelance</Nav.Link>
          </div> */}
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand href="#home">
        <div id="gkp-header__social-section" className="row text-center social">
          <a
            href="https://github.com/grantkyle"
            aria-label="Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt=""
              className="gkp-header__social-logo"
              href="https://github.com/grantkyle"
              src="../assets/icons/github-logo.svg"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/grant-kyle-53298711a/"
            aria-label="Linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt=""
              className="gkp-header__social-logo"
              src="../assets/icons/linkedin-logo.svg"
            />
          </a>
          <a
            href="mailto:sgrantkyle@gmail.com"
            aria-label="Email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt=""
              className="gkp-header__social-logo"
              src="../assets/icons/gmail-logo.svg"
            />
          </a>
        </div>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
