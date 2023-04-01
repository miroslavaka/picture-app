import React from 'react';

const PictureDetail = (props) => {
  console.log('image id: ', props.picture);
  return (
    <div>
      <h3>This is picture detail</h3>
      <p>{props.picture}</p>
    </div>
  );
};

export default PictureDetail;
