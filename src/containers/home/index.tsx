import * as React from 'react';
import { observer } from 'mobx-react';

import localStore from './store';
import { INews } from '@/models/news';
import './style.css';

@observer
export default class Home extends React.Component {
  public render() {
    const { news } = localStore;
    return (
      <main className="home__container">

        <div className="news__container">
          <h1 className="news__title">News</h1>
          <ul className="news__list">
            {news.map(this.newsItem)}
          </ul>
        </div>
      </main>
    );
  }
  public componentDidMount() {
    localStore.fetchNews();
  }

  private newsItem(item: INews, idx: number): JSX.Element {
    return (
      <li className="news__item" key={idx}>
        <time className="news__time">{item.date}</time>
        <p className="news__content">
          <span className="news__text">{item.title.chs}</span>
        </p>
      </li>
    )
  }
}
