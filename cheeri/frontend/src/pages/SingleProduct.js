import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../styles/SingleProduct.css";

import NavComp from "../components/NavComp";

function SingleProduct() {
  return (
    <Container className="main-home-cont" fluid>
      <Row className="hero-cont">
        <NavComp />
      </Row>
      <Row className="page-cont">
        <div className="cara-copy">
          <h2>CHEERI Products</h2>
        </div>
        <Col className="product-container"></Col>
      </Row>
    </Container>
  );
}

export default SingleProduct;
