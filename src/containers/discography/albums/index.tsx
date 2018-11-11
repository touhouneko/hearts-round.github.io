import React from 'react';

// import popupModal from './album-modal';
import albums from '@/data/albums';
import './style.css';

interface IAlbumItemProps {
  name: string;
  cover: string;
  code: string;
  idx: number;
}
/**
 * @param name name of the album
 * @param cover image url address of the cover
 * @param code product code of the album (HATO001 for example)
 */
const AlbumItem = ({ name, cover, code, idx }: IAlbumItemProps) => (
  <li className={`album__item album__item--${idx%3} clickable`}>
    <a className="album__link" href={`/discography/album/${code}`} target="_blank">
      <img className="item__cover" src={cover} />
      <h4 className="item__title">『{name}』</h4>
    </a>
  </li>
);

const Album = () => (
  <ul className="album__list">
    {
      albums.map((a, idx) => (
        <AlbumItem
          name={a.name}
          cover={a.cover}
          code={a.code}
          key={a.code}
          idx={idx}
        />
      ))
    }
  </ul>
);
export default Album;