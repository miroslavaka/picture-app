import React from 'react';

const Categories = ({ filterItems }) => {
  return (
    <div className="categories">
      <nav>
        <ul>
          <li
            onClick={() => {
              filterItems('all');
            }}
          >
            All
          </li>
          <li
            onClick={() => {
              filterItems('fruits');
            }}
          >
            Fruits
          </li>
          <li
            onClick={() => {
              filterItems('flowers');
            }}
          >
            Flowers
          </li>
          <li
            onClick={() => {
              filterItems('birds');
            }}
          >
            Birds
          </li>
          <li
            onClick={() => {
              filterItems('insect');
            }}
          >
            Insect
          </li>
          <li
            onClick={() => {
              filterItems('stones');
            }}
          >
            Stones
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Categories;
