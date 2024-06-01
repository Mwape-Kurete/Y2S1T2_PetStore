import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../styles/Profile.css";

import NavComp from "../components/NavComp";
import SingleProductCard from "../components/SingleProductCard";

function Profile(){

    return(
        <Container className="main-profile-cont" fluid>
        <Row className="hero-cont">
          <NavComp />
        </Row>
        <Row className="page-cont">
            <h2>Your Profile</h2>
          <Col className="wishlist-Prod-cont col-12">
            <p>wishlist items</p>
          </Col>
          <p>
            <Link to="/LoginSignUp">Sign Out Of account</Link>
        </p>
        </Row>
      </Container>
    )
}

export default Profile; 