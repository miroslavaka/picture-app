import React from 'react';

const Search = ({ searchItems }) => {
  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="search here"
        onChange={(e) => searchItems(e)}
      />
      <p className="search__p">
        (search words:nature, animal, bird, insect, beetle, butterfly, ladybug,
        flower, blossom, fruit, apple, lemon, stone, pebble, gemstone, white,
        blue, red, green, yellow, pink, purple, orange.. )
      </p>
    </div>
  );
};

export default Search;
