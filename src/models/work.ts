import { ITrackAuthor } from "./author";
import { IVideoId } from "./video";

export interface IWork {
  cover: string;
  principle: {
    name: string;
    link: string;
  }
  author: ITrackAuthor;
  videoId: IVideoId;
  musicLink: string;
  description: {
    top: ReadonlyArray<string>;
    bottom: string;
  }
  lyricsPath: string;
}

export class WorkModel implements IWork {
  constructor (
    public cover: string,
    public principle: { name: string, link: string },
    public author: ITrackAuthor,
    public videoId: IVideoId,
    public musicLink: string,
    public description: { top: ReadonlyArray<string>, bottom: string },
    public lyricsPath: string
  ){}
  
}