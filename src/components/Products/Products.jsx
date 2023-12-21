import React, { useEffect, useState } from 'react';
import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';

function Products() {
  const [products, setProducts] = useState([]);

  async function getProducts(){
    const products = await fetchProducts('iphone');
    setProducts(products);
  }

  useEffect(()=>{
    getProducts();
  }, []);

  return (
    <section  className="products container">
      {products.map((product)=>(
        <ProductCard key={product.id} product={product}/>
      ))}
    </section>
  );
}

export default Products;
