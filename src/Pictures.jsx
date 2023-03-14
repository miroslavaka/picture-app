import React from 'react';

const Pictures = ({ items }) => {
  return (
    <div className="pictures">
      {items.map((image) => {
        return (
          <section className="pictures__item" key={image.id}>
            <img
              className="pictures__img"
              src={image.img}
              alt={image.mainCategory}
            />
          </section>
        );
      })}
    </div>
  );
};

export default Pictures;
