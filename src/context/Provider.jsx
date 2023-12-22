/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import GlobalContext from './GlobalContext';

function Provider({children}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const value = {
    products,
    setProducts, 
    loading,
    setLoading
  };
  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
}

export default Provider;
