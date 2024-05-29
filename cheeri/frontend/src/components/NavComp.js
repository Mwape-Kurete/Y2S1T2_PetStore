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

            <Nav.Link className="left-of nav-text">
              <Link to="/ " className="hyperlink">
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

            <Nav.Link className="right-of nav-text">
              <Link to="/LoginSignUp" className="hyperlink">
                Login <i className="bi bi-person-fill"></i>
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavComp;
