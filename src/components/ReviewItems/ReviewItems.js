import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Header/Header";
import ReviewItem from "../ReviewItem/ReviewItem";
import {removeFromCart} from '../../redux/action/productAction';
import Cart from "../Cart/Cart";

const ReviewItems = () => {
  const cart = useSelector((state) => state.allProducts.cart);
  const totalPrice = useSelector((state) => state.allProducts.totalPrice);
  
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId))
  }

  return (
    <div>
      <Header />
      <Container style={{marginTop: "100px"}}>
        <Row>
          <Col xs={12} md={12} lg={8}>
            {!cart.length ? (
            <div className="text-center">
              <h3>Cart Empty!</h3>
            </div>
          ) : (
            <Row className="g-5 px-3">
              {cart?.map((productItem) => (
                <ReviewItem key={productItem.id} handleRemove={handleRemove} productItem={productItem} />
              ))}
            </Row>
          )}
          </Col>
          <Col xs={12} md={12} lg={4}>
            <Cart></Cart>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ReviewItems;
