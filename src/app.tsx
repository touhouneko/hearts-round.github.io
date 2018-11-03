import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import 'normalize.css';

import Nav from './containers/top-nav';
import PageLoading from './containers/page-loading';
import Footer from './containers/footer';
import './site.css';


const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home" */'./containers/home'),
  loading: PageLoading
});
const Discography = Loadable({
  loader: () => import(/* webpackChunkName: "discography" */'./containers/discography'),
  loading: PageLoading
});
const Contact = Loadable({
  loader: () => import(/* webpackChunkName: "contact" */'./containers/contact'),
  loading: PageLoading
});
const Gallery = Loadable({
  loader: () => import(/* webpackChunkName: "gallery" */'./containers/gallery'),
  loading: PageLoading
});
const WorkPage = Loadable({
  loader: () => import(/* webpackChunkName: "work" */'./containers/work'),
  loading: PageLoading
})
const Management = Loadable({
  loader: () => import(/* webpackChunkName: "management" */'./containers/management'),
  loading: PageLoading
});

class App extends React.Component {
  public render() {
    return [
      <Nav key="nav"/>,
      <div className="global__body" key="body">
      <Switch>
        <Redirect exact path='/' to='/home' />
        <Route exact path='/home' component={Home} />
        <Route path='/discography' component={Discography} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/works' component={WorkPage} />
        <Route exact path='/management' component={Management} />
      </Switch>
      </div>,
      <Footer key="footer" />
    ];
  }
}

export default App;