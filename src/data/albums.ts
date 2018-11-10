import rawAlbums from '@/data/albums.json';
import TrackAuthor from '@/models/author';
import { IAlbum, AlbumModel } from '@/models/album';
import { TrackModel } from '@/models/track';


const albums: ReadonlyArray<IAlbum> = rawAlbums.map(r => new AlbumModel(
  r.code, r.name, r.date, r.cover, r.thanks, r.product_link,
  r.tracks.map(t => new TrackModel(
    t.title, t.length, new TrackAuthor(t), t.link, t.has_lyrics
  ))
));

export default albums;