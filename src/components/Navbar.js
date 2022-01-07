import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../Assets/vkm_logo 1.png";

const LandingNav = () => {
  return (
    <Navbar expand="lg" className="bg-white-50">
      <Container>
        <Navbar.Brand href="/" className="align-middle d-flex">
          <img
            alt=""
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{" "}
          <h5 className="mt-auto fs-2 ms-3 ">CMS</h5>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mt-auto">
            <Nav.Link href="/About" className="text-primary fs-4">
              About
            </Nav.Link>
            <Nav.Link href="/institutions" className="text-primary  fs-4">
              Institutions
            </Nav.Link>
            {/* <Nav.Link href="/dashboard" className="text-primary">
              Dashboard
            </Nav.Link> */}
          </Nav>

          <div className="d-flex flex-column flex-lg-row">
            <a href="/login">
              <button
                type="button"
                className="btn btn-outline-primary  ms-lg-5"
                href="/login"
              >
                SIGN IN
              </button>
            </a>

            <a href="/signup">
              <button
                type="button"
                className="btn btn-primary mt-3 mt-md-0 ms-md-3"
              >
                GET STARTED
              </button>
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default LandingNav;
