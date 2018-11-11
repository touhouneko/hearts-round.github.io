import { ITrack } from './track';
import { IAlbum } from './album';
import { IHasExternalLinks, IVideoId, IExternalLinks, ExternalLinksModel } from './external-links';

export type VideoSiteType = 'bilibili' | 'youtube' | 'niconico';

export interface IVideo extends IHasExternalLinks {
  cover: string;
  albumName: string;
  albumCode: string;
  trackIdx: number;
  track: ITrack;
}

export class VideoModel implements IVideo {
  public track: ITrack;
  public albumName: string;
  public albumCode: string;
  public links: IExternalLinks = new ExternalLinksModel();
  constructor(
    album: IAlbum,
    public trackIdx: number,
    public cover: string,
    videoId: IVideoId
  ) {
    this.track = album.tracks[trackIdx];
    this.albumCode = album.code;
    this.albumName = album.name;
    this.links.videoId = videoId
  }
}