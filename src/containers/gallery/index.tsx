import React from 'react';

import illustrations, { IIllustration } from '@/data/gallery';
import popupModal from './modal';
import './style.css';

/**
 * @param info the information of the illustration
 * @param idx the illustration's numbered index
 */
const Item = ({ info, idx }: { info: IIllustration, idx: number }) => (
  <li
    onClick={popupModal.bind(null, idx)}
    className={`illustration__item illustration__item--${idx%3} clickable`}
  >
    <img src={info.url.cover} className="illustration__image"/>
  </li>
);

const Gallery = () => (
  <ul className="illustration__list">
    {
      illustrations.map((i, idx) => (
        <Item info={i} idx={idx} key={idx} />
      ))
    }
  </ul>
);

export default Gallery;