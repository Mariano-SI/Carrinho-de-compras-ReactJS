import React from 'react';
import './ProductCard.css';
import propTypes from 'prop-types';
import { BsCartPlusFill } from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';

function ProductCard({product}) {
  const {thumbnail, price, title} = product;
  return (
    <section className="productCard">
      <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="product" className="cardImage" />
      <div className="cardInfos">
        <h2 className="cardPrice">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="cardTitle">{title}</h2>
      </div>
      <button className="buttonAddToCart">
        <BsCartPlusFill/>
      </button>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes ={
  product: propTypes.shape({}),
}.isRequired;
