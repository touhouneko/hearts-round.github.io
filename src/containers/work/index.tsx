import React from 'react';

import works from '@/data/work';
import { IWork } from '@/models/work';
import './style.css';

const WorkItem = ({ work, idx }: { work: IWork, idx: number }) => (
  <li className="work__item">
    <article className="work__article">
      <h3 className="work__header">
        {work.principle.name}
      </h3>
      <div className="work__content">
        <img className="work__cover clickable" src={work.cover} />
        <section className="work__info">
          <p className="info__item">
            {work.description.top[0]}
          </p>
          <p className="info__item">
            {work.description.top[1]}
          </p>
          <p className="info__item">
            {work.description.bottom}
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