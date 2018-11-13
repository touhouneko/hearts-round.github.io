import React from 'react';

import works from '@/data/works';
import { IWork } from '@/models/work';
import { popupWorkModal } from './modal';
import './style.css';

// delete works which can not be clicked.
// as the modal need idx to nav and the works without the cover
// are neglected.
function calculateOffsets(): number[] {
  const offsets: number[] = [];
  let idx = 0;
  works.forEach(w => {
    if (w.cover === '') idx--;
    offsets.push(idx);
  });
  return offsets;
}
const offsets: number[] = calculateOffsets();


const WorkItem = ({ work, idx }: { work: IWork, idx: number }) => (
  <li className="work__item">
    <article className="work__article">
      <h3 className="work__header">
      {
        work.principle.link === '' ?
        <span>{work.principle.name}</span>:
        <a
          target="_blank"
          href={work.principle.link}
          className="principle__link"
        >
          {work.principle.name}
        </a>
      }
      </h3>
      <div className="work__content">
        <img
          onClick={popupWorkModal.bind(null, idx+offsets[idx])}
          className="work__cover clickable"
          src={work.cover}
        />
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