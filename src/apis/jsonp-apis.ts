import papa from 'papaparse';
import jsonp from 'jsonp';

import { ILyrics } from '@/containers/discography/lyrics';

const baseUrl = 'https://api.github.com/';
const baseContentUrl = baseUrl + 'repos/hearts-round/hearts-round.github.io/contents/';

interface IJsonpResponse {
  meta: {
    status: number;
  },
  data: {
    content: string;
  }
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
          const encoded = data.data.content.split('\n').join('');
          const content = decodeURIComponent(escape(atob(encoded)));
          const lyrics = papa.parse(content, {
            header: true,
            comments: '#'
          }).data;
          resolve(lyrics);
        }
        reject(data.meta);
      }
    });
  });
}
