import React from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import flow from 'lodash/flow';

const itemType = 'SORTABLE';

class SortableContainer extends React.Component {
  render() {
    const { connectDragSource, connectDropTarget, children } = this.props;
    return connectDragSource(connectDropTarget(
      <div
        ref={(node) => {
          this.node = node;
        }}
      >
        {children}
      </div>
    ));
  }
}

const cardSource = {
  beginDrag(props) {
    let { index } = props;
    return {
      get index() {
        return index;
      },
      setIndex(newIndex) {
        index = newIndex;
      },
    };
  },
};

const cardTarget = {
  hover(props, monitor, component) {
    const { decoratedComponentInstance } = component;
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if (dragIndex === hoverIndex) return;

    // Determine rectangle on screen, avoid using findDOMNode
    const hoverBoundingRect = decoratedComponentInstance.node.getBoundingClientRect();

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    if (clientOffset.x > hoverBoundingRect.left
      && clientOffset.x < hoverBoundingRect.right
      && clientOffset.y > hoverBoundingRect.top
      && clientOffset.y < hoverBoundingRect.bottom) {
      props.trigger(dragIndex, hoverIndex); // actually perform the action
      monitor.getItem().setIndex(hoverIndex); // update the item being dragged
    }
  },
};

const sourceCollect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});
const targetCollect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
});

export default flow(
  DragSource(itemType, cardSource, sourceCollect),
  DropTarget(itemType, cardTarget, targetCollect)
)(SortableContainer);
