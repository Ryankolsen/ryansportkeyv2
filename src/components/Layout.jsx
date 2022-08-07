import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavDropdown, Navbar, Nav } from "react-bootstrap";

import BlackMage from "./BlackMage";
import backgroundImg from "../media/backgroundDBZ.png";

import "../styles/App.css";

export default function Layout(props) {
  const title = useRef();
  const dbzImg = useRef();
  const backgroundH2 = useRef();
  const titleBackground = useRef();
  return (
    <div className="layout__main-container">
      <header className="layout__header">
        <div ref={titleBackground} className="layout__header__container">
          <div className="layout__blm-container">
            <BlackMage
              title={title}
              titleBackground={titleBackground}
              dbzImg={dbzImg}
              backgroundH2={backgroundH2}
            />
          </div>
          <h2 ref={title} className="layout__title">
            {" "}
            Ryan's Portfolio
          </h2>
        </div>
        <Navbar
          className="layout__nav-bar"
          bg="dark"
          expand="lg"
          variant="dark"
        >
          <Navbar.Brand className="myNavLink" as={Link} to="/">
            Home
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/ReactPage" className="mr-4">
                React
              </Nav.Link>
              <NavDropdown title="Links" id="navbarScrollingDropdown">
                <NavDropdown.Item href="https://github.com/Ryankolsen">
                  GitHub
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.linkedin.com/in/ryan-olsen-a5463a18/">
                  LinkedIn
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.facebook.com/ryan.olsen.524">
                  Facebook
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="https://main--astonishing-rolypoly-ad8c2b.netlify.app/">
                  Google Book API
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.ryanswebsite0909.com/">
                  Blog Website Example
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/About" className="mr-4">
                About{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>

      <div className="layout__background-sides">
        <div ref={dbzImg} className="layout__background">
          <h2 ref={backgroundH2} className="layout__background__h2">
            Projects
          </h2>
          <p className="layout__background__p"></p>
          <a href={backgroundImg} className="layout__background__a">
            <div className="layout__background__a-container"></div>
          </a>
        </div>
      </div>
      <div className="layout__background-solid">
        <div className="layout__body">{props.children}</div>
      </div>
    </div>
  );
}
