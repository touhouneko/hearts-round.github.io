import React, { useState, createContext, useContext, useRef, forwardRef } from 'react';

import PageLoading from '@/containers/page-loading';
import { VideoSiteType } from '@/models/video';
import { IHasAuthor } from '@/models/author';
import { IVideoId } from '@/models/external-links';

export interface IVideoModal extends IHasAuthor {
  title: string;
  videoId: IVideoId;
}

export interface IVideoModalContext extends IVideoModal {
  site: VideoSiteType;
  linkLabel: string;
  linkUrl: string;
  lyricsUrl: string;
  externalUrl: string;
}
export const VideoContext = createContext<IVideoModalContext | null>(null);

export const EmbeddedVideo = forwardRef(function({
  width,
  height
}: {
  width: number,
  height: number
}, ref: React.RefObject<HTMLIFrameElement>) {
  const { videoId, site } = useContext(VideoContext);
  const [ loadingFlag, setLoadingFlag ] = useState(true);
  const allProps: {[key: string]: any} = {
    width: width,
    height: height,
    frameBorder: 0,
    allowFullScreen: true,
    type: 'text/html'
  };
  switch(site) {
    case 'youtube':
      allProps.src = `https://www.youtube.com/embed/${videoId.youtube}`;
      break;
    case 'bilibili':
      let id = videoId.bilibili.slice(2);
      const [aid, pid =  '1'] = id.split('/?p=');
      allProps.src = `https://player.bilibili.com/player.html?aid=${aid}&page=${pid}`;
      break;
  }
  return (
    <React.Fragment>
      <iframe
        {...allProps}
        ref={ref}
        onLoad={setLoadingFlag.bind(null, false)}
        className={`v-modal__embed ${loadingFlag ? 'hide' : ''}`}
      />
      {
        loadingFlag ?
        (
          <div style={{height, width}}>
            <PageLoading />
          </div>
        ):
        null
      }
    </React.Fragment>
  );
})

const AuthorField = ({ field, value }: { field: string, value: string}) => (
  value === undefined || value === '' ?
  null :
  (
    <p className="section__text">
      {field}: {value}
    </p>
  )
);

export function VideoModalWindow() {
  const info = useContext(VideoContext);
  const iFrameRef = useRef<HTMLIFrameElement>(null);
  return (
    <main className='video-modal__window'>
      <div className="video-modal__column--video">
        <div className="video-modal__title-container">
          <h2 className="video-modal__title modal__title">
            {info.title}
          </h2>
        </div>
        <EmbeddedVideo height={300} width={530} key={info.title} ref={iFrameRef}/>
      </div>
      <article className="video-modal__column--description">
        <section className="video-modal-description__section with-v-bar">
          <p className="section__text">
            <a href={info.linkUrl} target="_blank">
              {info.linkLabel}
            </a>
          </p>
        </section>
        <section className="video-modal-description__section with-v-bar">
          <AuthorField field="Original" value={info.author.original} />
          <AuthorField field="Compose" value={info.author.composer} />
          <AuthorField field="Arrange" value={info.author.arrange} />
          <AuthorField field="Lyric" value={info.author.lyrics} />
          <AuthorField field="Vocal" value={info.author.vocal} />
          <AuthorField field="PV" value={info.author.pv} />
        </section>
        <section className="video-modal-description__section description__section--link with-v-bar">
          <p className="section__text section__text--gap">Link</p>
          <p className="section__text">
            <a
              target="_blank"
              href={`https://www.bilibili.com/video/${info.videoId.bilibili}`}
            >
              Bilibili
            </a>
          </p>
          <p className="section__text">
            <a
              target="_blank"
              href={`https://www.nicovideo.jp/watch/${info.videoId.niconico}`}
            >
              Niconico
            </a>
          </p>
          <p className="section__text">
            <a
              target="_blank"
              href={`https://www.youtube.com/watch?v=${info.videoId.youtube}`}
            >
              Youtube
            </a>
          </p>
        </section>
      </article>
    </main>
  );
}
