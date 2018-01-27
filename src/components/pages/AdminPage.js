import React from 'react';
import { connect } from 'react-redux';
import { editImage, deleteImage } from '../../actions/images';
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
                onSaveClick={updates => props.editImage(image.id, updates)}
                onDeleteClick={() => props.deleteImage(image.id)}
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

export default connect(mapStateToProps, { editImage, deleteImage })(AdminPage);
