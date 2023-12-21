import React from 'react';
import Header from './components/Header/Header';
import fetchProducts from './api/fetchProducts';
import Products from './components/Products/Products';

function App() {
  fetchProducts();
  return (
    <div>
      <Header/>
      <Products/>  
    </div>
  );
}

export default App;
