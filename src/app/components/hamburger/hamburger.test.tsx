import { shallow } from 'enzyme';
import React from 'react';
import { Hamburger } from './hamburger';

describe('Hamburger component tests', () => {
  it('renders correctly', () => {
    const tree = shallow(<Hamburger open darkTheme />);
    expect(tree).toMatchSnapshot();
  });
});
