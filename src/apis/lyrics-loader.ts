import { ILyrics } from '@/containers/discography/lyrics';

// trackIdx (number) start from 0
// trackId (string) start from 1
export default function loadLyrics(albumCode: string, trackIdx: number): Promise<ReadonlyArray<ILyrics>> {
  let trackId = ('00' + (trackIdx + 1)).slice(-3);
  if (albumCode !== 'works') trackId = trackId.slice(-2);
  return new Promise((resolve, reject) => {
    import(/* webpackChunkName: "lyrics-loader" */ `@/data/lyrics/${albumCode}/${trackId}.csv`)
    .then(({ default: csv }) => resolve(csv))
    .catch(reject);
  });
}