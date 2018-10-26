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