import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import cat1 from "../media/home cat.png";
import dog1 from "../media/home.png";

import "../styles/HeroHeader.css";

function HeroHeader() {
  return (
    <Container className="hero-section">
      <Row className="overlap-group">
        <Col className="col-12 bg-cont">
          <div className="bg-cont-inner">
            <h1 className="text-main-title text-align-center">CHEERI</h1>
            <h4 className="subtitle text-align-center">
              Your one stop pet shop
            </h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HeroHeader;
