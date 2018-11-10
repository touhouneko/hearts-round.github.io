import TrackAuthorModel, { ITrackAuthor, IHasAuthor, TrackFieldTypes } from "./author";
import { ITrack } from "./track";

export interface IPurchaseLink {
  taobao: string;
  tora?: string;
}
export interface IAlbum extends IHasAuthor {
  code: string;
  name: string;
  date: string;
  cover: string;
  thanks: string;
  purchaseLink: IPurchaseLink;
  tracks: ReadonlyArray<ITrack>;
}

export class AlbumModel implements IAlbum {
  public author: ITrackAuthor;
  constructor(
    public code: string,
    public name: string,
    public date: string,
    public cover: string,
    public thanks: string,
    public purchaseLink: IPurchaseLink,
    public tracks: ReadonlyArray<ITrack>
  ) {
    this.author = this.generateAuthor();
  }

  private generateAuthor() {
    const albumAuthor: Map<TrackFieldTypes, string[]> = new Map();
    // const albumAuthor: { [field: TrackFieldTypes]: string[] } = {};
    this.tracks.forEach(t => {
      Object.keys(t.author).forEach((k: TrackFieldTypes) => {
        if (t.author[k] === '' && t.author[k] !== undefined) return;
        else if (albumAuthor.get(k) === undefined)
          albumAuthor.set(k, [t.author[k]]);
        else if (albumAuthor.get(k).findIndex(s => s === t.author[k]) < 0)
          albumAuthor.get(k).push(t.author[k]);
      });
    });

    const author = new TrackAuthorModel({});
    const iterator = albumAuthor.entries();
    let value: [TrackFieldTypes, string[]] = iterator.next().value;
    while (value !== undefined) {
      const [k,v] = value;
      if (v !== undefined)
        author[k] = v.join(' | ');
      value = iterator.next().value;
    }
    return author;
  }
}