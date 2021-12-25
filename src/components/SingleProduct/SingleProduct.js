import React from "react";
import { Button, Card, CarouselItem, Col } from "react-bootstrap";

const SingleProduct = ({ product, handleCart }) => {
    const { id, title, price, category, image } = product;

  return (
    <Col lg={4} md={6} xs={12}>
      <Card style={{ width: "18rem", height: "100%", boxShadow: "0 10px 10px gray" }}>
        <Card.Img variant="top" style={{width: "40%", height: "140px", margin: "10px auto"}} src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <h5>$ {price}</h5>
            <p style={{color: "#7f8c8d"}}>{category}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{textAlign: "center"}}>
          <Button onClick={() => handleCart(product)} className="btn-sm" variant="primary">
            <i className="fas fa-cart-plus"></i> Add To Cart
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default SingleProduct;
