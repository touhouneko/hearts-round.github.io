import rawNews, { IRawNews } from '@/data/news.csv';
import NewsModel, { INews } from '@/models/news';
import MultiLanguageText from '@/models/text';

function verifyInput(raw: IRawNews): boolean {
  const dateRegex = /^\d{4}年\d{1,2}月\d{1,2}日$/;
  return dateRegex.test(raw.date) &&
  typeof raw.title_chs === 'string' && raw.title_chs.length > 0 &&
  typeof raw.title_cht === 'string' && raw.title_cht.length > 0 &&
  typeof raw.title_jp === 'string' && raw.title_jp.length > 0;
}

function parseOne(raw: IRawNews): INews {
  if (!verifyInput(raw)) {
    throw new Error('error parsing news');
  }
  const title = new MultiLanguageText(raw.title_chs, raw.title_cht, raw.title_jp);
  return new NewsModel(raw.date, title);
}

const news = rawNews.map(parseOne);
export default news;