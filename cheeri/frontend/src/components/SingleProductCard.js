import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "../styles/SingleProductCard.css"; 
import imageProdTemp from "../media/romi.jpg"; 

function SingleProductCard() {

    <Row className="full-prod-card">
        <Col className="col-6 left img-prod">
            <img src={imageProdTemp} alt="product Image Detail Page" className="SingleProdImagePage" />
        </Col>
        <Col className="col-6 right">
            <Row className="prod-deets prod-purch">
                <Col className="col-12 deets buyInfo"></Col>
                    <h2>CHEERI golden Bowl</h2>
                    <p>golden bowl perfect for all adult pets (cats and dogs)</p>
                    <br />
                    <h4>Quantity</h4>
                    <Button variant="primary" className="countMarker"><i className="bi bi-patch-plus-fill"></i></Button>
                    <p>1</p>
                    <Button variant="primary" className="countMarker"><i className="bi bi-patch-minus-fill"></i></Button>
                <Col className="col-12 deets makePurchase"></Col>
            </Row>
        </Col>
    </Row>

}

export default SingleProductCard; 