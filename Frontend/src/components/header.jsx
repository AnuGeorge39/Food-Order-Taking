import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./css/header.css"; // adjust if the path is different

const Header = () => {
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="custom-navbar shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-text">
          🍽 Yours Choice
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link as={Link} to="/" active={location.pathname === "/"}>
              🍽 Yours Choice
            </Nav.Link>
            <Nav.Link as={Link} to="/" active={location.pathname === "/"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/menu" active={location.pathname === "/menu"}>
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/tables" active={location.pathname === "/tables"}>
              Tables
            </Nav.Link>
            <Nav.Link as={Link} to="/order" active={location.pathname === "/order"}>
              Place Order
            </Nav.Link>
            <Nav.Link as={Link} to="/stafflogin" active={location.pathname === "/stafflogin"}>
              Staff
            </Nav.Link>
            <Nav.Link as={Link} to="/admin" active={location.pathname === "/admin"}>
              Admin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
