import * as React from 'react';

import './style.css';

interface IProp {
  className?: string;
  children?: any;
  nextLabel: string;
  prevLabel: string;
  windowRef?: React.RefObject<HTMLDivElement>;

  handleNext: () => any;
  handlePrev: () => any;
}

const ModalWithNav = ({
  className = '',
  children,
  nextLabel,
  prevLabel,
  windowRef = null,
  handlePrev,
  handleNext
}: IProp) => (
  <div
    ref={windowRef}
    className={`lt-modal__window lt-modal__window--center lt-modal__window--nav ${className}`}
  >
    {children}
    <div className="nav__wrapper">
      <a
        onClick={handlePrev}
        className={`nav__button nav__button--previous clickable ${prevLabel === '' ? 'hide' : ''}`}
      >
        <span>&#8592;&#8194;{prevLabel}</span>
      </a>
      <a
        onClick={handleNext}
        className={`nav__button nav__button--next clickable ${nextLabel === '' ? 'hide' : ''}`}
      >
        <span>{nextLabel}&#8194;&#8594;</span>
      </a>
    </div>
  </div>
);

export default ModalWithNav;