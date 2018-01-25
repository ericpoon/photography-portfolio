import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { hideDetail } from '../actions/imageDetail';
import ImageDescription from './ImageDescription';

const ImageDetailModal = props => (
  <Modal
    isOpen={props.isOpen}
    onRequestClose={props.hideDetail}
  >
    <div>
      <img src={'/images/bg.jpg'} alt={''} />
      <ImageDescription />
    </div>
  </Modal>

);

const mapStateToProps = state => ({
  isOpen: state.imageDetail.show,
});

export default connect(mapStateToProps, { hideDetail })(ImageDetailModal);
