import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "../styles/SingleProductCard.css"; 
import imageProdTemp from "../media/romi.jpg"; 
import Container from "react-bootstrap/esm/Container";
import CommentSection from "./CommentSection";

function SingleProductCard() {
return(
    <Container>
        <Row className="full-prod-card">
            <Col className="col-6 left img-prod">
                <img src={imageProdTemp} alt="product Image Detail Page" className="SingleProdImagePage" />
            </Col>
            <Col className="col-6 right">
                <Row className="prod-deets prod-purch">
                    <Col className="col-12 deets buyInfo">
                        <h2>CHEERI golden Bowl</h2>
                        <p>golden bowl perfect for all adult pets (cats and dogs)</p>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur veritatis minima sapiente dolorem exercitationem harum modi ab ducimus similique, aperiam porro voluptate at tempore deserunt impedit natus vel. Nesciunt, rem?</p>

                        <br />

                        <Button variant="warning">
                            Add To Cart!
                        </Button>
                    </Col>
                </Row>
            </Col>
        </Row>

        {/*Review Section Below*/}
        <Row className="review-section">
            <CommentSection />
        </Row>

    </Container>
);

}

export default SingleProductCard; 