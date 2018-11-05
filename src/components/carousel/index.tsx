import React, { ReactNodeArray, createContext, useContext } from 'react';

import './style.css';

const CarouselContext = createContext({
  width: 0,
  height: 0
});

// used as children in the Carousel
export function FrameItem({ children }: React.Props<unknown>) {
  const { width, height } = useContext(CarouselContext);
  return (
    <li
      style={{width, height}}
      className="lt-carousel__item"
    >
      {children}
    </li>
  );
}

interface ICarouselProps {
  displayedIdx: number;
  width: number;
  height: number;
  children: ReactNodeArray;
}
export function Carousel({ children, displayedIdx, height, width }: ICarouselProps) {
  return (
    <CarouselContext.Provider value={{width, height}}>
      <div
        style={{width, height}}
        className="lt-carousel__frame"
      >
        <ul
          style={{transform: `translateX(-${displayedIdx * width}px)`}}
          className="lt-carousel__list"
        >
          {/* children are assumed to be the FrameItem */}
          {children}
        </ul>
      </div>
    </CarouselContext.Provider>
  );
}