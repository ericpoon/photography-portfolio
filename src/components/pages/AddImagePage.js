import React from 'react';
import { connect } from 'react-redux';
import { addImage } from '../../actions/images';
import ImageCard from '../ImageCard';

export const AddImagePage = (props) => {
  return (
    <div className={'content-container content-container--small'}>
      <ImageCard
        editable
        onSaveClick={updates => props.addImage(updates)}
      />
    </div>
  );
};

export default connect(undefined, { addImage })(AddImagePage);
