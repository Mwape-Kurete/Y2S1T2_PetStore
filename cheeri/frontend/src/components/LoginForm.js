import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import "../styles/LoginForm.css";

function LoginForm() {
  return (
    <Container className="main-form-cont" fluid>
      <Row className="login-form">
        <Col>
          <h2 className="login">Log In</h2>
          <Form>
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
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;
