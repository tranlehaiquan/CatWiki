import React from 'react';
import { Router } from '@reach/router';

import Layout from '../components/Layout';
import CatProfile from '../components/CatProfile';

const App = () => {
  return (
    <Layout>
      <Router basepath="/breeds">
        <CatProfile path="/:breed" />
      </Router>
    </Layout>
  );
};
export default App;