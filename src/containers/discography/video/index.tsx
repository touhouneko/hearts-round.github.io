import React from 'react';

import videoInfos from '@/data/videos';
import { IVideo } from '@/models/video';
import { popupVideoModal } from './modal';
import './style.css';

function getFullUrl(type: string, link: string) {
  switch(type) {
    case 'bilibili':
      return `https://www.bilibili.com/video/${link}`;
    case 'niconico':
      return `https://www.nicovideo.jp/watch/${link}`;
    case 'youtube':
      return `https://www.youtube.com/watch?v=${link}`;
  }
}

const VideoLink = ({ type, link }: { type: string, link: string}) => (
  link && <a
    href={getFullUrl(type, link)}
    target="_blank"
    className={`urls__icon urls__icon--${type} clickable`}
  >
    <i className="icon"/>
  </a>
);
const AuthorField = ({ field, value }: { field: string, value: string}) => (
  value === undefined || value === '' ?
  null :
  <p className="indent info__others">
    {field}: {value}
  </p>
);
/**
 * @param info the info of the video
 * @param idx the video's index
 */
const Item = ({ info, idx }: { info: IVideo, idx: number }) => (
  <section className="list__video">
    <div
      className="video__cover clickable"
      onClick={popupVideoModal.bind(null, idx)}
    >
      <img src={info.cover} />
      <div className="video__button--outer">
        <i className="video__button--inner" />
      </div>
    </div>
    <article className="video__info">
      <header className="info__header">
        <h1 className="info__title">
          {info.track.title}
        </h1>
        <h4 className="indent info__album">
        『{info.albumName}』
        </h4>
      </header>
      <section className="info__author">
        <AuthorField field="Original" value={info.track.author.original} />
        <AuthorField field="Compose" value={info.track.author.composer} />
        <AuthorField field="Arrange" value={info.track.author.arrange} />
        <AuthorField field="Lyric" value={info.track.author.lyrics} />
        <AuthorField field="Vocal" value={info.track.author.vocal} />
        <AuthorField field="PV" value={info.track.author.pv} />
      </section>
      <div className="indent info__urls">
        <VideoLink type="bilibili" link={info.links.videoId!.bilibili} />
        <VideoLink type="niconico" link={info.links.videoId!.niconico} />
        <VideoLink type="youtube" link={info.links.videoId!.youtube} />
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
