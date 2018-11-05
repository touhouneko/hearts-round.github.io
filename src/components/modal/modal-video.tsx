import React, { useState, createContext, useContext } from 'react';
import { render } from 'react-dom';

import useClickOutside from '@/hooks/click-outside';
import ModalWithNav from './modal-nav';
import modalFactory from './factory';
import { VideoSiteType, IVideoInfo } from '@/data/videos';

interface IVideoModalContext extends IVideoInfo {
  site: VideoSiteType
}
const VideoContext = createContext<IVideoModalContext | null>(null);


function EmbeddedVideo ({ width, height }: { width: number, height: number }) {
  const { videoId, site } = useContext(VideoContext);
  const allProps: {[key: string]: any} = {
    width: width,
    height: height,
    frameBorder: 0,
    allowFullScreen: true
  };
  switch(site) {
    case 'youtube':
      allProps.type = 'text/html';
      allProps.src = `https://www.youtube.com/embed/${videoId[site]}`
      break;
  }
  return (
    <iframe {...allProps} className="v-modal__embed"/>
  );
}

function VideoModalWindow() {
  const info = useContext(VideoContext);
  return (
    <main className='video-modal__window'>
      <div className="video-modal__column--video">
        <div className="video-modal__title-container">
          <h2 className="video-modal__title">
            {info.title}
          </h2>
        </div>
        <EmbeddedVideo height={480} width={620} key={info.title}/>
      </div>
      <article className="video-modal__column--description">
        <section className="video-modal-description__section">
          <p className="section__text">
            <a href="/#">
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
            <a href={`https://www.bilibili.com/video/${info.videoId.bilibili}`}>Bilibili</a>
          </p>
          <p className="section__text">
            <a href={`https://www.nicovideo.jp/watch/${info.videoId.niconico}`}>Niconico</a>
          </p>
          <p className="section__text">
            <a href={`https://www.youtube.com/watch?v=${info.videoId.youtube}`}>Youtube</a>
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
function VideoModal(props: IVideoModalProps) {
  const [idx, setIdx] = useState(props.initialIdx);
  const windowRef = React.useRef(null);
  useClickOutside(windowRef, modalFactory.closeModal.bind(modalFactory, props.container));
  return (
    <ModalWithNav
      prevLabel={idx > 0 ? '上一条' : ''}
      nextLabel={idx < props.contents.length - 1 ? '下一条': ''}
      handleNext={() => setIdx(idx + 1)}
      handlePrev={() => setIdx(idx - 1)}
      ref={windowRef}
      className="video-modal"
    >
      <VideoContext.Provider value={{
        ...props.contents[idx],
        site: props.site
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