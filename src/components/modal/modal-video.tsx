import React, { useState, createContext, useContext, useRef, forwardRef } from 'react';
import { render } from 'react-dom';

import useClickOutside from '@/hooks/click-outside';
import popupAlbumModal from '@/containers/discography/album/album-modal';
import ModalWithNav from './modal-nav';
import modalFactory from './factory';
import albums from '@/data/albums';
import { VideoSiteType, IVideoInfo } from '@/data/videos';

interface IVideoModalContext extends IVideoInfo {
  site: VideoSiteType
}
const VideoContext = createContext<IVideoModalContext | null>(null);


function handleAlbumClicked(albumTitle: string, iFrameRef: React.RefObject<HTMLIFrameElement>) {
  const idx = albums.findIndex(a => a.name === albumTitle);
  if (idx < 0) {
    alert('The album can not be found');
    return;
  }
  if (iFrameRef.current === null) return;
  iFrameRef.current.src = iFrameRef.current.src;
  popupAlbumModal(idx);
}
const EmbeddedVideo = forwardRef(function({
  width,
  height
}: {
  width: number,
  height: number
}, ref: React.RefObject<HTMLIFrameElement>) {
  const { videoId, site } = useContext(VideoContext);
  const allProps: {[key: string]: any} = {
    width: width,
    height: height,
    frameBorder: 0,
    allowFullScreen: true,
    type: 'text/html',
    ref
  };
  switch(site) {
    case 'youtube':
      allProps.src = `https://www.youtube.com/embed/${videoId.youtube}`;
      break;
    case 'bilibili':
      let id = videoId.bilibili.slice(2);
      const [aid, pid] = id.split('/?p=');
      allProps.src = `https://player.bilibili.com/player.html?aid=${aid}&page=${pid}`;
      break;
  }
  return (
    <iframe {...allProps} className="v-modal__embed"/>
  );
})

function VideoModalWindow() {
  const info = useContext(VideoContext);
  const iFrameRef = useRef<HTMLIFrameElement>(null);
  return (
    <main className='video-modal__window'>
      <div className="video-modal__column--video">
        <div className="video-modal__title-container">
          <h2 className="video-modal__title">
            {info.title}
          </h2>
        </div>
        <EmbeddedVideo height={300} width={530} key={info.title} ref={iFrameRef}/>
      </div>
      <article className="video-modal__column--description">
        <section className="video-modal-description__section">
          <p className="section__text">
            <a
              className="clickable"
              onClick={handleAlbumClicked.bind(null, info.album, iFrameRef)}
            >
              『{info.album}』
            </a>
            ss
          </p>
        </section>
        <section className="video-modal-description__section">
          <p className="section__text">Original: {info.original}</p>
          <p className="section__text">Arrange: {info.arrange}</p>
          <p className="section__text">Lyric: {info.lyrics}</p>
          <p className="section__text">Illust: {info.illust}</p>
          <p className="section__text">Vocal: {info.vocal}</p>
        </section>
        <section className="video-modal-description__section video-modal-description__section--link">
          <p className="section__text">Link</p>
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

interface IVideoModalProps {
  contents: ReadonlyArray<IVideoInfo>;
  initialIdx: number;
  container: HTMLDivElement;
  site: VideoSiteType;
}
function VideoModal({ contents, initialIdx, container, site}: IVideoModalProps) {
  const [idx, setIdx] = useState(initialIdx);
  const windowRef = React.useRef(null);
  useClickOutside(windowRef, modalFactory.closeModal.bind(modalFactory, container), container);
  return (
    <ModalWithNav
      prevLabel={idx > 0 ? contents[idx-1].title : ''}
      nextLabel={idx < contents.length - 1 ? contents[idx+1].title: ''}
      handleNext={() => setIdx(idx + 1)}
      handlePrev={() => setIdx(idx - 1)}
      ref={windowRef}
      className="video-modal"
    >
      <VideoContext.Provider value={{
        ...contents[idx],
        site
      }}>
        <VideoModalWindow />
      </VideoContext.Provider>
    </ModalWithNav>
  );
}

export function popupVideoModal(
  contents: ReadonlyArray<IVideoInfo>,
  site: 'bilibili' | 'niconico' | 'youtube',
  idx: number
) {
  const container = modalFactory.createFullscreenMask();
  render(
    <VideoModal initialIdx={idx} contents={contents} site={site} container={container}/>
    , container);
  document.getElementsByTagName('body')[0].appendChild(container);
}