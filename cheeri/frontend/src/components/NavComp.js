import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import logo from "../media/logo 3.svg";

import "../styles/NavComp.css";

function NavComp() {
  return (
    <>
      <Navbar>
        <Container className="nav-frame">
          <Nav className="me-auto d-flex nav-items">
            {/* <Navbar.Brand to="/Home">
              <img src={logo} alt="cheeri logo" className="mainLogo" />
            </Navbar.Brand> */}

            <Nav.Link to="/" className="left-of nav-text">
              Home
            </Nav.Link>
            <Nav.Link href="#features" className="left-of nav-text">
              Products
            </Nav.Link>
            <Nav.Link href="#pricing" className="right-of nav-text">
              Checkout
            </Nav.Link>
            <Nav.Link href="#pricing" className="right-of nav-text">
              Login <i className="bi bi-person-fill"></i>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavComp;
