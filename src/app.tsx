import React, { useRef, useEffect } from 'react';
import { Switch, Route, Redirect, withRouter, RouteProps } from 'react-router-dom';
import Loadable from 'react-loadable';
import 'normalize.css';

import useResize from '@/hooks/resize';
import Nav from './containers/top-nav';
import PageLoading from './containers/page-loading';
import Footer from './containers/footer';
import NotFound from './containers/404';
import './site.css';

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home" */'./containers/home'),
  loading: PageLoading
});
const Discography = Loadable({
  loader: () => import(/* webpackChunkName: "discography" */'./containers/discography'),
  loading: PageLoading
});
const LyricsPage = Loadable({
  loader: () => import(/* webpackChunkName: "lyrics" */'./containers/discography/lyrics'),
  loading: PageLoading
})
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
const About = Loadable({
  loader: () => import(/* webpackChunkName: "about" */'./containers/about'),
  loading: PageLoading
});
const Album = Loadable({
  loader: () => import(/* webpackChunkName: "albumInfo" */'./containers/discography/album'),
  loading: PageLoading
})
// const Management = Loadable({
//   loader: () => import(/* webpackChunkName: "management" */'./containers/management'),
//   loading: PageLoading
// });


function App({ location }: RouteProps) {
  const navWrapperRef = useRef<HTMLHeadingElement>(null);
  const html = document.getElementsByTagName('html')[0];
  // whether the global__body shall be full-width
  const fullWidthFlag = location.pathname.slice(0, 6) === '/about' ||
  location.pathname === '/' || location.pathname.slice(0, 5) === '/home';
  function resizeListener() {
    if (navWrapperRef.current === null) return;
    let width = navWrapperRef.current.clientWidth;
    html.style.minWidth = `${width}px`;
  }
  useResize(resizeListener);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname])

  return (
    <React.Fragment>
      <Nav key="nav" ref={navWrapperRef}/>
      <div className={`global__body ${fullWidthFlag ? 'full-width' : ''}`} key="body">
        <Switch>
          <Redirect exact path='/' to='/home' />
          <Route exact path='/home' component={Home} />
          <Route exact path='/discography/lyrics/:albumCode/:trackId' component={LyricsPage} />
          <Route exact path='/discography/album/:code' component={Album} />
          <Route path='/discography' component={Discography} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/gallery' component={Gallery} />
          <Route exact path='/works' component={WorkPage} />
          {/* <Route exact path='/management' component={Management} /> */}
          <Route exact path='/about' component={About} />
          <Route exact path='/about/:staff' component={About} />
          <Route exact path='/404' component={NotFound} />
          <Redirect to='/404' />
        </Switch>
      </div>
      <Footer key="footer" />
    </React.Fragment>
  );
}

export default withRouter(App);