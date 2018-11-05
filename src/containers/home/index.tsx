import React, { useState } from 'react';

import { Carousel, FrameItem } from '@/components/carousel';
import banners from '@/data/banner.csv';
import NewsSection from './news-section';
import './style.css';

function CarouselSection() {
  const [displayedIdx, setDisplayedIdx] = useState(0);
  return (
    <div className="banner__container">
      <Carousel width={885} height={424} displayedIdx={displayedIdx}>
        {
          banners.map((b, idx) => (
            <FrameItem key={idx}>
              <div className="banner__wrapper">
                <img src={b.image} className="banner__image" />
                <p className="banner__title">
                  {b.title}
                </p>
              </div>
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
      <CarouselSection />
      <NewsSection />
    </main>
  );
}