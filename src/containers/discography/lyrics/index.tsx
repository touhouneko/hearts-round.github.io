import React, { useState, useEffect } from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom';

import albums, { ITrackInfo } from '@/data/albums';
// import videos from '@/data/videos';
import PageLoading from '@/containers/page-loading';
import { getLyrics, getLyricsSync } from '@/apis/jsonp-apis';
import './style.css';

export interface ILyrics {
  left: string;
  right: string;
}

function TrackInfo ({ info }: { info: ITrackInfo }) {
  if (info === null) return (<article />)
  return (
    <article className="track-info__container">
      <header className="track-info__header">
        <h2 className="track-info__title page__title">
          {info.title}
        </h2>
        <div className="track-info__links">
          <a
            href={info.link}
            className="track-info__link track-info__link--music"
          />
          {/* <a
            className="track-info__link track-info__link--video"
          />
          <a
            className="track-info__link track-info__link--cover"
          /> */}
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
  timeoutFlag: boolean;
  reload: () => void;
}
const LyricsSection = ({ lyrics, timeoutFlag, reload }: ILyricsSectionProps) => (
  <article className="lyrics__body" id="content">
  {
    timeoutFlag ?
    (
      <div className="loading-failed">
        <h1>Loading failed</h1>
        <i className="refresh-icon clickable" onClick={reload}/>
      </div> 
    ):
    (
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
    )
  }
  </article>
);

// return [albumIdx, trackIdx]
function parsePath({ albumCode = '', trackId = '' }: IMatchProps): [number, number] {
  const albumIdx = albums.findIndex(a => a.code.toLowerCase() === albumCode.toLowerCase());
  const trackIdx = parseInt(trackId, 10);
  return [albumIdx, trackIdx];
}

// if the path is not valid, the user will be redirected to 404 page
function isPathValid({ albumCode = '', trackId = '' }: IMatchProps): boolean {
  const albumIdx = albums.findIndex(a => a.code.toLowerCase() === albumCode.toLowerCase());
  // can album be found based on the code ?
  if (albumIdx < 0)
    return false;
  // is trackId a integer?
  if (trackId === '' || isNaN(trackId as any)) return false;
  const trackIdx = parseFloat(trackId);
  if (trackIdx !== Math.floor(trackIdx)) return false;
  // does the track exists?
  else if (albums[albumIdx].tracks[trackIdx] === undefined) return false;
  // does the track has lyrics?
  return albums[albumIdx].tracks[trackIdx].hasLyrics === false;
}

interface IMatchProps {
  albumCode: string;
  trackId: string;
}
export default function LyricsPage(props: RouteComponentProps<IMatchProps>) {
  const [lyrics, setLyrics] = useState<ReadonlyArray<ILyrics>>([]);
  const [loadingFlag, setLoadingFlag] = useState(true);
  const [trackInfo, setTrackInfo] = useState<ITrackInfo>(null);
  const [notFoundFlag, setNotFoundFlag] = useState(false);
  const [timeoutFlag, setTimeoutFlag] = useState(false);

  function fetchLyrics() {
    let cachedLyrics = getLyricsSync();
    if (cachedLyrics !== null) {
      setLoadingFlag(false);
      setLyrics(cachedLyrics);
      return;
    }
    setLoadingFlag(true);
    const [albumIdx, trackIdx] = parsePath(props.match.params);
    setTrackInfo(albums[albumIdx].tracks[trackIdx]);
    getLyrics(albums[albumIdx].code, trackIdx).then(lyrics => {
      setLoadingFlag(false);
      setLyrics(lyrics);
    }).catch(err => {
      if ('status' in err && err.status === 404)
          setNotFoundFlag(true);
        else
          setTimeoutFlag(true);
      setLoadingFlag(false);
    });
  }

  useEffect(() => {
    if (!isPathValid(props.match.params)) {
      setNotFoundFlag(true);
      return;
    }
    fetchLyrics();
  }, []);


  if (notFoundFlag)
    return (<Redirect to="/404" />)
  return (
    <main className="lyrics__container">
      <TrackInfo info={trackInfo}/>
      {
        loadingFlag ?
        <PageLoading /> :
        <LyricsSection
          lyrics={lyrics}
          timeoutFlag={timeoutFlag}
          reload={fetchLyrics}
        />
      }      
    </main>
  );
}