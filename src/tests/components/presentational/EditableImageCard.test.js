import React from 'react';
import { shallow } from 'enzyme';
import EditableImageCard from '../../../components/presentational/EditableImageCard';
import images from '../../fixtures/images';

const { title, subtitle, description } = images[0];
let wrapper,
  onImageClick,
  onSaveClick,
  onDeleteClick;

beforeEach(() => {
  onImageClick = jest.fn();
  onSaveClick = jest.fn();
  onDeleteClick = jest.fn();
  wrapper = shallow(
    <EditableImageCard
      title={title}
      subtitle={subtitle}
      description={description}
      onImageClick={onImageClick}
      onSaveClick={onSaveClick}
      onDeleteClick={onDeleteClick}
    />
  );
});

it('should render editable ImageCard correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should handle onImageClick', () => {
  wrapper.find('div>div').at(0).prop('onClick')();
  expect(onImageClick).toHaveBeenCalled();
});

it('should handle delete image', () => {
  wrapper.find('div>button').at(0).simulate('click');
  expect(onDeleteClick).toHaveBeenCalledWith();
});

it('should handle save image', () => {
  wrapper.find('div>button').at(1).simulate('click');
  expect(onSaveClick).toHaveBeenCalledWith({
    title, subtitle, description, file: undefined,
  });
});

it('should handle discard changes', () => {
  wrapper.setState({ title: 'edited title', subtitle: 'edited subtitle', description: 'edited description' });
  wrapper.find('button').at(2).simulate('click');
  expect(wrapper.state()).toMatchObject({ title, subtitle, description });
});
