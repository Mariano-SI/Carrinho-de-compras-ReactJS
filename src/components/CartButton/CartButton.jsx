import React from 'react';
import './CartButton.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
function CartButton() {
  return (
    <button className="cartButton">
      <AiOutlineShoppingCart />
      <span className="cartStatus">1</span>
    </button>
  );
}

export default CartButton;
