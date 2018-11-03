import React from 'react';

import { INews } from '@/models/news';
import { popupModal } from './modal';
import apis from '@/apis';
import './style.css';

export default function NewsSection() {
  let [news, setNews] = React.useState([] as ReadonlyArray<INews>);

  React.useEffect(() => {
    apis.getNews().then(setNews).catch(console.error);
  }, []);
  
  function NewsItem ({ item, idx}: { item: INews, idx: number}) {
    return (
      <li className="news__item">
        <time className="news__time">{item.date}</time>
        <p className="news__content">
          <span
            className="news__text clickable"
            onClick={() => popupModal(news, idx)}
          >
            {item.title.chs}
          </span>
        </p>
      </li>
    )
  }

  return (
    <section className="news__container">
      <h1 className="news__title page__title">News</h1>
      <ul className="news__list">
        {news.map((news, idx) => (
          <NewsItem item={news} idx={idx} key={idx}/>
        ))}
      </ul>
    </section>
  )
}