import React from 'react';
import { BsCartDashFill } from 'react-icons/bs';
import './CartItem.css';

function CartItem() {
  return (
    <section className="cartItem">
      <img src="" alt="imagem do produto" className="cartItemImage"/>
      <div className="cartItemContent">
        <h3 className="cartItemTitle">titulo do produto</h3>
        <h3 className="cartItemPrice">200</h3>
        <button 
          type="button" 
          className="buttonRemoveItem">
          <BsCartDashFill/>
        </button>
      </div>
    </section>
  );
}

export default CartItem;
