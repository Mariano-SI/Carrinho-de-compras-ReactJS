import React, { useContext } from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import GlobalContext from '../../context/GlobalContext';
import formatCurrency from '../../utils/formatCurrency';

function Cart() {
  const {cartProducts, isCartVisible} = useContext(GlobalContext);

  const totalPrice = cartProducts.reduce((acc, cartProduct)=>{
    return acc += cartProduct.price;
  }, 0);

  return (
    <section className={`cart ${isCartVisible && 'cartActive'}`}>
      <div className="cartItems">
        {cartProducts.map((cartProduct)=>(
          <CartItem key={cartProduct.id} productInfo={cartProduct}/>
        ))}
      </div>
      <div className="cartResume">
        {formatCurrency(totalPrice, 'BRL')}
      </div>
    </section>
  );
}

export default Cart;
