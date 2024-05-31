import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import axios from 'axios'; 

import "../styles/SignUpForm.css";

function SignUpForm() {
  const [validated, setValidated] = useState(false);
  const confirmationError = useRef(null);
  const progressBar = useRef(null);

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formData, setFormData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false || password !== confirmPassword) {
      e.stopPropagation();
      if (password !== confirmPassword) {
        confirmationError.current.style.display = "block";
      }
    } else {
      confirmationError.current.style.display = "none";
      setFormData([...formData, { fullname, email, password }]);
      // Perform additional actions such as sending data to the backend

      try{
        const response = await axios.post('http://localhost:5000/api/register', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
      } catch (error) {
        console.error('error adding user', error);
      }
    }

    setValidated(true);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
    const letterMatch = (password.match(/[a-z, A-Z]/g) || []).length;
    const numberMatch = (password.match(/[0-9]/g) || []).length;
    const specialMatch = (password.match(/[#?!@$%^&*-]/g) || []).length;

    const strength = letterMatch + numberMatch * 2 + specialMatch * 3;
    progressBar.current.style.width = `${strength * 3}%`;

    let colour = "red";
    if (strength > 10) {
      colour = "orange";
    }
    if (strength > 26) {
      colour = "green";
    }

    progressBar.current.style.backgroundColor = colour;
  };

  const renderTooltip = (props) => (
    <Tooltip id="password-tooltip" {...props}>
      Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.
    </Tooltip>
  );

  return (
    <Container className="main-form-cont" fluid>
      <Row className="sign-up-form">
        <Col>
          <h2 className="sign-up-title">Sign Up</h2>
          <Form
            className="main-form-sign"
            onSubmit={handleSubmit}
            noValidate
            validated={validated}
          >
            <Form.Group className="mb-3 form-input" controlId="formGroupText">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Full Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide your full name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3 form-input" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email address.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="mb-3 form-input"
              controlId="formGroupPassword"
            >
              <Form.Label>Password</Form.Label>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <Form.Control
                  type="password"
                  placeholder="Password"
                  pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
                  value={password}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                  required
                />
              </OverlayTrigger>
              <Form.Control.Feedback type="invalid">
                Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.
              </Form.Control.Feedback>
            </Form.Group>
            <div
              style={{
                height: "24px",
                marginTop: "5px",
                backgroundColor: "hsl(0, 0%, 74%)",
                borderRadius: "5px",
              }}
            >
              <div
                ref={progressBar}
                style={{
                  height: "100%",
                  borderRadius: "25px",
                }}
              ></div>
            </div>
            <Form.Group
              className="mb-3 form-input"
              controlId="formGroupConfirmPassword"
            >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please confirm your password.
              </Form.Control.Feedback>
            </Form.Group>
            <p
              style={{ color: "red", display: "none" }}
              ref={confirmationError}
            >
              Passwords do not match
            </p>

            <Button
              className="sign-up-button d-flex justify-content-center"
              type="submit"
            >
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUpForm;
