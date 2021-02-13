import React from 'react';
import { Router } from '@reach/router';

import Layout from '../components/Layout';
import CatProfile from '../components/CatProfile';
import ListBreed from '../components/ListBreed';

const App = () => {
  return (
    <Layout>
      <Router basepath="/breeds">
        <ListBreed path="/" />
        <CatProfile path="/:breed" />
      </Router>
    </Layout>
  );
};
export default App;
