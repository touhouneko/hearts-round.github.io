import { ITrackAuthor } from "./author";
import { IVideoId, IHasExternalLinks, IExternalLinks, ExternalLinksModel } from "./external-links";

export interface IWork extends IHasExternalLinks {
  title: string;
  cover: string;
  principle: {
    name: string;
    link: string;
  }
  author: ITrackAuthor;
  description: {
    top: ReadonlyArray<string>;
    bottom: string;
  }
  hasLyrics: boolean;
}

export class WorkModel implements IWork {
  public links: IExternalLinks = new ExternalLinksModel();
  constructor (
    public cover: string,
    public title: string,
    public principle: { name: string, link: string },
    public author: ITrackAuthor,
    videoId: IVideoId,
    musicLink: string,
    public description: { top: ReadonlyArray<string>, bottom: string },
    public hasLyrics: boolean
  ){
    this.links.videoId = videoId;
    this.links.music = musicLink;
  }
  
}