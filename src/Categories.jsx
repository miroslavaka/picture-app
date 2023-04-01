import React from 'react';

const Categories = ({ filterItems, active, tabs }) => {
  //console.log('activeClass: ', activeClass);
  return (
    <div className="categories">
      <nav className="menu">
        <ul className="menu__list">
          <li
            className={`menu__item ${active ? 'active-nav' : ''}`}
            onClick={() => {
              filterItems('all');
            }}
          >
            All
          </li>
          {tabs.map((tab, index) => {
            return (
              <li
                key={index}
                className={`menu__item ${active ? 'active-nav' : ''}`}
                onClick={() => {
                  filterItems(tab);
                }}
                value={tab}
              >
                {tab}
              </li>
            );
          })}

          {/* <li
            className={`menu__item ${active ? 'active-nav' : ''}`}
            onClick={() => {
              filterItems('flowers');
            }}
          >
            Flowers
          </li>
          <li
            className={`menu__item ${active ? 'active-nav' : ''}`}
            onClick={() => {
              filterItems('birds');
            }}
          >
            Birds
          </li>
          <li
            className={`menu__item ${active ? 'active-nav' : ''}`}
            onClick={() => {
              filterItems('insect');
            }}
          >
            Insect
          </li>
          <li
            className={`menu__item ${active ? 'active-nav' : ''}`}
            onClick={() => {
              filterItems('stones');
            }}
          >
            Stones
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Categories;
