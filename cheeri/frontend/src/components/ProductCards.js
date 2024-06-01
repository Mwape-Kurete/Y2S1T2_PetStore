import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/ProductCards.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function ProductCards({ product }) {
  const navigate = useNavigate();
  const imageUrl = `http://localhost:5000/${product.image}`;

  const handleViewProduct = () => {
    navigate(`/SingleProduct/${product._id}`);
  };

  return (
    <Col className="product-cards col-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title className="prodName">{product.productName}</Card.Title>
          <Card.Text>
            <h6 className="category" id="category">Category: {product.category}</h6>
            <h6 className="price" id="price">Price: {`R${product.price}`}</h6>
            <br />
            <p className="descript" id="description">{product.description}</p>
          </Card.Text>
          <Button variant="primary" onClick={handleViewProduct}>view product</Button>
          <Button variant="warning">
            <i className="bi bi-heart-fill"></i>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCards;
