import React from 'react';
import { shallow } from 'enzyme';
import { AddImagePage } from '../../../components/pages/AddImagePage';

let wrapper,
  startAddImage;

beforeEach(() => {
  startAddImage = jest.fn();
  wrapper = shallow(
    <AddImagePage
      startAddImage={startAddImage}
    />);
});

it('renders AddImagePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('handles addImage correctly', () => {
  const imageToAdd = { title: 'title', subtitle: 'subtitle' };
  wrapper.find('EditableImageCard').prop('onSaveClick')(imageToAdd);
  expect(startAddImage).toHaveBeenCalledWith(imageToAdd);
});
