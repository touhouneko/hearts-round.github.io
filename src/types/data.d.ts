declare module '@/data/news.csv' {
  export interface IRawNews {
    date: string;
    title_chs: string;
    title_cht: string;
    title_jp: string;
  }
  const news: IRawNews[];
  export default news;
}

declare module '@/data/albums.json' {
  export interface IRawTrack {
    title: string;
    vocal: string;
    original: string;
    arrange: string;
    length: string;
    resource_url: string;
    lyrics_author: string;
    lyrics_content: ReadonlyArray<[string, string]>;
  }
  export interface IRawAlbum {
    name: string;
    cover_img: string;
    code: string;
    original: string;
    illustration: string;
    special_thanks: string;
    product_url: string;
    tracks: ReadonlyArray<IRawTrack>;
  }
  const albums: ReadonlyArray<IRawAlbum>;
  export default albums;
}

declare module '@/data/videos.csv' {
  export interface IRawVideo {
    cover: string;
    title: string;
    album: string;
    original: string;
    arrange: string;
    lyrics: string;
    illust: string;
    vocal: string;
    id_youtube: string;
    id_bilibili: string;
    id_niconico: string;
  }
  const videos :ReadonlyArray<IRawVideo>;
  export default videos;
}

declare module '@/data/gallery.csv' {
  export interface IRawIllustration {
    url_cover: string;
    url_origin: string;
    author_name: string;
    author_url: string;
  }
  const illustrations: ReadonlyArray<IRawIllustration>;
  export default illustrations;
}

declare module '@/data/work.csv' {
  export interface IRawWork {
    title: string;
    provider: string;
    album: string;
    cover: string;
    link_about: string;
    original: string;
    arrange: string;
    lyrics: string;
    illust: string;
    vocal: string;
    link_bilibili: string;
    link_niconico: string;
    link_youtube: string;
  }
  const works: ReadonlyArray<IRawWork>;
  export default works;
}

declare module '@/data/staff.csv' {
  export interface IRawStaff {
    name: string;
    role: string;
    avatar: string;
    social_twitter: string;
    social_bilibili: string;
    social_weibo: string;
    description: string;
  }
  const staffs: ReadonlyArray<IRawStaff>;
  export default staffs;
}

declare module '@/data/banner.csv' {
  export interface IRawBanner {
    image: string;
    title: string;
  }
  const banners: ReadonlyArray<IRawBanner>;
  export default banners;
}