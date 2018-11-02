import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import ModalWithNav from '@/components/modal/modal-nav';
import modalFactory from '@/components/modal/factory';
import useClickOutside from '@/hooks/click-outside';
import { INews } from '@/models/news';
import './modal-style.css';

function closeModal(container: HTMLDivElement) {
  unmountComponentAtNode(container);
  modalFactory.turnoffMask(container);
}

interface INewsModalProp {
  news: ReadonlyArray<INews>;
  initIdx: number;
  container: HTMLDivElement;
}

function NewsModal({ news, initIdx, container }: INewsModalProp) {
  const [idx, setIdx] = React.useState(initIdx);
  const windowRef = React.useRef(null);
  useClickOutside(windowRef, closeModal.bind(null, container));

  return (
    <ModalWithNav
      prevLabel={idx > 0 ? '上一条' : ''}
      nextLabel={idx < news.length - 1 ? '下一条': ''}
      handleNext={() => setIdx(idx + 1)}
      handlePrev={() => setIdx(idx - 1)}
      ref={windowRef}
      className="news-modal"
    >
      <article className="news-modal__container">
        <h1 className="news-modal__date">
          <time>{news[idx].date}</time>
        </h1>
        <p className="news-modal__content">
          {news[idx].title.chs}
        </p>
      </article>
    </ModalWithNav>
  );
}

export function popupModal(news: ReadonlyArray<INews>, initIdx: number): void {
  const container = modalFactory.createFullscreenMask();
  render(
    <NewsModal
      container={container}
      news={news}
      initIdx={initIdx}
    />, container);
  document.getElementsByTagName('body')[0].appendChild(container);
}