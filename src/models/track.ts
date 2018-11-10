import { IHasAuthor, ITrackAuthor } from "./author";

export interface ITrack extends IHasAuthor {
  title: string;
  length: string;
  link: string;
  hasLyrics: boolean;
}

export class TrackModel implements ITrack {
  constructor(
    public title: string,
    public length: string,
    public author: ITrackAuthor,
    public link: string = '',
    public hasLyrics: boolean = false,
  ){}
}