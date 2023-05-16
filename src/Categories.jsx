import React from 'react';

const Categories = ({ filterItems, active, tabs, activeTab }) => {
  console.log('active tab:', activeTab);
  return (
    <div className="categories">
      <nav className="menu">
        <ul className="menu__list">
          {/* <li
            className={`menu__item ${active ? 'active-nav' : ''}`}
            onClick={() => {
              filterItems('all');
            }}
          >
            All
          </li> */}
          {tabs.map((tab, index) => {
            return (
              <li
                key={index}
                className={`menu__item ${
                  tab === 'all'
                    ? 'active-nav'
                    : tab === activeTab[0]
                    ? 'active-nav'
                    : ''
                }`}
                onClick={() => {
                  filterItems(tab);
                }}
                value={tab}
              >
                {tab}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Categories;
