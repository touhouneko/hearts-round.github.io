import albums from './albums';
import rawVideos from '@/data/videos.csv';
import { VideoModel, IVideo } from '@/models/video';

const videoInfos: ReadonlyArray<IVideo> = rawVideos.map(r => {
  const [theAlbum] = albums.filter(a => a.code.toLowerCase() === r.album_code.toLowerCase());
  const trackIdx = parseInt(r.track_id, 10) - 1;
  const theTrack = theAlbum.tracks[trackIdx];
  return new VideoModel(theTrack, theAlbum.name, r.cover, {
    bilibili: r.id_bilibili,
    youtube: r.id_youtube,
    niconico: r.id_niconico
  })
});

export default videoInfos;