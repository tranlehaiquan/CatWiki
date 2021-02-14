/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Footer from '../Footer';
import classes from './Layout.module.scss';

import Header from '../Header';

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={classes.root}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className={classes.child}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
