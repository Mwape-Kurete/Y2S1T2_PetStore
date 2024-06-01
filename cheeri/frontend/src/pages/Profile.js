import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";

import "../styles/Profile.css";

import NavComp from "../components/NavComp";
import SingleProductCard from "../components/SingleProductCard";
import { UserContext } from "../UserContext"; // Correctly import UserContext

function Profile() {
  const { setUser } = useContext(UserContext); // Access setUser from UserContext
  const navigate = useNavigate();

  const handleSignOut = () => {
    setUser(null); // Clear the user state
    navigate("/LoginSignUp"); // Redirect to LoginSignUp page
  };

  return (
    <Container className="main-profile-cont" fluid>
      <Row className="hero-cont">
        <NavComp />
      </Row>
      <Row className="page-cont">
        <h2>Your Profile</h2>
        <Col className="wishlist-Prod-cont col-12 d-flex justify-content-center">
          <Button onClick={handleSignOut} className="signOut">
            <Link to="/LoginSignUp" className="signOut-link">
              Sign Out Of Account
            </Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
