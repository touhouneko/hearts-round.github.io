import React, { useState, createContext, useContext, useRef, forwardRef } from 'react';
import { render } from 'react-dom';

import useClickOutside from '@/hooks/click-outside';
import popupAlbumModal from '@/containers/discography/album/album-modal';
import PageLoading from '@/containers/page-loading';
import ModalWithNav from './modal-nav';
import modalFactory from './factory';
import albums from '@/data/albums';
import { VideoSiteType, IVideo } from '@/models/video';

interface IVideoModalContext extends IVideo {
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

function VideoModalWindow() {
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
            <a
              className="clickable"
              onClick={handleAlbumClicked.bind(null, info.albumName, iFrameRef)}
            >
              『{info.albumName}』
            </a>
            ss
          </p>
        </section>
        <section className="video-modal-description__section with-v-bar">
          <p className="section__text">Original: {info.author.original}</p>
          <p className="section__text">Arrange: {info.author.arrange}</p>
          <p className="section__text">Lyric: {info.author.lyrics}</p>
          <p className="section__text">Illust: {info.author.illustrator}</p>
          <p className="section__text">Vocal: {info.author.vocal}</p>
          <p className="section__text">Pv: {info.author.pv}</p>
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

interface IVideoModalProps {
  contents: ReadonlyArray<IVideo>;
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
  contents: ReadonlyArray<IVideo>,
  site: 'bilibili' | 'niconico' | 'youtube',
  idx: number
) {
  const container = modalFactory.createFullscreenMask();
  render(
    <VideoModal initialIdx={idx} contents={contents} site={site} container={container}/>
    , container);
  document.getElementsByTagName('body')[0].appendChild(container);
}