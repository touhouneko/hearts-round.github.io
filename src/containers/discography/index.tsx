import * as React from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import * as Loadable from "react-loadable";

import PageLoading from '../page-loading';
import './style.css';

const AlbumPage = Loadable({
  loader: () => import(/* webpackChunkName: "discography-album" */'./album'),
  loading: PageLoading
});
const VideoPage = Loadable({
  loader: () => import(/* webpackChunkName: "discography-video" */'./video'),
  loading: PageLoading
});

const Discography = ({ match }: { match: any }) => (
  <main className="discography__container">
    <nav className="discography__navigation">
      <NavLink
        to={`${match.url}/albums`}
        className="navigation__button"
        activeClassName="active"
      >
        Album
      </NavLink>
      <NavLink
        to={`${match.url}/videos`}
        className="navigation__button"
        activeClassName="active"
      >
        Video
      </NavLink>
    </nav>
    <Switch>
      <Redirect exact from='/discography' to='/discography/albums' />
      <Route exact path={`${match.url}/albums`} component={AlbumPage}/>
      <Route exact path={`${match.url}/videos`} component={VideoPage}/>
    </Switch>
  </main>
);

export default Discography;