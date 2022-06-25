import React from "react";
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../App.css";

const NavbarAdi = () => {
  const isLoggedIn = sessionStorage.getItem("token");
  return (
    <div className="Navbaradi">
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="white" variant="light">
        <Container>
          <Navbar.Brand href="/">AdiCara</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about">Services</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <Nav>
              {isLoggedIn ? (
                <Nav.Link className="bdashboard" href="/dashboard">
                  <Button>Dashboard</Button>
                </Nav.Link>
              ) : (
                <Nav.Link className="bdashboard" href="/signin">
                  <Button>Log In</Button>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarAdi;
