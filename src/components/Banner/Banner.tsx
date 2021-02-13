import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from '../Container';
import InputSearch from '../../components/InputSearch';
import classes from './Banner.module.scss';
import cls from 'clsx';

const Banner = () => {
  const {
    file1: { publicURL },
    file2: { publicURL: publicURL2 },
  } = useStaticQuery(graphql`
    {
      file1: file(name: { eq: "CatwikiLogoWhite" }) {
        id
        publicURL
      }
      file2: file(name: { eq: "CatwikiLogoWhiteTextOnly" }) {
        id
        publicURL
      }
    }
  `);

  return (
    <Container className={classes.root}>
      <div>
        <img src={publicURL} className={cls(classes.image, classes.imageDesktop)} alt="cat logo" />
        <img src={publicURL2} className={cls(classes.image, classes.imageMobile)} alt="cat logo" />
        <p className={classes.title}>Get to know more about your cat breed</p>
      </div>
      <InputSearch />
    </Container>
  );
};

export default Banner;
