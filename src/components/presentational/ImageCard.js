import React from 'react';

const ImageCard = (props) => {
  const {
    title, subtitle, description, fileUrl, onImageClick,
  } = props;

  return (
    <div className={'image-card'}>
      <div
        className={'image-card__image'}
        style={{ backgroundImage: `url(${fileUrl})` }}
        onClick={onImageClick}
      />
      <div>
        <h3 className={'image-card__title'}>{title}</h3>
        <h4 className={'image-card__subtitle'}>{subtitle}</h4>
        <p className={'image-card__description'}>{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
