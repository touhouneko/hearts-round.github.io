import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

interface IRoute {
  label: string;
  exact: boolean;
  path: string;
}

const routes: IRoute[] = [
  { label: 'home', exact: true, path: '/home' },
  { label: 'discography', exact: false, path: '/discography' },
  { label: 'gallery', exact: false, path: '/gallery' },
  { label: 'works', exact: false, path: '/works' },
  { label: 'about', exact: false, path: '/about' },
  { label: 'contact', exact: true, path: '/contact' },
]

function navItem(route: IRoute, idx: number) {
  return (
    <li className='nav__item' key={route.label}>
      <NavLink
        className='nav__item-text'
        activeClassName='active'
        to={route.path}
        exact={route.exact}
      >
        { route.label }
      </NavLink>
    </li>
  );
}

const Header = React.forwardRef((props: unknown, ref: React.RefObject<HTMLHeadingElement>) => (
  <header className="global__header">
    <nav className="nav__container" ref={ref}>
      <div className="logo__wrapper">
        <img className="logo" />
      </div>
      <ul className="nav__list">
        {routes.map(navItem)}
      </ul>
    </nav>
  </header>
));

export default Header;