import * as React from 'react';
import { observer } from 'mobx-react';

import localStore from './store';
import { INews } from '@/models/news';
import './style.css';

const NewsItem = ({ item, idx}: { item: INews, idx: number}) => (
  <li className="news__item">
    <time className="news__time">{item.date}</time>
    <p className="news__content">
      <span
        className="news__text clickable"
        onClick={localStore.popupNews.bind(localStore, idx)}
      >
        {item.title.chs}
      </span>
    </p>
  </li>
)

const News = ({ news }: { news: INews[] }) => (
  <div className="news__container">
    <h1 className="news__title">News</h1>
    <ul className="news__list">
      {news.map((news, idx) => (
        <NewsItem item={news} idx={idx} key={idx}/>
      ))}
    </ul>
  </div>
)

@observer
export default class Home extends React.Component {
  public render() {
    const { news } = localStore;
    return (
      <main className="home__container">
        <News news={news} />
      </main>
    );
  }
  public componentDidMount() {
    localStore.fetchNews();
  }
}
