import React from 'react';
import { mount } from 'enzyme';
import TestBackend from 'react-dnd-test-backend';
import { DragDropContext } from 'react-dnd';
import SortableContainer from '../../components/SortableContainer';
import ImageBoard, { ImageBoard as UnconnectedImageBoard } from '../../components/ImageBoard';

describe('Testing the original component in isolation', () => {
  let wrapper;
  beforeEach(() => {
    const MockImageCard = jest.fn(() => (<div />));
    wrapper = mount(
      <ImageBoard sortable>
        <MockImageCard key={0} />
        <MockImageCard key={1} />
        <MockImageCard key={2} />
      </ImageBoard>);
  });

  it('should render ImageBoard', () => {
    wrapper.setProps({ sortable: false });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render sortable ImageBoard', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should wrap children within SortableContainer', () => {
    expect(wrapper.find(SortableContainer)).toHaveLength(3);
  });
});

describe('Testing the drag and drop interaction', () => {
  /* eslint-disable react/prefer-stateless-function */
  const wrapInTestContext = (DecoratedComponent) => {
    return DragDropContext(TestBackend)(
      // have to make this a class component in order to access ref
      class TestContextContainer extends React.Component {
        render() {
          return <DecoratedComponent {...this.props} />;
        }
      }
    );
  };
  /* eslint-enable */

  let wrapper, manager, backend, monitor, sourceId, targetId, targetNode;
  beforeEach(() => {
    const Wrapped = wrapInTestContext(UnconnectedImageBoard); // must be unconnected

    wrapper = mount(
      <Wrapped sortable>
        <div key={1} />
        <div key={2} />
      </Wrapped>
    );

    manager = wrapper.instance().getManager();
    backend = manager.getBackend();
    monitor = manager.getMonitor();

    const dragSource = wrapper.find(SortableContainer).at(0).find('DragSource(SortableContainer)').instance();
    const dropTarget = wrapper.find(SortableContainer).at(1).instance();

    sourceId = dragSource.getHandlerId();
    targetId = dropTarget.getHandlerId();
    targetNode = dropTarget
      .decoratedComponentInstance
      .decoratedComponentInstance
      .node;
  });

  it('should not trigger reorder', () => {
    monitor.getClientOffset = jest.fn(() => ({
      x: 1000,
      y: 1000,
    }));

    targetNode.getBoundingClientRect = jest.fn(() => ({
      left: 100,
      right: 250,
      top: 0,
      bottom: 100,
      width: 150,
      height: 100,
    }));

    backend.simulateBeginDrag([sourceId]);
    backend.simulateHover([targetId]);
  });

  it('should trigger reorder', () => {
    monitor.getClientOffset = jest.fn(() => ({
      x: 150,
      y: 50,
    }));

    targetNode.getBoundingClientRect = jest.fn(() => ({
      left: 100,
      right: 250,
      top: 0,
      bottom: 100,
      width: 150,
      height: 100,
    }));

    backend.simulateBeginDrag([sourceId]);
    // backend.simulateHover([targetId]);
    // expect(mockTrigger).toHaveBeenCalledTimes(1);
    /* FIXME
    * should somehow mock trigger function in props
    * and expect it to be called once
    * probably tell backend.simulateHover to mock props.trigger
    * */
  });
});
