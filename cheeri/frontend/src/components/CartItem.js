import "../styles/CartItem.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import tempCartProd from "../media/romi.jpg";

function CartItem() {
  return (
    <Row className="cart-item-main-row">
      <Col className="cartImg">
        <img src={tempCartProd} alt="temp card image" className="cart-img" />
      </Col>
      <Col className="cartDescription">Cat Collar</Col>
      <Col className="cartQuantity">Quantity:</Col>
      <Col className="removeFromCart">
        <Button className="deleteBtn" variant="warning">
          <i className="bi bi-trash"></i>
        </Button>
      </Col>
    </Row>
  );
}

export default CartItem;
