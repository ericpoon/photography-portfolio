import React from 'react';
import { connect } from 'react-redux';
import { startEditImage, startDeleteImage } from '../../actions/images';
import ImageBoard from '../ImageBoard';
import EditableImageCard from '../presentational/EditableImageCard';

export const AdminPage = (props) => {
  return (
    <div>
      <div className={'content-container'}>
        <ImageBoard sortable>
          {props.images.map((image) => {
            return (
              <EditableImageCard
                {...image}
                key={image.id}
                onSaveClick={updates => props.startEditImage(image.id, updates)}
                onDeleteClick={() => props.startDeleteImage(image.id)}
              />);
          })}
        </ImageBoard>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  images: state.images,
});

export default connect(mapStateToProps, { startEditImage, startDeleteImage })(AdminPage);
