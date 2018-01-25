import React from 'react';
import { connect } from 'react-redux';
import { showDetail } from '../actions/gallery';
import ImageDetailModal from './ImageDetailModal';
import ImageCardCollection from './ImageCardCollection';
import ImageCard from './ImageCard';

const PortfolioPage = props => (
  <div>
    <ImageDetailModal />
    <div className={'content-container'}>
      <ImageCardCollection>
        {props.images.map((image) => {
          return <ImageCard key={image.id} {...image} onImageClick={() => props.showDetail()} />;
        })}
      </ImageCardCollection>
    </div>
  </div>
);

const mapStateToProps = state => ({
  images: state.images,
});

export default connect(mapStateToProps, { showDetail })(PortfolioPage);
