import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../styles/Home.css";

import NavComp from "../components/NavComp";
import HeroHeader from "../components/HeroHeader";
import CarouselHome from "../components/CarouselHome";

function Home() {
  return (
    <Container className="main-home-cont" fluid>
      <Row className="hero-cont">
        <NavComp />
        <HeroHeader />
      </Row>
      <Row className="page-cont">
        <div className="cara-copy">
          <h2>CHEERI Pets</h2>
          <p>CHEERI animals we've aided in the past</p>
        </div>
        <Col className="categories">
          <CarouselHome />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
