import React from 'react';

import './style.css';

const Footer = () => (
  <footer className="global__footer">
    <section className="footer__section footer__section--social">
      <a
        href="https://twitter.com"
        target="_blank"
        className="social__logo-wrapper social__logo-wrapper--twitter clickable"
      >
        <i className="social__logo social__logo--twitter"/>
      </a>
      <a
        href="https://weibo.com/u/6411746236"
        target="_blank"
        className="social__logo-wrapper social__logo-wrapper--weibo clickable"
      >
        <i className="social__logo social__logo--weibo"/>
      </a>
    </section>
    <section className="footer__section footer__section--site-name">
      <p className="section__paragraph">
        - All Rounds of Hearts -
      </p>
    </section>
    <section className="footer__section footer__section--copyright">
      <p className="section__paragraph">
        &copy; 2018 HeartsRounds All Rights Reserved.
      </p>
    </section>
  </footer>
);

export default Footer;