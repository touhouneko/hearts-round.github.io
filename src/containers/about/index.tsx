import React from 'react';
import { RouteProps, Redirect, NavLink } from 'react-router-dom';

import staffs from '@/data/staff';
import './style.css';

interface INavProps {
  name: string;
  role: string;
  to: string
}
/**
 * @param name name of the staff
 * @param role role of the staff (vocal/arrangement etc.)
 * @param to navigation link, (/coretania, for example)
 */
function NavItem ({ name, role, to }: INavProps) {
  return (
    <li className="nav__item">
      <h4 className="nav__role">
        {role}
      </h4>
      <NavLink
        className="nav__link"
        activeClassName="active"
        exact={true}
        to={`/about${to}`}
      >
        {name}
      </NavLink>
    </li>
  );
}

/**
 * @param staffName name of the staff
 * if the staffName is '', which indicates it is the root path, the first one will be used
 */
function findStaff(staffName: string) {
  if (staffName === '')
    return staffs[0];
  const theStaff = staffs.find(s => s.name.toLowerCase() === staffName);
  return theStaff;
}

interface IProps extends RouteProps {
  match: {
    params: {
      staff?: string
    }
  }
}
export default function About({ match }: IProps) {
  const { staff: staffName = '' } = match.params;
  const theStaff = findStaff(staffName);
  if (theStaff  === undefined) {
    alert('The staff does not exist');
    return (<Redirect to="/about" />)
  }
  return (
    <main className="about__container" key={window.location.pathname}>
      <aside className="about__aside">
        <nav className="about__nav">
          <img src="https://via.placeholder.com/230x170" className="about__logo--large" />
          <ul className="nav__list">
            {
              staffs.map(s => (
                <NavItem name={s.name} role={s.role} to={s.path} key={s.path} />
              ))
            }
          </ul>
        </nav>
      </aside>
      <div className="about__content-container">
        <article className="about__content about__content--article">
          <h2 className="article__heading">
            {theStaff.name}
          </h2>
          <section className="article__body">
            {
              theStaff.description.map((p, idx) => (
                <p className="article__paragraph" key={idx}>
                  {p}
                </p>
              ))
            }
          </section>
        </article>
        {/* sns icon groups */}
        <div className="about__content about__content--avatar">
          <img src={theStaff.avatar} className="about__avatar" />
          <div className="about__link-container">
            <a className="about__link clickable" href={theStaff.social.twitter}>
              <i className="about__icon about__icon--twitter" />
            </a>
            <a className="about__link clickable" href={theStaff.social.bilibili}>
              <i className="about__icon about__icon--bilibili" />
            </a>
            <a className="about__link clickable" href={theStaff.social.weibo}>
              <i className="about__icon about__icon--weibo" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}