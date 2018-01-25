import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { hideDetail } from '../actions/gallery';

const ImageDetailModal = props => (
  <Modal
    isOpen={props.isOpen}
    onRequestClose={props.hideDetail}
    appElement={document.getElementById('app')}
  >
    <div>
      <img src={'/images/bg.jpg'} alt={''} />
      <h3>Kowloon Tong, Hong Kong</h3>
      <h4>Jan 18, 2018</h4>
      <p>
        Putarem quodque tamquam ii ob an deumque. Fuerint judicia me assequi
        sapores ab verarum. Veniebant sex videbatur
        assignare eas una corporeis alligatus.
        Oculis nondum fusius sub ens urgeat fuerit rea sum. Eo ex deumque reddere
        publice ea similes attinet. Sensuum ac gi fallant incipit.
      </p>
    </div>
  </Modal>

);

const mapStateToProps = state => ({
  isOpen: state.gallery.showDetail,
});

export default connect(mapStateToProps, { hideDetail })(ImageDetailModal);
