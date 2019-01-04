import classnames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  url: string;
  icon?: string;
  title?: string;
  isLight?: boolean;
  disabled?: boolean;
}

const NavItem: React.StatelessComponent<Props> = props => {
  const { isLight, icon, title, url, disabled } = props;
  const linkClass = classnames('c-nav-item', { 'c-nav-item--light': isLight });
  const activeClass = isLight ? '' : 'c-nav-item--active';

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) {
      e.preventDefault();
    }
  };

  return (
    <NavLink
      to={url}
      className={linkClass}
      activeClassName={activeClass}
      onClick={handleClick}>
      {icon && <i className={`c-nav-item__icon ${icon}`} />}
      {title && <span className={'c-nav-item__title'}>{title}</span>}
    </NavLink>
  );
};

export default NavItem;
