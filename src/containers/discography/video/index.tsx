import React from 'react';

import './style.css';

const Item = () => (
  <section className="list__video">
    <div
      className="video__cover clickable"
      // style={{backgroundImage: 'url("@/images/test.jpg")'}}
    >
      <div className="video__button--outer">
        <i className="video__button--inner" />
      </div>
    </div>
    <article className="video__info">
      <h1 className="info__title">
        Title
      </h1>
      <p className="indent info__album">
        album
      </p>
      <p className="indent info__others">
        Original:
      </p>
      <p className="indent info__others">
        Arrange:
      </p>
      <p className="indent info__others">
        Lyric:
      </p>
      <p className="indent info__others">
        Illust:
      </p>
      <p className="indent info__others">
        Vocal:
      </p>
      <div className="indent info__urls">
        <i className="urls__icon urls__icon--bilibili" />
        <i className="urls__icon urls__icon--niconico" />
        <i className="urls__icon urls__icon--youtube" />
      </div>
    </article>
  </section>
);

const Video = () => (
  <div className="video__container">
    <Item />
  </div>
);
export default Video;