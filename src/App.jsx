import { useState } from 'react';
import Categories from './Categories';
import images from './data';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="title">
        <h1>find picture</h1>
        <div className="title__underline"></div>
      </div>
      <div className="categories">
        <Categories />
      </div>
      <div className="pictures">
        {images.map((image) => {
          return (
            <section className="pictures__item">
              <img className="pictures__img" src={image.img} />
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default App;
