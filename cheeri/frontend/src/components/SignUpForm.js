import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import "../styles/SignUpForm.css";

function SignUpForm() {
  return (
    <Container className="main-form-cont" fluid>
      <Row className="sign-up-form">
        <Col>
          <h2 className="signUp">Sign Up</h2>
          <Form>
            <Form.Group className="mb-3 form-input" controlId="formGroupEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3 form-input" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group
              className="mb-3 form-input"
              controlId="formGroupPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group
              className="mb-3 form-input"
              controlId="formGroupConfirmPassword"
            >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUpForm;
