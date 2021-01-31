import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import classes from './Footer.module.scss';
import Container from '../Container';

export default function Footer() {
  const {
    file: { publicURL },
  } = useStaticQuery(graphql`
    {
      file(name: { eq: "CatwikiLogoWhite" }) {
        id
        publicURL
      }
    }
  `);

  return (
    <Container className={classes.root}>
      <footer className={classes.footer}>
        <img src={publicURL} alt="logo cat" />© {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </Container>
  );
}
