import React from 'react';

import './style.css';

export interface IProp {
  className?: string;
  children?: any;
  nextLabel: string;
  prevLabel: string;

  handleNext: () => any;
  handlePrev: () => any;
}

/**
 * The modal with the bottom nav bar (next and previous)
 * @param nextLabel text label for the next button
 * @param prevLabel text label for the previous button
 * @param handleNext called when the next is clicked
 * @param handlePrev called when the previous is clicked
 * @param {React.RefObject<HTMLDivElement>} ref container reference to the wrapper of the modal
 */
const ModalWithNav = React.forwardRef(({
  className = '',
  children,
  nextLabel,
  prevLabel,
  handlePrev,
  handleNext
}: IProp, ref: React.RefObject<HTMLDivElement>) => (
  <div
    ref={ref}
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
));

export default ModalWithNav;