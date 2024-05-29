import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../styles/LoginSignUp.css";

import NavComp from "../components/NavComp";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

function LoginSignUp() {
  return (
    <Container className="main-home-cont" fluid>
      <Row className="hero-cont">
        <NavComp />
      </Row>
      <Row className="page-cont">
        <Col className="image col-6"></Col>
        <Col className="form col-6">
          <LoginForm />

          {/*Login/Sign Up toggle */}
          <div className="toggle-forms md-auto">
            <div
              class="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
                autocomplete="off"
                checked
              />
              <label className="btn btn-outline-primary" for="btnradio1">
                Login
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio2"
                autocomplete="off"
              />
              <label className="btn btn-outline-primary" for="btnradio2">
                Sign Up
              </label>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginSignUp;
