import React from 'react';
import { connect } from 'react-redux';
import { showDetail } from '../../actions/gallery';
import ImageDetailModal from '../ImageDetailModal';
import ImageBoard from '../ImageBoard';
import ImageCard from '../presentational/ImageCard';

export const PortfolioPage = props => (
  <div>
    <ImageDetailModal />
    <div className={'content-container'}>
      <ImageBoard>
        {props.images.map((image) => {
          return (
            <ImageCard
              {...image}
              key={image.id}
              onImageClick={() => props.showDetail(image.id)}
            />
          );
        })}
      </ImageBoard>
    </div>
  </div>
);

const mapStateToProps = state => ({
  images: state.images,
});

export default connect(mapStateToProps, { showDetail })(PortfolioPage);
