import "../styles/ProductCards.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import tempImg from "../media/romi.jpg";

function ProductCards() {
  return (
    <Col className="product-cards">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={tempImg} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Category:
            <p>R00-00</p>
          </Card.Text>
          <Button variant="primary">add to cart</Button>
          <Button variant="warning">
            <i className="bi bi-heart-fill"></i>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCards;
