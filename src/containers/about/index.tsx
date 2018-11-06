import React from 'react';
import { RouteProps, Redirect, NavLink } from 'react-router-dom';

import staffs, { IStaffIntroduction } from '@/data/staff';
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

function SNSLogo({ link, site }: {link: string, site: string }) {
  const wrapperProps: any = {
    className: 'about__link'
  }
  let iconClassName = `about__icon about__icon--${site}`;
  if (link === '')
    iconClassName += ' disabled'
  else
  wrapperProps.href = link;
  return (
    <a {...wrapperProps}>
      <i className={iconClassName} />
    </a>
  );
}
const StaffIntroduction = ({ intro }: { intro: IStaffIntroduction }) => (
  <li className="about__content-container">
    <article className="about__content about__content--article">
      <h2 className="article__heading">
        {intro.name}
      </h2>
      <section className="article__body">
        {
          intro.description.map((p, idx) => (
            <p className="article__paragraph" key={idx}>
              {p}
            </p>
          ))
        }
      </section>
    </article>
    {/* sns icon groups */}
    <div className="about__content about__content--avatar">
      <img src={intro.avatar} className="about__avatar" />
      <div className="about__link-container">
        <SNSLogo link = {intro.social.twitter} site='twitter'/>
        <SNSLogo link = {intro.social.bilibili} site='bilibili'/>
        <SNSLogo link = {intro.social.weibo} site='weibo'/>
      </div>
    </div>
  </li>
);

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
  if (theStaff  === undefined) 
    return (<Redirect to="/404" />)
  return (
    <main className="about__container" key={window.location.pathname}>
      <aside className="about__aside">
        <nav className="about__nav">
          <img src="https://via.placeholder.com/205x150" className="about__logo--large" />
          <ul className="nav__list">
            {
              staffs.map(s => (
                <NavItem name={s.name} role={s.role} to={s.path} key={s.path} />
              ))
            }
          </ul>
        </nav>
      </aside>
      <ul className="about__introduction-list">
        {
          theStaff.introduction.map((intro, idx) => (
            <StaffIntroduction intro={intro} key={idx}/>
          ))
        }
      </ul>
    </main>
  );
}