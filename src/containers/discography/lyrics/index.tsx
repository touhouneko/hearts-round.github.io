import React, { useState, useEffect } from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom';

import { IHasExternalLinks } from '@/models/external-links';
import { IHasAuthor } from '@/models/author';
import albums from '@/data/albums';
import works from '@/data/works';
import loadLyrics from '@/apis/lyrics-loader';
import './style.css';

export interface ILyrics {
  left: string;
  right: string;
}

interface ITrackInfoProps extends IHasAuthor, IHasExternalLinks {
  title: string;
}
function TrackInfo ({ info }: { info: ITrackInfoProps }) {
  if (info === null) return (<article />)
  return (
    <article className="track-info__container">
      <header className="track-info__header">
        <h2 className="track-info__title page__title">
          {info.title}
        </h2>
        <div className="track-info__links">
        {
          info.links.music !== undefined &&
          (
            <a
              href={info.links.music}
              target="_blank"
              className="track-info__link track-info__link--music"
            />
          )
        }
        {
          info.links.videoId !== undefined &&
          (
            <a
              href={`https://www.bilibili.com/video/${info.links.videoId.bilibili}`}
              target="_blank"
              className="track-info__link track-info__link--video"
            />
          )
        }
        {
          info.links.image !== undefined && 
          (
            <a
              className="track-info__link track-info__link--cover"
            />
          )
        }
        </div>
      </header>
      <section className="track-info__author">
        <p className="author__field">
          Original: {info.author.original}
        </p>
        <p className="author__field">
          Arrange: {info.author.arrange}
        </p>
        <p className="author__field">
          Lyric: {info.author.lyrics}
        </p>
        <p className="author__field">
          Vocal: {info.author.vocal}
        </p>
      </section>
    </article>
  );
}
interface ILyricsSectionProps {
  lyrics: ReadonlyArray<ILyrics>;
}
const LyricsSection = ({ lyrics }: ILyricsSectionProps) => (
  <article className="lyrics__body" id="content">
  {
    ['left', 'right'].map(side => (
      <ul className={`lyrics__list lyrics__list--${side}`} key={side}>
      {
        lyrics.map(l => l[side as 'left' | 'right']).map((l, idx) => (
          <p className="lyrics__line" key={idx}>
            {l}
          </p>
        ))
      }
      </ul>
    ))
  }
  </article>
);

// return [albumIdx, trackIdx]
// trackIdx (number) start from 0
// trackId (string) start from 1
function parsePath({ albumCode = '', trackId = '' }: IMatchProps): [number, number] {
  const albumIdx = albums.findIndex(a => a.code.toLowerCase() === albumCode.toLowerCase());
  const trackIdx = parseInt(trackId, 10) - 1;
  return [albumIdx, trackIdx];
}

// if the path is not valid, the user will be redirected to 404 page
// trackIdx (number) start from 0
// trackId (string) start from 1
function isPathValid({ albumCode = '', trackId = '' }: IMatchProps): boolean {
  if (albumCode === 'works') {
    const trackIdx = parseInt(trackId, 10);
    return works[trackIdx - 1].hasLyrics === true;
  }
  // albumCode must be all in lowercase
  if (albumCode.toLowerCase() !== albumCode)
    return false;
  const albumIdx = albums.findIndex(a => a.code.toLowerCase() === albumCode);
  // can album be found based on the code ?
  if (albumIdx < 0)
    return false;
  // trackId must be two digit
  if (trackId.length !== 2)
    return false;
  // is trackId a integer?
  if (trackId === '' || isNaN(trackId as any)) return false;
  const trackIdx = parseFloat(trackId) - 1;
  if (trackIdx !== Math.floor(trackIdx)) return false;
  // does the track exists?
  else if (albums[albumIdx].tracks[trackIdx] === undefined) return false;
  // does the track has lyrics?
  return albums[albumIdx].tracks[trackIdx].hasLyrics === true;
}

interface IMatchProps {
  albumCode: string;
  trackId: string;
}
export default function LyricsPage(props: RouteComponentProps<IMatchProps>) {
  const [lyrics, setLyrics] = useState<ReadonlyArray<ILyrics>>([]);
  const [trackInfo, setTrackInfo] = useState<ITrackInfoProps>(null);
  const [notFoundFlag, setNotFoundFlag] = useState(false);

  function fetchTrackInfo() {
    if (props.match.params.albumCode === 'works') {
      const trackIdx = parseInt(props.match.params.trackId) - 1;
      setTrackInfo(works[trackIdx]);
    } else {
      const [albumIdx, trackIdx] = parsePath(props.match.params);
      setTrackInfo(albums[albumIdx].tracks[trackIdx]);
    }
  }

  function fetchLyrics() {
    const [albumIdx, trackIdx] = parsePath(props.match.params);
    const code = props.match.params.albumCode === 'works' ?
      'works' :
      albums[albumIdx].code;
    loadLyrics(code, trackIdx).then(lyrics => {
      setLyrics(lyrics);
    }).catch(err => {
      console.error(err);
      setNotFoundFlag(true);
    });
  }

  useEffect(() => {
    if (!isPathValid(props.match.params)) {
      console.error('url not valid')
      setNotFoundFlag(true);
      return;
    }
    fetchTrackInfo();
    fetchLyrics();
  }, []);


  if (notFoundFlag)
    return (<Redirect to="/404" />)
  return (
    <main className="lyrics__container">
      <div className="background">
        <TrackInfo info={trackInfo}/>
        <LyricsSection lyrics={lyrics} />
      </div>
    </main>
  );
}
