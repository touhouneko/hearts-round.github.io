declare module '@/data/news.csv' {
  export interface IRawNews {
    date: string;
    title: string;
  }
  const news: IRawNews[];
  export default news;
}

declare module '@/data/albums.json' {
  export interface IRawTrack {
    title: string;
    vocal?: string;
    original?: string;
    arrange?: string;
    composer?: string;
    pv?: string;
    illustrator?: string;
    lyrics?: string;
    length: string;
    link?: string;
    has_lyrics: boolean;
  }
  export interface IRawAlbum {
    code: string;
    date: string;
    name: string;
    cover: string;
    thanks: string;
    product_link: {
      taobao: string;
      tora?: string;
    }
    tracks: ReadonlyArray<IRawTrack>;
  }
  const albums: ReadonlyArray<IRawAlbum>
  export default albums;
}

declare module '@/data/videos.csv' {
  export interface IRawVideo {
    album_code: string;
    track_id: string;
    cover: string;
    id_youtube?: string;
    id_bilibili: string;
    id_niconico?: string;
  }
  const videos :ReadonlyArray<IRawVideo>;
  export default videos;
}

declare module '@/data/gallery.csv' {
  export interface IRawIllustration {
    url_cover: string;
    url_modal: string;
    url_origin: string;
    author_name: string;
    author_url?: string;
    album_code?: string;
    track_idx?: string;
  }
  const illustrations: ReadonlyArray<IRawIllustration>;
  export default illustrations;
}

declare module '@/data/work.csv' {
  export interface IRawWork {
    principle: string;
    principle_url?: string;
    cover: string;
    info_1: string;
    info_2?: string;
    video_bilibili: string;
    video_niconico?: string;
    video_youtube?: string;
    original?: string;
    compose?: string;
    arrange?: string;
    lyric?: string;
    illust?: string;
    vocal?: string;
    pv?: string;
    lyrics_idx?: string;
    ext_link?: string;
  }
  const works: ReadonlyArray<IRawWork>;
  export default works;
}

declare module '@/data/staff.csv' {
  export interface IRawStaff {
    name: string;
    role: string;
    avatar?: string;
    social_twitter?: string;
    social_bilibili?: string;
    social_weibo?: string;
    description: string;
  }
  const staffs: ReadonlyArray<IRawStaff>;
  export default staffs;
}

declare module '@/data/banner.csv' {
  export interface IRawBanner {
    image: string;
    title: string;
    album_code: string;
  }
  const banners: ReadonlyArray<IRawBanner>;
  export default banners;
}