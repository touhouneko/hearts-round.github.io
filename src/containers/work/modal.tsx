import React, { useState } from 'react';
import { render } from 'react-dom';

import useClickOutside from '@/hooks/click-outside';
import { VideoContext, VideoModalWindow } from '@/components/modal/modal-video';
import ModalWithNav from '@/components/modal/modal-nav';
import modalFactory from '@/components/modal/factory';
import works from '@/data/work';
import { IWork } from '@/models/work';

const worksWithVideo: ReadonlyArray<IWork> = works.filter(w => w.cover !== '');

interface IWorkModal {
  initialIdx: number;
  container: HTMLDivElement;
}
function WorkModal({ initialIdx, container}: IWorkModal) {
  const [idx, setIdx] = useState(initialIdx);
  const windowRef = React.useRef(null);
  useClickOutside(windowRef, modalFactory.closeModal.bind(modalFactory, container), container);
  return (
    <ModalWithNav
      prevLabel={idx > 0 ? worksWithVideo[idx-1].title : ''}
      nextLabel={idx < worksWithVideo.length - 1 ? worksWithVideo[idx+1].title: ''}
      handleNext={() => setIdx(idx + 1)}
      handlePrev={() => setIdx(idx - 1)}
      ref={windowRef}
      className="video-modal"
    >
      <VideoContext.Provider value={{
        ...worksWithVideo[idx],
        site: 'bilibili',
        videoId: worksWithVideo[idx].links.videoId,
        linkUrl: worksWithVideo[idx].principle.link,
        linkLabel: worksWithVideo[idx].principle.name,
        lyricsUrl: worksWithVideo[idx].hasLyrics ?
          `/discography/lyrics/works/${('00' + (idx + 1)).slice(-3)}`:
          '',
        externalUrl: worksWithVideo[idx].links.music
      }}>
        <VideoModalWindow />
      </VideoContext.Provider>
    </ModalWithNav>
  );
}

export function popupWorkModal(idx: number) {
  const container = modalFactory.createFullscreenMask();
  render(
    <WorkModal initialIdx={idx} container={container}/>
    , container);
  document.getElementsByTagName('body')[0].appendChild(container);
}