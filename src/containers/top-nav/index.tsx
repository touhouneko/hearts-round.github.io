import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

const labels = ['home', 'discography', 'gallery', 'works', 'about', 'contact'];
const paths = labels.map(l => `/${l}`);

function navItem(label: string, idx: number) {
  return (
    <li className='nav__item' key={label}>
      <NavLink
        className='nav__item-text'
        activeClassName='active'
        to={paths[idx]}
      >
        { label }
      </NavLink>
    </li>
  );
}

const Header = () => (
  <header className="global__header">
    <nav className="nav__container">
      <div className="logo__wrapper">
        <img className="logo" />
      </div>
      <ul className="nav__list">
        {labels.map(navItem)}
      </ul>
    </nav>
  </header>
);

export default Header;