// App.js
import React, { Component } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { products } from "./Products";
import Nav from "./nav";
import DisplayProducts from "./displayproducts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
    };
  }

  handleQuantityChange = (productId, quantity) => {
    const newQuantity = Math.min(Math.max(quantity, 0), 100);

    this.setState((prevState) => ({
      products: prevState.products.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: newQuantity };
        }
        return product;
      }),
    }));
  };

  calculateTotalItems = () => {
    return this.state.products.reduce(
      (total, product) => total + product.quantity,
      0
    );
  };

  render() {
    return (
      <div className="shop_cart">
        <Nav itemCount={this.calculateTotalItems()} />
        <DisplayProducts
          products={this.state.products}
          onQuantityChange={this.handleQuantityChange}
        />
      </div>
    );
  }
}

export default App;