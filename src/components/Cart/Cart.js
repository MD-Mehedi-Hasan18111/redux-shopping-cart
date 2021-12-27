import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";

const Cart = () => {
    const cart = useSelector((state) => state.allProducts.cart);
  const subTotal = useSelector((state) => state.allProducts.totalPrice);

  const shipping = subTotal > 0 ? 15 : 0;

  let tax = subTotal * (10 / 100);

  const total = subTotal + shipping + tax;

  const flexStyle = {
    display: "flex",
  };
  const marginStyle = {
    paddingLeft: "20px",
  };

  return (
    <div className="cart">
      <div className="cart-header">
        <h1>Order Summary</h1>
        <h3>
          Item Order:{" "}
          <i class="fas fa-shopping-cart" style={{ color: "#fff" }}></i>{" "}
          {cart.length}
        </h3>
      </div>
      <div>
        <table>
          <tr>
            <td>Sub Total: </td>
            <td style={marginStyle}>$ {subTotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Total Shipping: </td>
            <td style={marginStyle}>$ {shipping.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Tax: </td>
            <td style={marginStyle}>$ {tax.toFixed(2)}</td>
          </tr>
        </table>
        <div className="total" style={{ display: "flex", marginLeft: "50px" }}>
          <p>Total: </p>
          <p style={{ paddingLeft: "115px" }} className="totalPrice">$ {total.toFixed(2)}</p>
        </div>
          </div>
          <div style={{textAlign: 'center'}}>
              <button className="btn btn-primary w-100">Checkout</button>
          </div>
    </div>
  );
};

export default Cart;
