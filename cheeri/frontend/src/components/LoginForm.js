import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import AccountModal from "./AccountModal";
import { UserContext } from '../UserContext';

import axios from 'axios'; 

import "../styles/LoginForm.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [modalMessage, setModalMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    // Email validation
    if (!email) {
      formErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email is invalid";
      valid = false;
    }

    // Password validation
    if (!password) {
      formErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 8) {
      formErrors.password = "Password must be at least 8 characters";
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Submit the form 
      console.log("Form is valid. Submitting:", { email, password });

      //creating form data 
      const formData = {email, password}; 

      // Handle form submission
      try {
        const response = await axios.post('http://localhost:5000/api/users/login', formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        setModalMessage("Welcome Back, start browsing");
        setModalVisible(true);

        console.log("Response from server:", response.data);

        setUser(response.data);
        navigate('/');

      } catch (error) {
        console.error('Error logging in user', error.response ? error.response.data : error.message);
        setModalVisible(false); 
      }


    } else {
      console.log("Form is invalid. Fix errors and try again.");
    }
  };

  return (
    <Container className="main-form-cont" fluid>
      <Row className="login-form">
        <Col>
          <h2 className="login-title">Log In</h2>
          <Form className="main-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3 form-input form-input-style" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3 form-input form-input-style" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Button className="login-button d-flex justify-content-center" type="submit">
              Log In
            </Button>
          </Form>
        </Col>
      </Row>
      <AccountModal 
          visible={modalVisible}
          message={modalMessage}
          onClose={() => setModalVisible(false)}
        />
    </Container>
  );
}

export default LoginForm;
