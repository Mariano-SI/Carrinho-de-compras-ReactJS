import React from 'react';
import Header from './components/Header/Header';
import fetchProducts from './api/fetchProducts';
import Products from './components/Products/Products';
import 'react-loading-skeleton/dist/skeleton.css';
import { SkeletonTheme } from 'react-loading-skeleton';
function App() {
  fetchProducts();
  return (
    <div>
      <SkeletonTheme baseColor="#F8F9FA" highlightColor="#E7E8EC">
        <Header/>
        <Products/>  
      </SkeletonTheme>
    </div>
  );
}

export default App;
