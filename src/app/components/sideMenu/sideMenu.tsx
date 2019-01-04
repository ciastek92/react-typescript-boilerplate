import { Hamburger } from 'app/components/hamburger/hamburger';
import SideNav from 'app/components/nav/sideNav';
import cx from 'classnames';
import React from 'react';

interface State {
  isMenuOpened: boolean;
}

export class SideMenu extends React.Component<{}, State> {
  public state: State = {
    isMenuOpened: false
  };

  public menuToggle = () => {
    const { isMenuOpened } = this.state;
    this.setState({
      isMenuOpened: !isMenuOpened
    });
  };

  public render() {
    const { isMenuOpened } = this.state;
    const headerContainerClassName = cx(
      'o-aside-layout__burger',
      'u-display-md--none',
      'u-cursor--pointer',
      'js-hit-area',
      { 'u-display--none': isMenuOpened }
    );
    const sideBurgerContainerClassName = cx(
      'c-side-nav__burger',
      'u-cursor--pointer',
      'js-hit-area',
      { 'u-display--none': !isMenuOpened }
    );
    const hamburger = (
      <Hamburger open={isMenuOpened} darkTheme={!isMenuOpened} />
    );
    return (
      <React.Fragment>
        <div className={headerContainerClassName} onClick={this.menuToggle}>
          {hamburger}
        </div>
        <aside
          className={cx('o-aside-layout__sidebar', {
            'o-aside-layout__sidebar--show': isMenuOpened
          })}
        >
          <SideNav>
            <div
              className={sideBurgerContainerClassName}
              onClick={this.menuToggle}
            >
              {hamburger}
            </div>
          </SideNav>
        </aside>
      </React.Fragment>
    );
  }
}
