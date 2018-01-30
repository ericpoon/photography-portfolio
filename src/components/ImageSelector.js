import React from 'react';
import firebase from '../firebase/firebase';

const storage = firebase.storage();

const ImageSelector = () => {
  const handleChange = (file) => {
    console.log(file);
    storage.ref('mountains.jpg').put(file)
      .then((snapshot) => {
        console.log(snapshot);
      });
  };

  return (
    <div>
      <input type={'file'} onChange={e => handleChange(e.target.files[0])} />
    </div>
  );
};

export default ImageSelector;
