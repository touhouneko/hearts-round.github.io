import React from 'react';

import videoInfos from '@/data/videos';
import { IVideo } from '@/models/video';
import { popupVideoModal } from '@/components/modal/modal-video';
import './style.css';

/**
 * @param info the info of the video
 * @param idx the video's index
 */
const Item = ({ info, idx }: { info: IVideo, idx: number }) => (
  <section className="list__video">
    <div
      className="video__cover clickable"
      onClick={popupVideoModal.bind(null, videoInfos, 'bilibili' ,idx)}
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
      『{info.albumName}』
      </p>
      <p className="indent info__others">
        Original: {info.author.original}
      </p>
      <p className="indent info__others">
        Arrange: {info.author.arrange}
      </p>
      <p className="indent info__others">
        Lyric: {info.author.lyrics}
      </p>
      <p className="indent info__others">
        Illust: {info.author.illustrator}
      </p>
      <p className="indent info__others">
        Vocal: {info.author.vocal}
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