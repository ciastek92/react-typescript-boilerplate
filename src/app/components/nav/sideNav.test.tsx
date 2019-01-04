import { shallow } from 'enzyme';
import React from 'react';
import SideNav from './sideNav';

describe('Side nav tests', () => {
  it('renders menu correctly', () => {
    const tree = shallow(<SideNav />);
    expect(tree).toMatchSnapshot();
  });
});
