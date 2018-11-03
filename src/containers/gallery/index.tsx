import React from 'react';

import illustrations, { IIllustration } from '@/data/gallery';
import './style.css';

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