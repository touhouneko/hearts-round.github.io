import * as React from 'react';

export default function useClickOutside(wrapperRef: React.RefObject<HTMLElement> ,handler: () => any) {
  function handleClick(ev: MouseEvent) {
    if (wrapperRef.current === null) return;
    else if (wrapperRef.current.contains(ev.target as Node)) return;
    handler();
  }

  React.useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);
}