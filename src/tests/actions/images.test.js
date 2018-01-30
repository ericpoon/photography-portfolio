import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import firebase from '../../firebase/firebase';
import {
  setImages,
  addImage,
  editImage,
  deleteImage,
  startDownloadImages,
  startAddImage,
  startEditImage,
  startDeleteImage,
} from '../../actions/images';
import images from '../fixtures/images';

describe('sync', () => {
  it('should create setImages action', () => {
    const action = setImages(images);
    expect(action).toEqual({
      type: 'SET_IMAGES',
      images,
    });
  });

  it('should create addImage action', () => {
    const action = addImage(images[0]);
    expect(action).toEqual({
      type: 'ADD_IMAGE',
      image: images[0],
    });
  });

  it('should create editImage action', () => {
    const updates = { title: 'new updated title' };
    const { id } = images[0];
    const action = editImage(id, updates);
    expect(action).toEqual({
      type: 'EDIT_IMAGE',
      id,
      updates,
    });
  });

  it('should create deleteImage action', () => {
    const { id } = images[0];
    const action = deleteImage(id);
    expect(action).toEqual({
      type: 'DELETE_IMAGE',
      id,
    });
  });
});

describe.skip('async with firebase', () => {
  const createMockStore = configureMockStore([thunk]);
  beforeEach((done) => {
    const imageData = {};
    images.forEach((i) => {
      const {
        title, subtitle, description, fileUrl,
      } = i;
      imageData[i.id] = {
        title, subtitle, description, fileUrl,
      };
    });
    firebase.database().ref('/images').set(imageData).then(() => done());
  });

  it('should handle startDownloadImages action', () => {
    const store = createMockStore();
    return store.dispatch(startDownloadImages())
      .then(() => firebase.database().ref('/images').once('value'))
      .then((snapshot) => {
        const actions = store.getActions();
        const fetchedImages = [];
        snapshot.forEach((childSnapshot) => {
          fetchedImages.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        expect(actions[0]).toEqual({
          type: 'SET_IMAGES',
          images: fetchedImages,
        });
      });
  });

  it('should handle startAddImages action', () => {
    const store = createMockStore();
    const image = {
      title: 'fake title',
      subtitle: 'fake subtitle',
      description: 'fake description',
      file: new File(['line1', 'line2'], 'filename.txt', { type: 'text/plain' }),
    };
    const { title, subtitle, description } = image;
    return store.dispatch(startAddImage(image))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: 'ADD_IMAGE',
          image: {
            title,
            subtitle,
            description,
            fileUrl: expect.any(String),
            id: expect.any(String),
          },
        });
        return firebase.database().ref(`/images/${actions[0].image.id}`).once('value');
      })
      .then((snapshot) => {
        expect(snapshot.val()).toEqual({
          title, subtitle, description, fileUrl: expect.any(String),
        });
      });
  });

  it('should handle startEditImages action', () => {
    const store = createMockStore();
    const { id } = images[0];
    const updates = {
      title: 'updated title',
      subtitle: 'updated subtitle',
    };
    return store.dispatch(startEditImage(id, updates))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: 'EDIT_IMAGE',
          id,
          updates,
        });
        return firebase.database().ref(`/images/${id}`).once('value');
      })
      .then((snapshot) => {
        const {
          title, subtitle, description, fileUrl,
        } = images[0];
        expect(snapshot.val()).toEqual({
          title, subtitle, description, fileUrl, ...updates,
        });
      });
  });

  it('should handle startDeleteImages action', () => {
    const store = createMockStore();
    const { id } = images[0];
    return store.dispatch(startDeleteImage(id))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: 'DELETE_IMAGE',
          id,
        });
        return firebase.database().ref(`/images/${id}`).once('value');
      })
      .then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
      });
  });
});
