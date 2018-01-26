import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => (
  <header className={'header'}>
    <div className={'content-container'}>
      <div className={'header__content'}>
        <Link to={'/'} className={'header__title'}>
          <h1>{props.title}</h1>
        </Link>
        <div className={'header__actions'}>
          {props.children}
        </div>
      </div>
    </div>
  </header>
);

export default Header;
