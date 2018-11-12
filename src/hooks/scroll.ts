import { useEffect } from 'react';

export default function onScroll(listener: () => any, deps: any[]) {
  useEffect(() => {
    listener();
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    }
  }, deps);
}