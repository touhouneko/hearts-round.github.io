import React from 'react';

export default function useClickOutside(
  wrapperRef: React.RefObject<HTMLElement>,
  handler: () => any,
  receiver?: HTMLElement | Document
) {
  function handleClick(ev: MouseEvent) {
    if (wrapperRef.current === null) return;
    else if (wrapperRef.current.contains(ev.target as Node)) return;
    handler();
  }

  React.useEffect(() => {
    if (receiver === undefined) receiver = document;
    receiver.addEventListener('click', handleClick);
    return () => {
      receiver.removeEventListener('click', handleClick);
    }
  }, []);
}