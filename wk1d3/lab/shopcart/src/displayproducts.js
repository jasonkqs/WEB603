// DisplayProducts.js
import React from "react";

const DisplayProducts = ({ products, onQuantityChange }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="row align-items-center my-2 mx-2">
          <div className="col">
            <p className="product-name">{product.name}</p>
            <img
              className="product-image"
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="col quantity-input-container">
            <input
              className="quantity-input"
              type="number"
              min="0"
              max="100"
              value={product.quantity}
              onChange={(e) => onQuantityChange(product.id, e.target.value)}
            />
            <span> quantity</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayProducts;