import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { LinkContainer } from "react-router-bootstrap";
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

            <LinkContainer to="/">
              <Nav.Link className="left-of nav-text">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/products">
              <Nav.Link className="left-of nav-text">Products</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link className="right-of nav-text">Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link className="right-of nav-text">
                Login <i className="bi bi-person-fill"></i>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavComp;
