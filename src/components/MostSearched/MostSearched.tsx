import React from 'react';
import classes from './MostSearched.module.scss';
import Container from '../Container';
import { Link } from 'gatsby';

export default function MostSearched() {
  return (
    <Container className={classes.root}>
      Most Searched breeds
      <div>
        <p>66+ Breeds For you to discover</p>
        <Link to="/">SEE MORE</Link>
      </div>
    </Container>
  );
}
