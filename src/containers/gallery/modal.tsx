import React, { useState, createContext, useRef } from 'react';
import { render } from 'react-dom';

import illustrations from '@/data/gallery';
import modalFactory from '@/components/modal/factory';
import ModalWithNav from '@/components/modal/modal-nav';
import useClickOutside from '@/hooks/click-outside';
import './modal-style.css';

// interface IGalleryModalContext {
//   infos: ReadonlyArray<IIllustration>;
// }
// const GalleryModalContext = createContext<IGalleryModalContext>(null);



function GalleryModalWindow({
  initialIdx,
  container
}: {
  initialIdx: number,
  container: HTMLDivElement
}) {
  const [idx, setIdx] = useState(initialIdx);
  const windowRef = useRef<HTMLDivElement>(null);
  const illustration = illustrations[idx];
  useClickOutside(windowRef, modalFactory.closeModal.bind(modalFactory, container), container);
  return (
    <ModalWithNav
      prevLabel={idx > 0 ? 'Previous' : ''}
      nextLabel={idx < illustrations.length - 1 ? 'Next': ''}
      handleNext={() => setIdx(idx + 1)}
      handlePrev={() => setIdx(idx - 1)}
      ref={windowRef}
    >
      <main className="gallery__modal">
        <img
          src={illustration.url.origin}
          className="modal__image modal__image--gallery"
        />
        <article className="modal__description modal__description--gallery">
          <section className="description__section with-v-bar">
            <p className="section__text">
              {illustration.author.name}
            </p>
          </section>
          <section className="description__section description__section--link with-v-bar">
            <p className="section__text section__text--gap">
              Link
            </p>
            <p className="section__text">
              <a href={illustration.url.origin} target="_blank">
                下载原图
              </a>
            </p>
            <p className="section__text">
              <a href={illustration.author.page} target="_blank">
                画师主页
              </a>
            </p>
          </section>
        </article>
      </main>
    </ModalWithNav>
  )
}

export default function popupGalleryModal(idx: number) {
  const container = modalFactory.createFullscreenMask();
  render(
    <GalleryModalWindow initialIdx={idx} container={container}/>
    , container);
  document.getElementsByTagName('body')[0].appendChild(container);
}
