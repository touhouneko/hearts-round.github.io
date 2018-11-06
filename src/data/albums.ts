import rawAlbums from '@/data/albums.json';
import TrackAuthor, { TrackFieldTypes } from '@/models/track-author';

export interface IPurchaseLink {
  taobao: string;
  tora: string;
}
export interface ITrackInfo {
  author: TrackAuthor;
  title: string;
  length: string;
  link: string;
  hasLyrics: boolean;
}
export interface IAlbumInfo {
  code: string;
  name: string;
  date: string;
  cover: string;
  illustration: string;
  thanks: string;
  author: TrackAuthor,
  productLink: IPurchaseLink;
  tracks: ReadonlyArray<ITrackInfo>
}

const albums: ReadonlyArray<IAlbumInfo> = rawAlbums.map(r => ({
  code: r.code,
  name: r.name,
  date: r.date,
  cover: r.cover,
  illustration: r.illustration,
  thanks: r.thanks,
  author: new TrackAuthor({}),
  productLink: r.product_link,
  tracks: r.tracks.map(t => ({
    title: t.title,
    length: t.length,
    link: t.link,
    hasLyrics: t.has_lyrics,
      author: new TrackAuthor({
      vocal: t.vocal,
      original: t.original,
      composer: t.composer,
      arrange: t.arrange,
      lyrics: t.lyrics
    })
  }))
}));

albums.forEach(a => {
  const albumAuthor: { [field: string]: string[] } = {};
  a.tracks.forEach(t => {
    Object.keys(t.author).forEach((k: TrackFieldTypes) => {
      if (t.author[k] === '' && t.author[k] !== undefined) return;
      else if (albumAuthor[k] === undefined)
        albumAuthor[k] = [t.author[k]];
      else if (albumAuthor[k].findIndex(s => s === t.author[k]) < 0)
        albumAuthor[k].push(t.author[k]);
    });
  });
  Object.keys(albumAuthor).forEach((k: TrackFieldTypes) => {
    if (albumAuthor[k] === undefined) return;
    a.author[k] = albumAuthor[k].join(' | ');
  });
});

export default albums;