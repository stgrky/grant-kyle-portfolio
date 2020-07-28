import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.scss";

const Header = (props) => {
  return (
    <div className="row gkp-header">
      <Navbar bg="light" expand="lg">
        <div className="col-sm-3 gkp-header-items gkp-header--projects">
          <Navbar.Brand className="gkp-header--text" href="/">Home</Navbar.Brand>
        </div>
        <div className="col-sm-3 gkp-header-items gkp-header--about">
          <Nav.Link className="gkp-header--text" href="/projects">Projects</Nav.Link>
        </div>
        {/* <div className="col-sm-3 gkp-header-items gkp-header--contact">
          <Nav.Link className="gkp-header--text" href="/blog">Blog</Nav.Link>
        </div> */}
      </Navbar>
    </div>
  );
};

export default Header;
