import React from 'react';
import { GatsbyLinkProps, Link } from 'gatsby';
import classes from './index.module.scss';

interface CustomGatsbyLink extends Omit<GatsbyLinkProps<Record<string, unknown>>, 'ref'> {}

const CustomLink: React.FC<CustomGatsbyLink> = (props) => (
  <Link className={classes.link} {...props}>
    {props.children}
  </Link>
);

export default CustomLink;
