import rawIllustrations from '@/data/gallery.csv';

export interface IIllustration {
  url: {
    cover: string;
    origin: string;
  },
  author: {
    name: string;
    page: string;
  }
}
const illustrations: ReadonlyArray<IIllustration> = rawIllustrations.map(r => ({
  url: {
    cover: r.url_cover,
    origin: r.url_origin
  },
  author: {
    name: r.author_name,
    page: r.author_url
  }
}));

export default illustrations;