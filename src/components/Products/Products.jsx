import React, { useEffect, useState } from 'react';
import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import ProductCardSkeleton from '../ProductCard/ProductCardSkeleton';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getProducts(){
    const products = await fetchProducts('iphone');
    setProducts(products);
    setLoading(false);
  }

  useEffect(()=>{
    getProducts();
  }, []);

  function decideContent(){
    if(products.length === 0 && loading){
      return(
        [...Array(9)].map((_, i) => <ProductCardSkeleton key={i}/>)
      );
    }
    return(
      products.map((product)=>(
        <ProductCard key={product.id} product={product}/>
      ))
    );
  }

  return (
    <section  className="products container">
      {decideContent()}
    </section>
  );
}

export default Products;
