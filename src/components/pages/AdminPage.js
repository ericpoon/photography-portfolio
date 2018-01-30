import React from 'react';
import { connect } from 'react-redux';
import { startEditImage, startDeleteImage } from '../../actions/images';
import ImageCardCollection from '../ImageCardCollection';
import ImageCard from '../ImageCard';

export const AdminPage = (props) => {
  return (
    <div>
      <div className={'content-container'}>
        <ImageCardCollection>
          {props.images.map((image) => {
            return (
              <ImageCard
                {...image}
                editable
                key={image.id}
                onSaveClick={updates => props.startEditImage(image.id, updates)}
                onDeleteClick={() => props.startDeleteImage(image.id)}
              />);
          })}
        </ImageCardCollection>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  images: state.images,
});

export default connect(mapStateToProps, { startEditImage, startDeleteImage })(AdminPage);
