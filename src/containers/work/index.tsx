import React from 'react';

import works, { IWork } from '@/data/work';
import './style.css';

const WorkItem = ({ work, idx }: { work: IWork, idx: number }) => (
  <li className="work__item">
    <article className="work__article">
      <h3 className="work__header">
        {work.principle}
      </h3>
      <div className="work__content">
        <img className="work__cover clickable" src={work.cover} />
        <section className="work__info">
          <p className="info__item">
            {work.title}
          </p>
          <p className="info__item">
            {work.provider} 提供
          </p>
          <p className="info__item">
            In the album「{work.album}」
          </p>
        </section>
      </div>
    </article>
  </li>
);

const WorkPage = () => (
  <main className="work__container">
    <h1 className="page__title">
      Works
    </h1>
    <ul className="work__list">
    {
      works.map((w, idx) => (
        <WorkItem work={w} idx={idx} key={idx}/>
      ))
    }
    </ul>
  </main>
);

export default WorkPage;