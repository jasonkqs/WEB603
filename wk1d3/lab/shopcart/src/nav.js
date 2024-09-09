// Nav.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ itemCount }) => {
  return (
    <div className="navbar bg-light-blue d-flex justify-content-between p-3">
      <h1>Shop to React</h1>
      <span>
        <FontAwesomeIcon icon={faShoppingCart} className="fa-shopping-cart" />{" "}
        {itemCount} items
      </span>
    </div>
  );
};

export default Nav;