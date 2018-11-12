import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

import useOnScroll from '@/hooks/scroll';
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

const Header = React.forwardRef(function(props: unknown, ref: React.RefObject<HTMLHeadingElement>) {
  const [offsetX, setOffsetX] = useState(0);
  const minWidth = ref.current === null? 0: ref.current.clientWidth;
  useOnScroll(() => {
    setOffsetX(document.documentElement.scrollLeft)
  });

  return (
    <header
      className="global__header"
      style={{transform: `translateX(-${offsetX}px)`, minWidth}}
    >
      <nav className="nav__container" ref={ref}>
        <div className="logo__wrapper">
          <i className="logo" />
          <span className="logo__text">
            Hearts Rounds
          </span>
        </div>
        <ul className="nav__list">
          {routes.map(navItem)}
        </ul>
      </nav>
    </header>
  )
});

export default Header;