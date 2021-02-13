import React from 'react';
import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

import Link from '../Link';
import Container from '../Container';
import classes from './WhyShouldHaveCat.module.scss';

interface Props {
  className?: string;
}

const WhyShouldHaveCat: React.FC<Props> = () => {
  const data = useStaticQuery(graphql`
    query images {
      image1: file(name: { eq: "whyShouldHaveCats1" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(name: { eq: "whyShouldHaveCats3" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(name: { eq: "whyShouldHaveCats2" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Container>
      <div className={classes.root}>
        <div className={classes.info}>
          <h3>Why should you have a cat?</h3>
          <p>
            Having a cat around you can actually trigger the release of calming chemicals in your body which lower your
            stress and anxiety leves
          </p>

          <Link to="/">READ MORE</Link>
        </div>

        <div className={classes.images}>
          <div className={classes.image1}>
            <Image fluid={data.image1.childImageSharp.fluid} />
          </div>
          <div className={classes.image2}>
            <Image fluid={data.image2.childImageSharp.fluid} />
          </div>
          <div className={classes.image3}>
            <Image fluid={data.image3.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhyShouldHaveCat;
