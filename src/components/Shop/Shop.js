import React, { useEffect } from "react";
import "./Shop.css";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, setProducts } from "../../redux/action/productAction";
import SingleProduct from "../SingleProduct/SingleProduct";

const Shop = () => {
  const products = useSelector((state) => state.allProducts.allProducts);
  const cart = useSelector((state) => state.allProducts.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => dispatch(setProducts(data)));
  }, []);

  const handleCart = (product) => {
    product.quantity = 1;
    dispatch(addToCart(product));
  };

  return (
    <div style={{marginTop: "100px"}}>
      <Container>
        {!products.length ? (
          <div className="loader">
            <span className="span"></span>
            <span className="span"></span>
            <span className="span"></span>
            <span className="span"></span>
          </div>
        ) : (
          <Row className="g-5">
            {products?.map((product) => (
              <SingleProduct
                key={product.id}
                handleCart={handleCart}
                product={product}
              />
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Shop;
