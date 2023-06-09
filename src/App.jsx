import { useState } from 'react';
import Categories from './Categories';
import Pictures from './Pictures';
import Search from './Search';
import images from './data';

import './style.css';

const mainTabs = ['all', ...new Set(images.map((item) => item.mainCategory))];
console.log('active tabs: ', mainTabs);

function App() {
  const [items, setItems] = useState(images);
  const [isActive, setIsActive] = useState(false);
  const [tabs, setTabs] = useState(mainTabs);

  const searchItems = (e) => {
    const query = e.target.value.toLowerCase();
    console.log(query);

    query === ''
      ? setItems(images)
      : setItems(images.filter((item) => item.category.includes(query)));
  };

  const filterItems = (category) => {
    console.log('category: ', category);
    if (category === 'all') {
      setItems(images);
      setTabs(['all']);
      return;
    }

    const newItems = images.filter((item) => category === item.mainCategory);
    console.log('newItems: ', newItems);
    setItems(newItems);

    const clickedTab = mainTabs.filter((tab) => category === tab);
    console.log('clickedTab: ', clickedTab[0]);

    if (category === clickedTab[0]) {
      setIsActive(true);
      setTabs(clickedTab);
      return;
    }
  };

  return (
    <div className="app">
      <div className="title">
        <h1 className="title__h">Beauty of Nature</h1>
        <p className="title__p">(select category)</p>
        <div className="title__underline"></div>
      </div>

      {/* navigation */}
      <Categories
        filterItems={filterItems}
        active={isActive}
        tabs={mainTabs}
        activeTab={tabs}
      />

      {/* search */}
      <Search searchItems={searchItems} />

      {/* pictures */}
      <Pictures items={items} />
    </div>
  );
}

export default App;
