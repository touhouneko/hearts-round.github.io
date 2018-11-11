import React, { useState, useEffect } from 'react';

import { Carousel, FrameItem } from '@/components/carousel';
import banners from '@/data/banner.csv';
import albums from '@/data/albums';
// import popupAlbumModal from '../discography/album/album-modal';
import NewsSection from './news-section';
import './style.css';

// function handleCarouselClicked(albumCode: string) {
//   const idx = albums.findIndex(a => a.code === albumCode);
//   if (idx < 0) {
//     alert('album does not exist');
//     return;
//   }
//   // popupAlbumModal(idx);
// }

function CarouselSection() {
  const [displayedIdx, setDisplayedIdx] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayedIdx((displayedIdx + 1) % banners.length)
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [displayedIdx]);
  return (
    <div className="banner__container">
      <Carousel width={770} height={370} displayedIdx={displayedIdx}>
        {
          banners.map((b, idx) => (
            <FrameItem key={idx}>
              <a
                href={`/discography/album/${b.album_code}`}
                target="_blank"
                className="banner__wrapper clickable"
              >
                <img src={b.image} className="banner__image" />
                <p className="banner__title">
                  {b.title}
                </p>
              </a>
            </FrameItem>
          ))
        }
      </Carousel>
      <div className="banner__controller">
        {
          banners.map((_, idx) => (
            <a
              key={idx}
              className={`controller__jumper clickable ${displayedIdx===idx ? 'selected' : ''}`}
              onClick={setDisplayedIdx.bind(null, idx)}
            />
          ))
        }
      </div>
    </div>
  );
}

export default function Home() {  
  return (
    <main className="home__container">
      <div className="home__cover">
        <img
          src='https://s3-ap-southeast-2.amazonaws.com/large-timber-blog/others/HOME.png'
          className="cover__image"
        />
      </div>
      <div className="home__logo">
        <img className="logo__image" />
        <section className="logo__slogan">
          <p className="slogan__line slogan__line--0">少女见见见</p>
          <p className="slogan__line slogan__line--1">雨雨雨上∙ ∙ ∙</p>
        </section>
      </div>
      <div className="home__buffer" />
      <div className="home__body">
        <CarouselSection />
        <NewsSection />
      </div>
    </main>
  );
}