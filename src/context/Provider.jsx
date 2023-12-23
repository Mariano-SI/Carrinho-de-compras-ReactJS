/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import GlobalContext from './GlobalContext';

function Provider({children}) {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartVisible, setIsCartVisible] = useState(false);
  
  const value = {
    products,
    setProducts, 
    loading,
    setLoading,
    cartProducts,
    setCartProducts,
    isCartVisible,
    setIsCartVisible
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
}

export default Provider;
