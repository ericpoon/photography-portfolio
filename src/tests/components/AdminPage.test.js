import React from 'react';
import { shallow } from 'enzyme';
import { AdminPage } from '../../components/AdminPage';
import images from '../fixtures/images';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<AdminPage images={images} />);
});

it('should render AdminPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should have correct number of image cards', () => {
  expect(wrapper.find('Connect(ImageCard)').length).toBe(images.length);
});

it('should have correct number of editable image cards', () => {
  expect(wrapper
    .find('Connect(ImageCard)')
    .filterWhere(imageCard => imageCard.prop('editable'))
    .length)
    .toBe(images.length);
});
