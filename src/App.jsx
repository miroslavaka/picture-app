import { useState } from 'react';
import Categories from './Categories';
import Pictures from './Pictures';
import images from './data';

import './App.css';

function App() {
  const [items, setItems] = useState(images);

  const filterItems = (category) => {
    console.log(category);
    if (category === 'all') {
      setItems(images);
      return;
    }

    const newItems = images.filter((item) => category === item.mainCategory);
    console.log('newItems: ', newItems);
    setItems(newItems);
  };

  return (
    <div className="App">
      <div className="title">
        <h1>find picture</h1>
        <div className="title__underline"></div>
      </div>

      {/* navigation */}
      <Categories filterItems={filterItems} />

      {/* pictures */}
      <Pictures items={items} />
    </div>
  );
}

export default App;
