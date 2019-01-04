import { shallow } from 'enzyme';
import React from 'react';
import Layout from '../layout/layout';

describe('Layout item tests', () => {
  it('renders correctly', () => {
    const tree = shallow(
      <Layout>
        <div>Some stuff</div>
      </Layout>
    );
    expect(tree).toMatchSnapshot();
  });
});
