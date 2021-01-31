import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Banner from '../components/Banner';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
  </Layout>
);

export default IndexPage;
