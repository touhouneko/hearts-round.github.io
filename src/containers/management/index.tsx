import React from 'react';
import { HashRouter, Switch, Route, Redirect, NavLink } from 'react-router-dom'

import TokenContext from './pwd-context';
import AlbumManagement from './albums';
import NewsManagement from './news';
import './style.css';

interface IProp {
  location?: {
    search: any;
  }
}

const NavItem = ({ to, label }: { to: string, label: string }) => (
  <NavLink
    to={to}
    exact={true}
    className="navigation__button"
    activeClassName="active"
    replace
  >
    {label}
  </NavLink>
);

export default function ManagementPage({ location }: IProp) {
  const [password, setPassword] = React.useState('');
  return (
    <HashRouter>
      <main className="management__container">
        <p className="management__auth-info">
          <span>Password: </span>
          <input
            className="auth__input"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </p>
        <nav className="management__nav">
          <NavItem to="/news" label={'News'}/>
          <NavItem to="/albums" label={'Albums'} />
        </nav>
        <TokenContext.Provider value={password}>
          <Switch>
            <Redirect exact path="/" to="/news" />
            <Route exact path="/news" component={NewsManagement} />
            <Route exact path="/albums" component={AlbumManagement} />
          </Switch>
        </TokenContext.Provider>
      </main>
    </HashRouter>
  )
}

