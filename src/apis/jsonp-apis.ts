import papa from 'papaparse';
import jsonp from 'jsonp';

import { ILyrics } from '@/containers/discography/lyrics';

const baseUrl = 'https://api.github.com/';
const baseContentUrl = baseUrl + 'repos/hearts-round/hearts-round.github.io/contents/';

function writeToScript(data: any, name: string) {
  const element = document.createElement('script');
  element.innerHTML = `var __ssr__${name}__=${JSON.stringify(data)}`;
  document.getElementsByTagName('head')[0].appendChild(element);
}
function getFromScript(name: string) {
  return (window as any)[`__ssr__${name}__`]
}
function parseBase64CSV<T>(encoded: string): ReadonlyArray<T> {
  encoded = encoded.split('\n').join('');
  const content = decodeURIComponent(escape(atob(encoded)));
  return papa.parse(content, {
    header: true,
    comments: '#'
  }).data;
}

interface IJsonpResponse {
  meta: {
    status: number;
  },
  data: {
    content: string;
  }
}

export function getLyricsSync() {
  const encoded = getFromScript('lyrics');
  if (encoded === undefined) return null;
  else return parseBase64CSV<ILyrics>(encoded);
}
// it is assumed that the albumCode and trackIdx are valid
export function getLyrics(albumCode: string, trackIdx: number): Promise<ReadonlyArray<ILyrics>> {
  const trackId = ('0' + trackIdx).slice(-2);
  return new Promise((resolve, reject) => {
    jsonp(`${baseContentUrl}src/data/lyrics/${albumCode}_${trackId}.csv?ref=source`,
    { timeout: 5000 }, function(err, data: IJsonpResponse) {
      if (err !== undefined && err !== null)
        reject(err);
      else {
        if (data.meta.status > 199 && data.meta.status < 300) {
          writeToScript(data.data.content, 'lyrics');
          const lyrics = parseBase64CSV<ILyrics>(data.data.content);
          resolve(lyrics);
        }
        reject(data.meta);
      }
    });
  });
}
