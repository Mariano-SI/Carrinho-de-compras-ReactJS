import React from 'react';
import Header from './components/Header/Header';
import fetchProducts from './api/fetchProducts';
import Products from './components/Products/Products';
import 'react-loading-skeleton/dist/skeleton.css';
import { SkeletonTheme } from 'react-loading-skeleton';
import Provider from './context/Provider';
import Cart from './components/Cart/Cart';
function App() {
  fetchProducts();
  return (
    <Provider>
      <SkeletonTheme baseColor="#F8F9FA" highlightColor="#E7E8EC">
        <Header/>
        <Products/>  
        <Cart/>
      </SkeletonTheme>
    </Provider>
  );
}

export default App;
