import rawVideos, { IRawVideo } from '@/data/videos.csv';

export type VideoSiteType = 'bilibili' | 'niconico' | 'youtube';
export interface IVideoId {
  bilibili: string;
  niconico: string;
  youtube: string;
}
export interface IHasVideoId {
  videoId: IVideoId;
  lyricsLink?: string;
  musicLink?: string;
}
export interface IVideoInfo extends IHasVideoId {
  cover: string;
  title: string;
  album: string;
  original: string;
  arrange: string;
  lyrics: string;
  illust: string;
  vocal: string;
}
const videoInfos: ReadonlyArray<IVideoInfo> = rawVideos.map(r => ({
  ...r,
  videoId: {
    bilibili: r.id_bilibili,
    niconico: r.id_niconico,
    youtube: r.id_youtube
  },
}))
export default videoInfos;