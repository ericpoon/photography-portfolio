import React from 'react';

const HomePage = (props) => {
  const { history } = props;
  const onEnterClick = () => history.push('/portfolio');
  const onLoginClick = () => history.push('/login');

  return (
    <div className={'banner-layout'}>
      <div className={'banner-layout__banner'}>
        <h1 className={'banner-layout__subtitle'}>Firstname Lastname</h1>
        <p className={'banner-layout__title'}>Hong Kong</p>
      </div>
      <div>
        <button onClick={onEnterClick} className={'button button--larger'}>Enter</button>
      </div>
      <button onClick={onLoginClick} className={'button button--bottom-right'}>Login</button>
    </div>
  );
};

export default HomePage;
