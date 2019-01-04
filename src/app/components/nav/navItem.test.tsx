import { shallow } from 'enzyme';
import React from 'react';
import NavItem from './navItem';

describe('Nav item tests', () => {
  it('renders with all props', () => {
    const tree = shallow(
      <NavItem
        url={'/earnings'}
        title={'earnings'}
        icon={'icon-calendar'}
        isLight
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it('renders with only required props', () => {
    const tree = shallow(<NavItem url={'calendar'} />);
    expect(tree).toMatchSnapshot();
  });
});
