export interface IVideoId {
  bilibili: string;
  youtube?: string;
  niconico?: string;
}

export interface IExternalLinks {
  music?: string;
  image?: string;
  videoId?: IVideoId;
}

export interface IHasExternalLinks {
  links: IExternalLinks;
}

export class ExternalLinksModel implements IExternalLinks {
  constructor(
    public music?: string,
    public image?: string,
    public videoId?: IVideoId
  ) {}
}