import React, { useState } from 'react';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setSearchInput(e.target.value);
  };

  return (
    <div className="search">
      <input type="text" placeholder="search here" onChange={handleChange} />
    </div>
  );
};

export default Search;
