import React from 'react';

export default (props) => {
  const { children } = props;
  const grid = [];

  children.forEach((current, idx) => {
    const row = Math.floor(idx / 3);
    const col = idx % 3;
    if (!grid[row]) grid[row] = [];
    grid[row][col] = current;
  });

  return (
    <div className={'image-card-collection'}>
      {grid.map((row, idx) => (
        <div className={'image-card-collection__row'} key={row.map(i => i.key).toString()}>
          {row.map(individual => individual)}
        </div>
      ))}
    </div>
  );
};
