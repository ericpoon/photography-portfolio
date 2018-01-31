import React from 'react';
import { connect } from 'react-redux';
import Header from './presentational/Header';
import { startLogout } from '../actions/auth';

export const AdminHeader = (props) => {
  return (
    <Header title={'Portfolio'}>
      <button
        onClick={() => null}
        className={'button button--no-background'}
      >
        {props.userName}
      </button>

      <button
        onClick={props.startLogout}
        className={'button button--no-background'}
      >
        Logout
      </button>
    </Header>
  );
};

const mapStateToProps = state => ({
  userName: state.auth.name,
});

export default connect(mapStateToProps, { startLogout })(AdminHeader);
