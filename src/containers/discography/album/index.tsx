import React from 'react';

import popupModal from './album-modal';
import albums from '@/data/albums';
import './style.css';

interface IAlbumItemProps {
  name: string;
  cover: string;
  idx: number;
}
/**
 * @param name name of the album
 * @param cover image url address of the cover
 * @param code product code of the album (HATO001 for example)
 */
const AlbumItem = ({ name, cover, idx }: IAlbumItemProps) => (
  <li
    onClick={popupModal.bind(null, idx)}
    className={`album__item album__item--${idx%3} clickable`}
  >
    <img className="item__cover" src={cover} />
    <h4 className="item__title">『{name}』</h4>
  </li>
);

const Album = () => (
  <ul className="album__list">
    {
      albums.map((a, idx) => (
        <AlbumItem
          name={a.name}
          cover={a.cover}
          key={a.code}
          idx={idx}
        />
      ))
    }
  </ul>
);
export default Album;