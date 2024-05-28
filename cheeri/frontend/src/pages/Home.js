import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import "../styles/Home.css";

import NavComp from "../components/NavComp";

function Home() {
  return (
    <Container className="main-home-cont" fluid>
      <Row className="hero-cont">
        <NavComp />
      </Row>
      <Row className="page-cont"></Row>
    </Container>
  );
}

export default Home;
