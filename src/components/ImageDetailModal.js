import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { hideDetail } from '../actions/gallery';

export const ImageDetailModal = (props) => {
  const { title, subtitle, description } = props;

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={() => props.hideDetail()}
      appElement={document.getElementById('app')}
    >
      <div>
        <img src={'/images/bg.jpg'} alt={''} />
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{description}</p>
      </div>
    </Modal>

  );
};

const mapStateToProps = (state) => {
  const image = state.images.filter(i => i.id === state.gallery.selectedId)[0];
  return {
    isOpen: state.gallery.showDetail,
    title: image ? image.title : null,
    subtitle: image ? image.subtitle : null,
    description: image ? image.description : null,
  };
};

export default connect(mapStateToProps, { hideDetail })(ImageDetailModal);
