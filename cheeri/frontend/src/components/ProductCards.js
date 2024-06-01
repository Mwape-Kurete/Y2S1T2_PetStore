import React from 'react';
import "../styles/ProductCards.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function ProductCards({ product }) {
  return (
    <Col className="product-cards">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title className="prodName">{product.productName}</Card.Title>
          <Card.Text>
            <span className="category" id="category">{product.category}</span>
            <span className="price" id="price">{`R${product.price}`}</span>
            <span className="descript" id="description">{product.description}</span>
          </Card.Text>
          <Button variant="primary">Add to Cart</Button>
          <Button variant="warning">
            <i className="bi bi-heart-fill"></i>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCards;
