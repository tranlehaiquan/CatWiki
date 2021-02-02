import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Banner from '../components/Banner';
import MostSearched from '../components/MostSearched';
import WhyShouldHaveCat from '../components/WhyShouldHaveCat';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <MostSearched />
    <WhyShouldHaveCat />
  </Layout>
);

export default IndexPage;
