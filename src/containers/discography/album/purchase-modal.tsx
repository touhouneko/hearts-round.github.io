import React, { useRef } from 'react';
import { render } from 'react-dom';

import useClickOutside from '@/hooks/click-outside';
import modalFactory from '@/components/modal/factory';
import { IPurchaseLink } from '@/models/album';
import '@/components/modal/style.css';
import './modal-style.css';

function PurchaseModal ({
  links,
  container 
}: {
  links: IPurchaseLink,
  container: HTMLDivElement
}) {
  const windowRef = useRef<HTMLUListElement>(null);
  useClickOutside(windowRef, modalFactory.closeModal.bind(modalFactory, container));
  return (
    <ul
      ref={windowRef}
      className="lt-modal__window lt-modal__window--center purchase-modal__container"
    >
      <li className="purchase-modal__item">
        <a href={links.taobao} className="purchase-modal__link" target="_blank">
          <i className="purchase-modal__icon purchase-modal__icon--taobao" />
          <p className="purchase-modal__region">中国大陆</p>
        </a>
      </li>
      <li className="purchase-modal__item">
        <a href={links.tora} className="purchase-modal__link" target="_blank">
          <i className="purchase-modal__icon purchase-modal__icon--tora" />
          <p className="purchase-modal__region">日本</p>
        </a>
      </li>
    </ul>
  );
}

export default function popupPurchaseModal(links: IPurchaseLink) {
  const container = modalFactory.createFullscreenMask();
  render(
    <PurchaseModal links={links} container={container} />
    , container);
  document.getElementsByTagName('body')[0].appendChild(container);
}