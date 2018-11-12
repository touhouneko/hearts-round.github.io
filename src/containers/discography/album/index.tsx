import React from 'react';
import { RouteComponentProps, Redirect } from 'react-router';

import { ITrack } from '@/models/track';
import albums from '@/data/albums';
import popupPurchaseModal from './purchase-modal';
import './style.css';

const TrackInfo = ({ code, info, idx }: { code: string, info: ITrack, idx: number }) => (
  <li className="track-info__item">
    <p className="track-info__row track-info__row--idx">
      {('0' + (idx + 1)).slice(-2)}
    </p>
    <p className="track-info__row track-info__row--title">
      {info.title}
    </p>
    <p className="track-info__row track-info__row--links">
      <a
        className={`
          track-info__link
          ${info.hasLyrics? 'track-info__link--lyrics': 'track-info__link--lyrics--disabled'}
        `}
        href={
          info.hasLyrics ?
          `/discography/lyrics/${code}/${('0' + (idx + 1)).slice(-2)}`:
          undefined
        }
        target="_blank"
      />
      <a
        className={`
          track-info__link
          ${info.links.music===''? 'track-info__link--music--disabled': 'track-info__link--music'}
        `}
        href={info.links.music===''? undefined: info.links.music}
        target="_blank"
      />
    </p>
    <p className="track-info__row track-info__row--vocal">
      {info.author.vocal}
    </p>
    <p className="track-info__row track-info__row--length">
      {info.length}
    </p>
  </li>
);

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

interface IMatchProps {
  code: string;
}
export default function Album(props: RouteComponentProps<IMatchProps>) {
  const [theAlbum] = albums.filter(a => a.code.toLowerCase() === props.match.params.code.toLowerCase());
  if (theAlbum === undefined) return (<Redirect to="/404" />)
  return (
    <main className="album__container">
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
        {
          theAlbum.tracks.map((t, idx) => (
            <TrackInfo code={theAlbum.code} info={t} idx={idx} />
          ))
        }
        </ul>
      </section>
    </main>
  )
}