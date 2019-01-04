import NavItem from "app/components/nav/navItem";
import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  children?: ReactNode;
}

const SideNav: React.StatelessComponent<Props> = props => {
  return (
    <nav className={'c-side-nav'}>
      {props.children}
      <header className={'c-side-nav__logo'}>
        <NavLink to={'/'} />
      </header>
      <ul className={'ul--no-decoration'}>
        <li>
          <NavItem icon={'icon-earnings'} title={'New'} url={'/'} />
        </li>
        <li>
          <NavItem
            icon={'icon-earnings'}
            title={'Saved'}
            url={'/saved'}
            disabled
          />
        </li>
        <li>
          <NavItem
            icon={'icon-earnings'}
            title={'Active'}
            url={'/active'}
            disabled
          />
        </li>
        <li>
          <NavItem
            icon={'icon-earnings'}
            title={'Contact'}
            url={'/contact'}
            disabled
          />
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
