import React, { useState, useRef } from 'react';
import { Redirect, NavLink, RouteComponentProps } from 'react-router-dom';

import staffs, { IStaffIntroduction } from '@/data/staff';
import SiteLogo from '@/assets/images/logo_shadow.png';
import useOnScroll from '@/hooks/scroll';
import './style.css';
import useResize from '@/hooks/resize';

const html = document.getElementsByTagName('html')[0];
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
    switch(site) {
      case 'weibo':
        wrapperProps.href = `https://www.weibo.com/${link}`;
        break;
      case 'bilibili':
        wrapperProps.href = `https://space.bilibili.com/${link}`;
        break;
      case 'twitter':
        wrapperProps.href= `https://twitter.com/${link}`;
    }
  return (
    <a {...wrapperProps} target="_Blank">
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
    {
      intro.avatar === '' ?
      <i className="about__avatar default-avatar" />:
      <img className="about__avatar" src={intro.avatar} />
    }
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

interface IProps {
  staff?: string
}
export default function About(props: RouteComponentProps<IProps>) {
  const [offsetY, setOffsetY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef<HTMLUListElement>(null);
  const contentRef = useRef<HTMLUListElement>(null);

  useResize(() => {
    const pageHeight = html.offsetHeight;
    const viewHeight = window.innerHeight;
    // console.log(pageHeight, viewHeight);
    setNavHeight(pageHeight > viewHeight ? pageHeight : pageHeight - 75);
  }, [props.location.pathname]);
  
  useOnScroll(() => {
    const scrollX = window.scrollX | document.documentElement.scrollLeft;
    const scrollY = window.scrollY | document.documentElement.scrollTop;
    setOffsetX(-scrollX);
    // 170 = margin-bottom
    const bottomPos = navRef.current.getBoundingClientRect().bottom - offsetY + scrollY + 170;
    const pageBottomPos = html.offsetHeight;
    let offset = Math.min(0, pageBottomPos - bottomPos - 220);
    offset = Math.max(-scrollY, offset);
    setOffsetY(offset)
  }, [offsetY]);

  const { staff: staffName = '' } = props.match.params;
  const theStaff = findStaff(staffName);
  if (theStaff  === undefined) 
    return (<Redirect to="/404" />)
  return (
    <main className="about__container">
      <aside        
        className="about__aside"
        style={{
          transform: `translate(${offsetX}px,${offsetY}px)`,
          minHeight: navHeight
        }}
      >
        <nav className="about__nav">
          <img src={SiteLogo} className="about__logo--large" />
          <ul className="nav__list" ref={navRef}>
            {
              staffs.map(s => (
                <NavItem name={s.name} role={s.role} to={s.path} key={s.path} />
              ))
            }
          </ul>
        </nav>
      </aside>
      <ul
        ref={contentRef}
        className="about__introduction-list"
      >
        {
          theStaff.introduction.map((intro, idx) => (
            <StaffIntroduction intro={intro} key={idx}/>
          ))
        }
      </ul>
    </main>
  );
}
