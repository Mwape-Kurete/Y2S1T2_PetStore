import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../styles/CarouselHome.css";

function CarouselHome() {
  return (
    <>
      <Row className="mainCaroSection">
        <Col className="caro">
          <div className="caro-copy">
            <h1 className="pageHead"> Our CHEERI Products</h1>
            <p className="pageSub">
              shop CHEERI's wide range of pet essentials, accessories and goods
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default CarouselHome;
