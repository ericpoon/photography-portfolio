import React from 'react';
import { connect } from 'react-redux';
import ImageCardCollection from '../ImageCardCollection';
import ImageCard from '../ImageCard';

export const AdminPage = (props) => {
  return (
    <div>
      <div className={'content-container'}>
        <ImageCardCollection>
          {props.images.map((image) => {
            return <ImageCard key={image.id} {...image} editable />;
          })}
        </ImageCardCollection>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  images: state.images,
});

export default connect(mapStateToProps)(AdminPage);
