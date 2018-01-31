import React from 'react';
import { shallow } from 'enzyme';
import SortableContainer from '../../components/SortableContainer';

describe('Testing the original component in isolation', () => {
  let wrapper,
    connectDragSource,
    connectDropTarget;
  beforeEach(() => {
    const { DecoratedComponent } = SortableContainer;
    connectDragSource = jest.fn(i => i);
    connectDropTarget = jest.fn(i => i);
    wrapper = shallow(
      <DecoratedComponent
        connectDragSource={connectDragSource}
        connectDropTarget={connectDropTarget}
      />
    );
  });

  it('should render container correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be both a drag source and a drop target', () => {
    expect(connectDragSource).toHaveBeenCalled();
    expect(connectDropTarget).toHaveBeenCalled();
  });
});

describe('Testing interaction', () => {

});
