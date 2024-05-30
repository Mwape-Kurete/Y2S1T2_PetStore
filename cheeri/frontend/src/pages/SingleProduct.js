import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../styles/SingleProduct.css";

import NavComp from "../components/NavComp";
import SingleProductCard from "../components/SingleProductCard";

function SingleProduct() {
  return (
    <Container className="main-cont" fluid>
      <Row className="hero-cont">
        <NavComp />
      </Row>
      <Row className="page-cont">
        <Col className="product-container">
          <SingleProductCard />
        </Col>
      </Row>
    </Container>
  );
}

export default SingleProduct;
