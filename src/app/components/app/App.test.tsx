import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { App } from './App';

Enzyme.configure({
  adapter: new Adapter()
});

jest.mock(
  'react-router-dom',
  (): any => ({
    Route: (): string => 'Route'
  })
);

describe('App component tests', () => {
  Enzyme.configure({ adapter: new Adapter() });

  it('renders application correctly', () => {
    const tree = shallow(<App />);
    expect(tree).toMatchSnapshot();
  });
});
