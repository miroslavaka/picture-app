import React from 'react';

const Search = ({ searchItems }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="search here"
        onChange={(e) => searchItems(e)}
      />
    </div>
  );
};

export default Search;
