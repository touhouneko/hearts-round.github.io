import React, { useState } from 'react';
import { render } from 'react-dom';

import useClickOutside from '@/hooks/click-outside';
import { VideoContext, VideoModalWindow } from '@/components/modal/modal-video';
import ModalWithNav from '@/components/modal/modal-nav';
import modalFactory from '@/components/modal/factory';
import videos from '@/data/videos';

interface IVideoModalProps {
  initialIdx: number;
  container: HTMLDivElement;
}
function VideoModal({ initialIdx, container}: IVideoModalProps) {
  const [idx, setIdx] = useState(initialIdx);
  const windowRef = React.useRef(null);
  useClickOutside(windowRef, modalFactory.closeModal.bind(modalFactory, container), container);
  console.log(videos, idx);
  return (
    <ModalWithNav
      prevLabel={idx > 0 ? videos[idx-1].track.title : ''}
      nextLabel={idx < videos.length - 1 ? videos[idx+1].track.title: ''}
      handleNext={() => setIdx(idx + 1)}
      handlePrev={() => setIdx(idx - 1)}
      ref={windowRef}
      className="video-modal"
    >
      <VideoContext.Provider value={{
        ...videos[idx].track,
        videoId: videos[idx].links.videoId,
        site: 'bilibili',
        linkUrl: `/discography/album/${videos[idx].albumCode}`,
        linkLabel: `『${videos[idx].albumName}』`,
        lyricsUrl: `/discography/lyrics/${videos[idx].albumCode}/${videos[idx].trackIdx + 1}}`,
        externalUrl: videos[idx].track.links.music
      }}>
        <VideoModalWindow />
      </VideoContext.Provider>
    </ModalWithNav>
  );
}

export function popupVideoModal(idx: number) {
  const container = modalFactory.createFullscreenMask();
  render(
    <VideoModal initialIdx={idx} container={container}/>
    , container);
  document.getElementsByTagName('body')[0].appendChild(container);
}