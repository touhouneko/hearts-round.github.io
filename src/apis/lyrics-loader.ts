import { ILyrics } from '@/containers/discography/lyrics';

// trackIdx (number) start from 0
// trackId (string) start from 1
export default function loadLyrics(albumCode: string, trackIdx: number): Promise<ReadonlyArray<ILyrics>> {
  const trackId = ('0' + (trackIdx + 1)).slice(-2);
  console.log(trackId);
  return new Promise((resolve, reject) => {
    import(/* webpackChunkName: "lyrics-loader" */ `@/data/lyrics/${albumCode}/${trackId}.csv`)
    .then(({ default: csv }) => resolve(csv))
    .catch(reject);
  });
}