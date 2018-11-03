import React from 'react';

// import videosInfo from '@/data/videos';
import videosInfos, { IRawVideo } from '@/data/videos.csv';
import './style.css';

const Item = ({ info }: { info: IRawVideo }) => (
  <section className="list__video">
    <div className="video__cover clickable">
      <img src={info.cover} />
      <div className="video__button--outer">
        <i className="video__button--inner" />
      </div>
    </div>
    <article className="video__info">
      <h1 className="info__title">
        {info.title}
      </h1>
      <p className="indent info__album">
      『{info.album}』
      </p>
      <p className="indent info__others">
        Original: {info.original}
      </p>
      <p className="indent info__others">
        Arrange: {info.arrange}
      </p>
      <p className="indent info__others">
        Lyric: {info.lyrics}
      </p>
      <p className="indent info__others">
        Illust: {info.illust}
      </p>
      <p className="indent info__others">
        Vocal: {info.vocal}
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
  {
    videosInfos.map((v, idx) => (
      <Item info={v} key={idx}/>
    ))
  }
  </div>
);
export default Video;