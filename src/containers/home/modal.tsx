import { observer } from 'mobx-react';
import * as React from 'react';

import ModalWithNav from '@/components/modal/modal-nav';
import { INews } from '@/models/news';
import './modal-style.css';

export interface IModalStore {
  theNews: INews;
  prevLabel: string;
  nextLabel: string;

  handleNext: () => any;
  handlePrev: () => any;
  handleClose: () => any;
}

const NewsModal = observer(({ store }: { store: IModalStore }) => (
  <ModalWithNav
    prevLabel={store.prevLabel}
    nextLabel={store.nextLabel}
    handleNext={store.handleNext}
    handlePrev={store.handlePrev}
    handleClose={store.handleClose}
    className="news-modal"
  >
    <article className="news-modal__container">
      <h1 className="news-modal__date">
        <time>{store.theNews.date}</time>
      </h1>
      <p className="news-modal__content">
        {store.theNews.title.chs}
      </p>
    </article>
  </ModalWithNav>
));

export default NewsModal;