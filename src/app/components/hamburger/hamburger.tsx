import classnames from 'classnames';
import React from 'react';

interface Props {
  open: boolean;
  darkTheme: boolean;
}

export class Hamburger extends React.Component<Props> {
  public render() {
    const { open, darkTheme } = this.props;
    const className = classnames('c-hamburger', {
      'c-hamburger--open': open,
      'c-hamburger--dark': darkTheme
    });

    return <div className={className} />;
  }
}
