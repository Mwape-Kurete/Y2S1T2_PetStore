import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import axios from 'axios';

import "../styles/SingleProductCard.css"; 
import CommentSection from "./CommentSection";
import NavComp from "./NavComp";

function SingleProductCard() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row className="navcont">
        <NavComp />
      </Row>
      <Row className="full-prod-card">
        <Col className="col-6 left img-prod">
          <img src={`http://localhost:5000/${product.image}`} alt={product.productName} className="SingleProdImagePage" />
        </Col>
        <Col className="col-6 right">
          <Row className="prod-deets prod-purch">
            <Col className="col-12 deets buyInfo">
              <h2>{product.productName}</h2>
              <p>{product.description}</p>
              <br />
              <h4>Quantity</h4>
              <div className="quantity">
                <Button variant="primary" className="countMarker"><i className="bi bi-patch-plus-fill  d-flex justify-content-center"></i></Button>
                <p>1</p>
                <Button variant="primary" className="countMarker"><i className="bi bi-patch-minus-fill  d-flex justify-content-center"></i></Button>
              </div>
            </Col>
            <hr />
            <Col className="col-12 deets makePurchase">
              <p>{product.description}</p>
              <br />
              <Button variant="warning">Add To Cart!</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* Review Section Below */}
      <Row className="review-section">
        <CommentSection />
      </Row>
    </Container>
  );
}

export default SingleProductCard;
