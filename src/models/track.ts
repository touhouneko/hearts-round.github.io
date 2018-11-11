import { IHasAuthor, ITrackAuthor } from "./author";
import { IHasExternalLinks, IExternalLinks, ExternalLinksModel } from "./external-links";

export interface ITrack extends IHasAuthor, IHasExternalLinks {
  title: string;
  length: string;
  hasLyrics: boolean;
}

export class TrackModel implements ITrack {
  public links: IExternalLinks = new ExternalLinksModel();
  constructor(
    public title: string,
    public length: string,
    public author: ITrackAuthor,
    musicLink: string = '',
    public hasLyrics: boolean = false,
  ){
    this.links.music = musicLink;
  }
}