import React from 'react';
import { connect } from 'react-redux';
import { showDetail } from '../actions/gallery';
import ImageDetailModal from './ImageDetailModal';
import ImageCardCollection from './ImageCardCollection';
import ImageCard from './ImageCard';

export const PortfolioPage = props => (
  <div>
    <ImageDetailModal />
    <div className={'content-container'}>
      <ImageCardCollection>
        {props.images.map((image) => {
          return (<ImageCard
            {...image}
            key={image.id}
            onImageClick={() => props.showDetail(image.id)}
          />);
        })}
      </ImageCardCollection>
    </div>
  </div>
);

const mapStateToProps = state => ({
  images: state.images,
});

export default connect(mapStateToProps, { showDetail })(PortfolioPage);
