import Container from '../Container';
import { Link, useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import classes from './Header.module.scss';

export const Header: React.FC<{ siteTitle: string }> = ({ siteTitle }) => {
  const {
    file: { publicURL },
  } = useStaticQuery(graphql`
    {
      file(name: { eq: "CatwikiLogo" }) {
        id
        publicURL
      }
    }
  `);

  return (
    <header className={classes.root}>
      <Container noGutter>
        <h1 className={classes.logo}>
          <Link to="/">
            <img src={publicURL} title={siteTitle} alt={siteTitle} />
          </Link>
        </h1>
      </Container>
    </header>
  );
};

export default Header;
