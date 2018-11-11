import React, { useState } from 'react';
import { render } from 'react-dom';

import useClickOutside from '@/hooks/click-outside';
import ModalWithNav from '@/components/modal/modal-nav';
import modalFactory from '@/components/modal/factory';
import albums from '@/data/albums';
import popupPurchaseModal from '../album/purchase-modal';
import './modal-style.css';

const AuthorField = ({ field, value }: { field: string, value: string}) => (
  value === undefined || value === '' ?
  null :
  (
    <li className="album-info__author-item">
      <p className="album-info__author album-info__author--field">
        <span className="underlined">{field}</span>
      </p>
      <p className="album-info__author album-info__author--value">
        {value}
      </p>
    </li>
  )
)

interface IAlbumModalProps {
  initialIdx: number;
  container: HTMLDivElement;
}
function AlbumModalWindow({ initialIdx, container }: IAlbumModalProps) {
  const [idx, setIdx] = useState(initialIdx);
  const windowRef = React.useRef(null);
  useClickOutside(windowRef, modalFactory.closeModal.bind(modalFactory, container), container);
  const theAlbum = albums[idx];
  return (
    <ModalWithNav
      prevLabel={idx > 0 ? albums[idx-1].name : ''}
      nextLabel={idx < albums.length - 1 ? albums[idx+1].name: ''}
      handleNext={() => setIdx(idx + 1)}
      handlePrev={() => setIdx(idx - 1)}
      ref={windowRef}
      className="album-modal"
    >
      <main className="album-modal__window">
        <section className="album-info__container">
          <div className="album-info__column--left">
            <img src={theAlbum.cover} className="album-info__cover" />
            <p className="album-info__code">
              {theAlbum.code} &copy;Hearts Rounds 2017 All Rights Reserved.
            </p>
          </div>
          <article className="album-info__column--right">
            <header className="album-info__header">
              <div className="album-info__title-wrapper">
                <h2 className="album-info__title">
                  『{theAlbum.name}』
                </h2>
                <time className="album-info__time">
                  {theAlbum.date}
                </time>
              </div>
              <i
                onClick={popupPurchaseModal.bind(null, theAlbum.purchaseLink)}
                className="album-info__buy clickable"
              />
            </header>
            <ul className="album-info__author-list">
              <AuthorField field='Original' value={theAlbum.author.original} />
              <AuthorField field='Compose & Arrange' value={theAlbum.author.merge('composer', 'arrange')} />
              <AuthorField field='Lyrics' value={theAlbum.author.lyrics} />
              <AuthorField field='Vocal' value={theAlbum.author.vocal} />
              <AuthorField field='Illustration' value={theAlbum.author.illustrator} />
              <AuthorField field='Special Thanks' value={theAlbum.thanks} />
            </ul>
          </article>
        </section>
        <section className="track-info__container">
          <ul className="track-info__list">

          </ul>
        </section>
      </main>
    </ModalWithNav>
  );
}

export default function popupAlbumModal(idx: number) {
  const container = modalFactory.createFullscreenMask();
  render(
    <AlbumModalWindow initialIdx={idx} container={container}/>
    , container);
  document.getElementsByTagName('body')[0].appendChild(container);
}