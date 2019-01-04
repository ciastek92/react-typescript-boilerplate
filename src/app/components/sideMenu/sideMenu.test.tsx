import { shallow } from 'enzyme';
import React from 'react';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { SideMenu } from './sideMenu';

describe('Side menu tests', () => {
  jest.mock(
    './../nav/sideNav',
    (): any => ({
      SideNav: (): string => 'SideNav'
    })
  );

  const initialState = {};
  const mockStore = configureStore();
  let store: MockStoreEnhanced;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('renders menu correctly', () => {
    const tree = shallow(<SideMenu />);
    expect(tree).toMatchSnapshot();
  });
});
