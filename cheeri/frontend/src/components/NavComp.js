import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";  // Correct import statement
import logo from "../media/logo 3.svg";

import "../styles/NavComp.css";

function NavComp() {
  const { user } = useContext(UserContext);  // Access user from UserContext

  return (
    <Navbar>
      <Container className="nav-frame">
        <Nav className="me-auto d-flex nav-items">
          <Nav.Link className="left-of nav-text">
            <Link to="/" className="hyperlink">
              Home
            </Link>
          </Nav.Link>

          <Nav.Link className="left-of nav-text">
            <Link to="/Products" className="hyperlink">
              Products
            </Link>
          </Nav.Link>

          <Nav.Link className="right-of nav-text">
            <Link to="/Cart" className="hyperlink">
              Cart
            </Link>
          </Nav.Link>

          {user ? (
            <Nav.Link className="right-of nav-text">
              <Link to="/Profile" className="hyperlink">
                Profile <i className="bi bi-person-fill"></i>
              </Link>
            </Nav.Link>
          ) : (
            <Nav.Link className="right-of nav-text">
              <Link to="/LoginSignUp" className="hyperlink">
                Login <i className="bi bi-person-fill"></i>
              </Link>
            </Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavComp;
