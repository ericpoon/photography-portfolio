import React from 'react';
import { shallow } from 'enzyme';
import { PortfolioPage } from '../../../components/pages/PortfolioPage';
import images from '../../fixtures/images';

let wrapper,
  showDetail;

beforeEach(() => {
  showDetail = jest.fn();
  wrapper = shallow(<PortfolioPage images={images} showDetail={showDetail} />);
});

it('should render PortfolioPage', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should have correct number of image cards', () => {
  expect(wrapper.find('Connect(ImageCard)').length).toBe(images.length);
});

it('should have no editable image cards', () => {
  expect(wrapper
    .find('Connect(ImageCard)')
    .filterWhere(imageCard => imageCard.prop('editable'))
    .length)
    .toBe(0);
});

it('should show image detail after clicking image', () => {
  const firstImageCard = wrapper.find('Connect(ImageCard)').at(0);
  firstImageCard.prop('onImageClick')();
  expect(showDetail).toHaveBeenCalledWith(firstImageCard.prop('id'));
});
