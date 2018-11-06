import React from 'react';
import { Switch, Route, Redirect, NavLink, BrowserRouter } from 'react-router-dom';
import Loadable from "react-loadable";

import PageLoading from '../page-loading';
import NotFound from '../404';
import './style.css';

const AlbumPage = Loadable({
  loader: () => import(/* webpackChunkName: "discography-album" */'./album'),
  loading: PageLoading
});
const VideoPage = Loadable({
  loader: () => import(/* webpackChunkName: "discography-video" */'./video'),
  loading: PageLoading
});

const Discography = () => (
  <BrowserRouter basename="discography">
    <main className="discography__container">
      <nav className="discography__navigation">
        <NavLink
          to='/albums'
          className="navigation__button"
          activeClassName="active"
        >
          Album
        </NavLink>
        <NavLink
          to='/videos'
          className="navigation__button"
          activeClassName="active"
        >
          Video
        </NavLink>
      </nav>
      <Switch>
        <Redirect exact from='/' to='/albums' />
        <Route exact path='/albums' component={AlbumPage}/>
        <Route exact path='/videos' component={VideoPage}/>
        <Route component={NotFound} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default Discography;