import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../styles/Products.css";

import NavComp from "../components/NavComp";
import HeroHeader from "../components/HeroHeader";
import FilterSortBar from "../components/FilterSortBar";
import ProductCards from "../components/ProductCards"; 
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container className="main-home-cont" fluid>
      <Row className="hero-cont">
        <NavComp />
        <HeroHeader />
      </Row>
      <Row className="page-cont">
        <div className="cara-copy">
          <h2>CHEERI Products</h2>
        </div>
        <Col className="filter">
          <FilterSortBar />
        </Col>
        <Row className="prods">
          {products.map(product => (
            <ProductCards key={product._id} product={product} />
          ))}
        </Row>
      </Row>
    </Container>
  );
}

export default Products;
