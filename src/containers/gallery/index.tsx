import React from 'react';

import illustrations, { IIllustration } from '@/data/gallery';
import './style.css';

/**
 * @param info the information of the illustration
 * @param idx the illustration's numbered index
 */
const Item = ({ info, idx }: { info: IIllustration, idx: number }) => (
  <img
    className="illustration__item clickable"
    src={info.url.cover}
  />
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