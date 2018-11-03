import rawWorks from '@/data/work.csv';

export interface IWork {
  title: string;
  provider: string;
  album: string;
  cover: string;
  aboutUrl: string;
  contributor: {
    original: string;
    arrange: string;
    lyrics: string;
    vocal: string;
  };
  link: {
    bilibili: string;
    niconico: string;
    youtube: string;
  }
}

const works: ReadonlyArray<IWork> = rawWorks.map(w => ({
  title: w.title,
  provider: w.provider,
  album: w.album,
  cover: w.cover,
  aboutUrl: w.link_about,
  contributor: {
    original: w.original,
    arrange: w.arrange,
    lyrics: w.lyrics,
    vocal: w.vocal
  },
  link: {
    bilibili: w.link_bilibili,
    niconico: w.link_niconico,
    youtube: w.link_youtube
  }
}));

export default works;