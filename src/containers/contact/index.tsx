import React from 'react';

import SiteLogo from '@/assets/images/logo_cyan.svg';

import './style.css';

const Contact = () => (
  <main className="contact__container">
    <article className="contact__article">
      <h1 className="article__header">
        <span className="header__rect header__rect--0" />
        <span className="header__rect header__rect--1" />
        <span className="header__rect header__rect--2" />
      </h1>
      <section className="article__section">
        <p className="section__paragraph">
          承接各类音乐制作，包括原创歌曲、音乐游戏歌曲、游戏/动画配乐及主题曲等。
        </p>
        <p className="section__paragraph">
          如果有想查询的事项、同人或者商业企划、制作委托等，欢迎与我们联络。
        </p>
      </section>

      <aside className="article__footer">
        <p className="footer__line footer__line--email">
          heartsrounds@outlook.com
        </p>
        <p className="footer__line footer__line--note">
          ※ 接受中文、英语、日语
        </p>
      </aside>
    </article>
    <div className="logo__container">
      <img src={SiteLogo} className="logo"/>
    </div>
  </main>
);
export default Contact;
