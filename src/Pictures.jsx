import React, { useState } from 'react';
import PictureDetail from './PictureDetail';

const Pictures = ({ items }) => {
  const [isShown, setIsShown] = useState(false);

  const openDetails = (id) => {
    console.log(`open image id: ${id}`);

    setIsShown((prevValue) => {
      console.log(prevValue);
      return !prevValue;
    });
  };

  return (
    <div className="pictures">
      {items.map((image) => {
        return (
          <section className="pictures__item" key={image.id}>
            <img
              className="pictures__img"
              src={image.img}
              alt={image.mainCategory}
              onClick={() => {
                openDetails(image.id);
              }}
            />

            {/* 👇️ show component on click */}
            {isShown && <PictureDetail picture={image.id} />}
          </section>
        );
      })}
    </div>
  );
};

export default Pictures;
