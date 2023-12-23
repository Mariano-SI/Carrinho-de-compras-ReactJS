import React, { useContext, useState } from 'react';
import './SearchBar.css';
import { BsSearch } from 'react-icons/bs';
import fetchProducts from '../../api/fetchProducts';
import GlobalContext from '../../context/GlobalContext';

function SearchBar() {

  const [searchTerm, setSearchTerm] = useState('');
  const {setProducts} = useContext(GlobalContext);

  async function handleSubmit(e){
    setProducts([]);
    e.preventDefault();
    const products = await fetchProducts(searchTerm);
    setProducts(products);
    setSearchTerm('');
  }

  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <input
        value={searchTerm}
        onChange={({target})=> setSearchTerm(target.value)} 
        type="search" 
        placeholder="Buscar produtos" 
        className="searchInput"
        required
      />
      <button type="submit" className="searchButton">
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;
