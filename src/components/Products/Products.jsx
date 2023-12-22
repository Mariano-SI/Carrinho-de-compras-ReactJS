import React, { useContext, useEffect } from 'react';
import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import ProductCardSkeleton from '../ProductCard/ProductCardSkeleton';
import GlobalContext from '../../context/GlobalContext';

function Products() {
  
  const {products, setProducts, loading, setLoading} = useContext(GlobalContext);

  async function getProducts(){
    const products = await fetchProducts('iphone');
    setProducts(products);
    setLoading(false);
  }

  useEffect(()=>{
    getProducts();
  }, []);

  function decideContent(){
    if(loading){
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
      {name}
      {decideContent()}
    </section>
  );
}

export default Products;
