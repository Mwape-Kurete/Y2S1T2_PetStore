import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useState } from "react";

import "../styles/LoginSignUp.css";

import NavComp from "../components/NavComp";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import image1 from "../media/dogToy.jpg";

function LoginSignUp() {
  const [isLoginForm, setIsLoginForm] = useState(true); //tracking which form is displayed

  return (
    <Container className="main-home-cont" fluid>
      <Row className="hero-cont">
        <NavComp />
      </Row>
      <Row className="page-cont">
        <Col className="image col-6 d-flex justify-content-center">
          <img
            src={image1}
            alt="dog carrying a toy"
            className="loginSignUp-image"
          />
        </Col>
        <Col className="form col-6">
          {isLoginForm ? <LoginForm /> : <SignUpForm />}{" "}
          {/* Conditionally render forms */}
          {/*Login/Sign Up toggle */}
          <div className="toggle-forms d-flex justify-content-center">
            <div
              className="btn-group whole-toggle"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
                autocomplete="off"
                checked={isLoginForm}
                onChange={() => setIsLoginForm(true)} //update state on change
              />
              <label className="btn login-toggle-btn" for="btnradio1">
                Login
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio2"
                autocomplete="off"
                checked={!isLoginForm}
                onChange={() => setIsLoginForm(false)} //updating the state on change
              />
              <label className="btn signUp-toggle-btn" for="btnradio2">
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
