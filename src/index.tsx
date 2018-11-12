import 'babel-polyfill';
import 'html5shiv/dist/html5shiv.min.js'
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import App from './app';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

let module: {
  hot: any
};
if (module !== undefined && module.hot) {
  module.hot.accept()
}