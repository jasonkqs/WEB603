import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ products }) => {
  return (
    <>
      {/* Products in Cart */}
      <div className="container">
        <h1 className="page-title">Your Cart Items</h1>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="row align-items-center my-2 mx-2">
              <div className="col">
                <p className="product-name">{product.name}</p>
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="col quantity-container">
                <span className="cart-quantity">
                  Quantity: {product.quantity}{" "}
                </span>
              </div>
            </div>
          ))
        ) : (
          <>
            <p>Your cart is empty.</p>
            <Link to="/">
              <button className="btn btn-success">Continue Shopping</button>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;