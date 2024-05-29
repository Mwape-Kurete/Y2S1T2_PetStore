import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../styles/Cart.css";

import NavComp from "../components/NavComp";
import CartItem from "../components/CartItem";

function Cart() {
  return (
    <Container className="main-home-cont" fluid>
      <Row className="hero-cont">
        <NavComp />
      </Row>
      <Row className="page-cont">
        <h2>Your Cart</h2>
        <Col className="Cart-checkout">
          <CartItem />
          <CartItem />
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
