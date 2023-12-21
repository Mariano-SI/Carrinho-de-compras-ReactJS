import React, { useState } from 'react';
import './SearchBar.css';
import { BsSearch } from 'react-icons/bs';

function SearchBar() {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <form className="searchBar">
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
