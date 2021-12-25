import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const cart = useSelector((state) => state.allProducts.cart);

  return (
    <div className="header">
      <Container>
        <Row>
          <Col lg={11} xs={9}>
            <Link to="/home" style={{textDecoration: "none", color: "#fff"}}><h4>Fake Shop</h4></Link>
          </Col>
          <Col lg={1} xs={3}>
            <Link to="/cartItems">
              <button type="button" className="btn btn-sm position-relative">
                <i
                  className="fas fa-shopping-cart"
                  style={{ fontSize: "16px" }}
                ></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
