import React from 'react';
import { SideMenu } from '../sideMenu/sideMenu';

export default (props: { children: React.ReactNode }) => (
  <div className="o-aside-layout">
    <div className="o-aside-layout__content">{props.children}</div>
    <SideMenu />
  </div>
);
