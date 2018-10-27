import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as Loadable from "react-loadable";
import 'normalize.css';

import Nav from './containers/top-nav';
import Footer from './containers/footer';
import './site.css';

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home" */'./containers/home'),
  loading: () => (<div>loading</div>),
});
const Discography = Loadable({
  loader: () => import(/* webpackChunkName: "discography" */'./containers/discography'),
  loading: () => (<div>loading</div>),
})

export default class App extends React.Component {
  public render() {
    return [
      <Nav key="nav"/>,
      <Switch key="body">
        <Route exact path='/' component={Home} />
        <Route exact path='/discography' component={Discography} />
      </Switch>,
      <Footer key="footer" />
    ]
  }
}