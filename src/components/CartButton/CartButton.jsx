import React, { useContext } from 'react';
import './CartButton.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import GlobalContext from '../../context/GlobalContext';

function CartButton() {

  const {cartProducts, isCartVisible, setIsCartVisible} = useContext(GlobalContext);

  function openCart(){
    setIsCartVisible(!isCartVisible);
  }

  return (
    <button className="cartButton" onClick={openCart}>
      <AiOutlineShoppingCart />
      {cartProducts.length > 0 && <span className="cartStatus">{cartProducts.length}</span>}
    </button>
  );
}

export default CartButton;
