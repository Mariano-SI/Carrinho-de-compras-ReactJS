import React from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';

function Cart() {
  return (
    <section className="cart">
      <div className="cartItems">
        <CartItem/>
      </div>
      <div className="cartResume">
        resmo do carrinho
      </div>
    </section>
  );
}

export default Cart;
