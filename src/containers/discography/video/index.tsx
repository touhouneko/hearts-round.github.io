import React from 'react';

import videoInfos, { IVideoInfo } from '@/data/videos';
import { popupVideoModal } from '@/components/modal/modal-video';
import './style.css';

const Item = ({ info, idx }: { info: IVideoInfo, idx: number }) => (
  <section className="list__video">
    <div
      className="video__cover clickable"
      onClick={popupVideoModal.bind(null, videoInfos, 'youtube' ,idx)}
    >
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
        <i className="urls__icon urls__icon--bilibili clickable" />
        <i className="urls__icon urls__icon--niconico clickable" />
        <i className="urls__icon urls__icon--youtube clickable" />
      </div>
    </article>
  </section>
);

const Video = () => (
  <div className="video__container">
  {
    videoInfos.map((v, idx) => (
      <Item info={v} idx={idx} key={idx}/>
    ))
  }
  </div>
);
export default Video;