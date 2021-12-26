import React from 'react';
import './ReviewItem.css';
import { Col, Container, Row } from 'react-bootstrap';

const ReviewItem = ({ productItem, handleRemove }) => {
    
    const { id, image, title, price, description, quantity } = productItem;

    return (
        <Col lg={12}>
                <Row className="d-flex align-items-center">
                    <Col xs={12} md={6} lg={9}>
                        <Row>
                            <Col lg={4} className="product">
                               <img style={{width: "170px", height: "200px"}} src={image} alt="productImage" />
                            </Col>
                            <Col lg={8} className="product-description">
                                <h4>{title}</h4>
                                <h5>$ {price}</h5>
                                <h5>Quantity: {quantity}</h5>
                                <p style={{textAlign: "justify"}}>{ description}</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                    <div className='text-center'>
                    <button onClick={() => handleRemove(id)} className='btn btn-md btn-danger'><i className="fas fa-trash-alt"></i> Remove</button>
                        </div>
                    </Col>
                </Row>
        </Col>
    );
};

export default ReviewItem;