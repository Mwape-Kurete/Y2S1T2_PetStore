import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

import "../styles/SignUpForm.css";

function SignUpForm() {

  const [fullname, setFullname ] = useState(""); 
  const [email, setEmail ] = useState("");
  const [password, setPassword ] = useState("");
  const [confirmPassword, setConfirmPassword ] = useState("");
  const [formData, setFormData ] = useState([]); 


  const handleSubmit = (e) => {
      e.preventDefault(); 

      //form validation etc 
  }

  return (
    <Container className="main-form-cont" fluid>
      <Row className="sign-up-form">
        <Col>
          <h2 className="sign-up-title">Sign Up</h2>
          <Form className="main-form-sign" onSubmit={handleSubmit}>
            <Form.Group className="mb-3 form-input" controlId="formGroupText">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Full Name" value={fullname} onChange={(e) => setFullname(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3 form-input" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <Form.Group
              className="mb-3 form-input"
              controlId="formGroupPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </Form.Group>
            <Form.Group
              className="mb-3 form-input"
              controlId="formGroupConfirmPassword"
            >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </Form.Group>

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
