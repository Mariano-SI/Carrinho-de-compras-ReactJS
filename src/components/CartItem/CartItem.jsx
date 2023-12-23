/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { BsCartDashFill } from 'react-icons/bs';
import './CartItem.css';
import formatCurrency from '../../utils/formatCurrency';
import GlobalContext from '../../context/GlobalContext';

function CartItem({productInfo}) {

  const { id, thumbnail, title, price} = productInfo;
  const {cartProducts, setCartProducts} = useContext(GlobalContext);

  function removeItemOfCart(){
    const updatedItems = cartProducts.filter((cartProduct)=> cartProduct.id !== id);
    setCartProducts(updatedItems);
  }

  return (
    <section className="cartItem">
      <img src={thumbnail} alt="imagem do produto" className="cartItemImage"/>
      <div className="cartItemContent">
        <h3 className="cartItemTitle">{title}</h3>
        <h3 className="cartItemPrice">{formatCurrency(price, 'BRL')}</h3>
        <button 
          type="button" 
          className="buttonRemoveItem"
          onClick={removeItemOfCart}>
          
          <BsCartDashFill/>
        </button>
      </div>
    </section>
  );
}

export default CartItem;
