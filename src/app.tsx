import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'normalize.css';

import Nav from './containers/top-nav';
import Home from './containers/home';
import Discography from './containers/discography';
import Footer from './containers/footer';
import './site.css';


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