import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from '../Container';
import classes from './Banner.module.scss';

const Banner = () => {
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
      <div>
        <img src={publicURL} className={classes.image} alt="cat logo" />
        <p className={classes.title}>Get to know more about your cat breed</p>
      </div>
    </Container>
  );
};

export default Banner;
