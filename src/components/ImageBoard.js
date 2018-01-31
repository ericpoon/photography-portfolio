import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import SortableContainer from './SortableContainer';

const ROW_NUM = 3;
const COL_NUM = 3;

// todo: Item states are not persisted,
// use redux store to keep track of those images being edited (not all)

class ImageBoard extends React.Component {
  constructor(props) {
    super();
    this.state = { images: props.children };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({ images: nextProps.children });
  }

  moveCard = (dragIndex, hoverIndex) => {
    const { images } = this.state;
    const draggedCard = images[dragIndex];
    images.splice(dragIndex, 1, images[hoverIndex]);
    images.splice(hoverIndex, 1, draggedCard);
    this.setState({ images });
  };

  render() {
    const { images } = this.state;
    const { sortable } = this.props;
    const grid = [];

    images.forEach((current, index) => {
      const row = Math.floor(index / ROW_NUM);
      const col = index % COL_NUM;
      if (!grid[row]) grid[row] = [];
      grid[row][col] = sortable ? (
        <SortableContainer
          moveCard={this.moveCard}
          index={index}
          key={current.key}
        >
          {current}
        </SortableContainer>
      ) : current;
    });

    return (
      <div className={'image-card-collection'}>
        {grid.map(row => (
          <div className={'image-card-collection__row'} key={row.map(i => i.key).toString()}>
            {row.map(individual => individual)}
          </div>
        ))}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(ImageBoard);
