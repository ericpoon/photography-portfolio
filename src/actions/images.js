import firebase from '../firebase/firebase';

const database = firebase.database();
const storage = firebase.storage();

export const setImages = images => ({
  type: 'SET_IMAGES',
  images,
});

export const startDownloadImages = () => {
  return (dispatch) => {
    return database.ref('/images').once('value')
      .then((snapshot) => {
        const images = [];
        snapshot.forEach((childSnapshot) => {
          images.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setImages(images));
      });
  };
};

export const addImage = image => ({
  type: 'ADD_IMAGE',
  image,
});

export const startAddImage = (image) => {
  const {
    title, subtitle, description, file,
  } = image;
  return (dispatch) => {
    const id = database.ref('/images').push().key;
    return storage.ref(`/images/${id}`).put(file, { cacheControl: 'private, max-age=60' })
      .then((snapshot) => {
        const fileUrl = snapshot.downloadURL;
        return database.ref(`/images/${id}`).set({
          title, subtitle, description, fileUrl,
        })
          .then(() => {
            dispatch(addImage({
              id,
              title,
              subtitle,
              description,
              fileUrl,
            }));
          });
      });
  };
};

export const editImage = (id, updates) => ({
  type: 'EDIT_IMAGE',
  id,
  updates,
});

export const startEditImage = (id, updates) => {
  return (dispatch) => {
    return database.ref(`/images/${id}`).update(updates)
      .then(() => {
        dispatch(editImage(id, updates));
      });
  };
};

export const deleteImage = id => ({
  type: 'DELETE_IMAGE',
  id,
});

export const startDeleteImage = (id) => {
  return (dispatch) => {
    return database.ref(`images/${id}`).remove()
      .then(() => {
        dispatch(deleteImage(id));
      });
  };
};
