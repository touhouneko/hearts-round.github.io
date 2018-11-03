import React from 'react';

import { coverInfos } from '@/data/albums';
import './style.css';
interface IAlbumItemProps {
  name: string;
  cover: string;
  code: string;
}
const AlbumItem = ({ name, cover, code}: IAlbumItemProps) => (
  <li className="album__item clickable">
    <img className="item__cover" src={cover} />
    <h4 className="item__title">『{name}』</h4>
  </li>
);

const Album = () => (
  <ul className="album__list">
    {
      coverInfos.map(c => (
        <AlbumItem {...c} key={c.code}/>
      ))
    }
  </ul>
);
export default Album;