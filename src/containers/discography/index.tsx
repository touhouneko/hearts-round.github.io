import React from 'react';
import { Switch, Route, Redirect, NavLink, BrowserRouter, RouteProps } from 'react-router-dom';
import Loadable from "react-loadable";

import PageLoading from '../page-loading';
import NotFound from '../404';
import './style.css';

const AlbumPage = Loadable({
  loader: () => import(/* webpackChunkName: "discography-album" */'./albums'),
  loading: PageLoading
});
const VideoPage = Loadable({
  loader: () => import(/* webpackChunkName: "discography-video" */'./video'),
  loading: PageLoading
});

const Discography = () => (
  <BrowserRouter basename='discography'>
    <main className="discography__container">
      <nav className="discography__navigation">
        <NavLink
          to='/album'
          className="navigation__button"
          activeClassName="active"
        >
          Album
        </NavLink>
        <NavLink
          to='/video'
          className="navigation__button"
          activeClassName="active"
        >
          Video
        </NavLink>
      </nav>
      <Switch>
        <Redirect exact from='' to='/album' />
        <Route exact path='/album' component={AlbumPage}/>
        <Route exact path='/video' component={VideoPage}/>
        <Route exact path='/404' component={NotFound} />
        <Redirect to='/404' />
      </Switch>
    </main>
  </BrowserRouter>
);

export default Discography;