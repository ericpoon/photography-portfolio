import React from 'react';
import { shallow } from 'enzyme';
import { AddImagePage } from '../../../components/pages/AddImagePage';

let wrapper,
  addImage;

beforeEach(() => {
  addImage = jest.fn();
  wrapper = shallow(
    <AddImagePage
      addImage={addImage}
    />);
});

it('renders AddImagePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('handles addImage correctly', () => {
  const imageToAdd = { title: 'title', subtitle: 'subtitle' };
  wrapper.find('Connect(ImageCard)').prop('onSaveClick')(imageToAdd);
  expect(addImage).toHaveBeenCalledWith(imageToAdd);
});
