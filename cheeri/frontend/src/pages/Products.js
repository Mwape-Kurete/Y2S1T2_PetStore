import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../styles/Products.css";

import NavComp from "../components/NavComp";
import HeroHeader from "../components/HeroHeader";
import FilterSortBar from "../components/FilterSortBar";
import TabProductWishlist from "../components/TabProductWishlist";

function Products() {
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
        <Col className="prods col-12">
          <TabProductWishlist />
        </Col>
      </Row>
    </Container>
  );
}

export default Products;
