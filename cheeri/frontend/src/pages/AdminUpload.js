import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../styles/Cart.css";

import NavComp from "../components/NavComp";

function AdminUpload() {
  return (
    <Container className="main-home-cont" fluid>
      <Row className="hero-cont">
        <NavComp />
      </Row>
      <Row className="page-cont">
        <h2>Admin Portal</h2>
        <Col className="PortalCont">

        </Col>
      </Row>
    </Container>
  );
}

export default AdminUpload;
