import rawAlbums from '@/data/albums.json';

export const coverInfos = rawAlbums.map(r => ({
  name: r.name,
  cover: r.cover_img,
  code: r.code
}));