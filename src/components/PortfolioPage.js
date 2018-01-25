import React from 'react';
import ImageCard from './ImageCard';
import ImageDetailModal from './ImageDetailModal';

export default () => (
  <div>
    <ImageDetailModal />
    <div className={'content-container'}>
      <div className={'image-card-collection'}>
        <div className={'image-card-collection__row'}>
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </div>
        <div className={'image-card-collection__row'}>
          <ImageCard />
          <ImageCard />
        </div>
      </div>
    </div>
  </div>
);
