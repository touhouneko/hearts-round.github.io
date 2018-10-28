import * as React from 'react';

import OutsideClickListener from '../outside-click-listener';
import './style.css';

interface IProp {
  className?: string;
  children?: any;
  nextLabel: string;
  prevLabel: string;

  handleNext: () => any;
  handlePrev: () => any;
  handleClose: () => any;
}
export const ModalWithNav = ({
  className = '',
  children,
  nextLabel,
  prevLabel,
  handlePrev,
  handleNext,
  handleClose
}: IProp) => (
  <OutsideClickListener
    className={`lt-modal__window lt-modal__window--center lt-modal__window--nav ${className}`}
    listener={handleClose}
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
  </OutsideClickListener>
);

export default ModalWithNav;