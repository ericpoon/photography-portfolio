import React from 'react';
import { shallow } from 'enzyme';
import { ImageDetailModal } from '../../components/ImageDetailModal';
import images from '../fixtures/images';

let wrapper,
  hideDetail;

beforeEach(() => {
  const { title, subtitle, description } = images[0];
  hideDetail = jest.fn();
  wrapper = shallow(<ImageDetailModal
    isOpen
    title={title}
    subtitle={subtitle}
    description={description}
    hideDetail={hideDetail}
  />);
});

it('should render ImageDetailModal correctly when isOpen is true', () => {
  const modal = wrapper.find('Modal');
  expect(wrapper).toMatchSnapshot();
  expect(modal.prop('isOpen')).toBeTruthy();
});

it('should render ImageDetailModal correctly when isOpen is false', () => {
  wrapper.setProps({ isOpen: false });
  const modal = wrapper.find('Modal');
  expect(wrapper).toMatchSnapshot();
  expect(modal.prop('isOpen')).toBeFalsy();
});

it('should call hideDetail when closing', () => {
  const modal = wrapper.find('Modal');
  modal.prop('onRequestClose')();
  expect(hideDetail).toHaveBeenCalled();
});
