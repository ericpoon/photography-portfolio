import React from 'react';
import { connect } from 'react-redux';
import { showDetail } from '../actions/imageDetail';
import ImageDescription from './ImageDescription';

const PhotoCard = (props) => {
  const onImageClick = () => {
    props.showDetail();
  };
  return (
    <div className={'image-card'}>
      <div className={'image-card__image'} onClick={onImageClick} />
      <ImageDescription />
    </div>
  );
};

export default connect(undefined, { showDetail })(PhotoCard);
