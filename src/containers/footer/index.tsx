import * as React from 'react';

import './style.css';

const Footer = () => (
  <footer className="global__footer">
    <section className="footer__section footer__section--social">
      <div className="social__logo-wrapper social__logo-wrapper--twitter">
        <i className="social__logo social__logo--twitter"/>
      </div>
      <div className="social__logo-wrapper social__logo-wrapper--weibo">
        <i className="social__logo social__logo--weibo"/>
      </div>
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