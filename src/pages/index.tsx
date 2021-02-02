import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Banner from '../components/Banner';
import MostSearched from '../components/MostSearched';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <MostSearched />
  </Layout>
);

export default IndexPage;
