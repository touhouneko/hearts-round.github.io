import { IHasAuthor, ITrackAuthor } from './author';
import { ITrack } from './track';

export type VideoSiteType = 'bilibili' | 'youtube' | 'niconico';
export interface IVideoId {
  bilibili: string;
  youtube: string;
  niconico: string;
}

export interface IVideo extends IHasAuthor {
  cover: string;
  title: string;
  albumName: string;
  videoId: IVideoId;
}

export class VideoModel implements IVideo {
  public title: string;
  public author: ITrackAuthor;
  constructor(
    track: ITrack,
    public albumName: string,
    public cover: string,
    public videoId: IVideoId
  ) {
    this.title = track.title;
    this.author = track.author;
  }
}