import React, { useState } from 'react';
import Container from '../Container';
import classes from './CatProfile.module.scss';
import { useAsync } from 'react-use';
import first from 'lodash/first';

import { getBreedsByName } from '../../api';
import { BreedWithImgRef } from '../../api/types';
import BreedImage from '../BreedImage';
import CatStats from './CatStats';

import Seo from '../seo';

const CatProfile: React.FC<{ breed: string }> = ({ breed }) => {
  const [breedSearch, setBreedSearch] = useState<BreedWithImgRef>();
  const state = useAsync(async () => {
    const breeds = await getBreedsByName(breed);
    setBreedSearch(first(breeds));
  });

  return (
    <Container noGutter>
      <div className={classes.root}>
        {state.loading && 'loading...'}

        {breedSearch && (
          <div className={classes.wrapper}>
            <Seo title={breedSearch.name} />
            <div className={classes.avatarWrapper}>
              {breedSearch?.reference_image_id && (
                <BreedImage className={classes.catImg} id={breedSearch?.reference_image_id} />
              )}
            </div>
            <div className={classes.info}>
              <h1>{breedSearch?.name}</h1>
              <p>{breedSearch?.description}</p>
              <p>
                <strong>Temperament: </strong>
                {breedSearch?.temperament}
              </p>
              <p>
                <strong>Origin: </strong>
                {breedSearch?.origin}
              </p>
              <p>
                <strong>Life Span: </strong>
                {breedSearch?.life_span}
              </p>

              <CatStats
                adaptability={breedSearch?.adaptability}
                affectionLevel={breedSearch?.affection_level}
                childFriendly={breedSearch?.child_friendly}
                dogFriendly={breedSearch?.dog_friendly}
                energyLevel={breedSearch?.energy_level}
                grooming={breedSearch?.grooming}
                intelligence={breedSearch?.intelligence}
                healthIssues={breedSearch?.health_issues}
                socialNeeds={breedSearch?.social_needs}
                strangerFriendly={breedSearch?.stranger_friendly}
              />
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default CatProfile;
