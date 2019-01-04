import Home from 'app/pages/Home';
import React from 'react';
import { Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from '../layout/layout';

const App = () => (
  <Layout>
    <Route exact path="/" component={Home} />
    <ToastContainer />
  </Layout>
);

export { App };
