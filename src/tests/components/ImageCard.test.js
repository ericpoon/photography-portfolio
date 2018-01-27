import React from 'react';
import { shallow } from 'enzyme';
import { ImageCard } from '../../components/ImageCard';
import images from '../fixtures/images';

let wrapper,
  title,
  subtitle,
  description,
  onImageClick,
  onSaveClick,
  onDeleteClick;

beforeEach(() => {
  const { title: t, subtitle: s, description: d } = images[0];
  title = t;
  subtitle = s;
  description = d;
  onImageClick = jest.fn();
  onSaveClick = jest.fn();
  onDeleteClick = jest.fn();
  wrapper = shallow(<ImageCard
    editable={false}
    title={title}
    subtitle={subtitle}
    description={description}
    onImageClick={onImageClick}
    onSaveClick={onSaveClick}
    onDeleteClick={onDeleteClick}
  />);
});

describe('non-editable/view-only ImageCard', () => {
  it('should render non-editable ImageCard correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle onImageClick', () => {
    wrapper.find('div>div').at(0).prop('onClick')();
    expect(onImageClick).toHaveBeenCalled();
  });
});

describe('editable ImageCard', () => {
  beforeEach(() => {
    wrapper.setProps({ editable: true });
  });

  it('should render editable ImageCard correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle onImageClick', () => {
    wrapper.find('div>div').at(0).prop('onClick')();
    expect(onImageClick).toHaveBeenCalled();
  });

  it('should handle delete image', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(onDeleteClick).toHaveBeenCalledWith();
  });

  it('should handle save image', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(onSaveClick).toHaveBeenCalledWith({ title, subtitle, description });
  });

  it('should handle discard changes', () => {
    wrapper.setState({ title: 'edited title', subtitle: 'edited subtitle', description: 'edited description' });
    wrapper.find('button').at(2).simulate('click');
    expect(wrapper.state()).toMatchObject({ title, subtitle, description });
  });
});
