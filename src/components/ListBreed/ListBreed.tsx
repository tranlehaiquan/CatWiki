import React, { useState } from 'react';
import classes from './ListBreed.module.scss';
import { useAsync } from 'react-use';

import Seo from '../seo';
import Link from '../Link';
import Container from '../Container';
import { getListBreeds } from '../../api';
import { BreedWithImg } from '../../api/types';

const ListBreed: React.FC = () => {
  const [searchResult, setSearchResult] = useState<BreedWithImg[]>([]);
  const state = useAsync(async () => {
    const breeds = await getListBreeds({ limit: 10 });
    setSearchResult(breeds);
  });
  const title = 'Top 10 most searched breeds';

  return (
    <Container noGutter className={classes.root}>
      <Seo title={title} />
      <p className={classes.title}>{title}</p>
      <div>
        {state.loading && 'loading...'}
        <div className={classes.breeds}>
          {searchResult.map((breed, index) => (
            <Link to={`/breeds/${breed.name}`} key={breed.id} className={classes.breed}>
              <div className={classes.avatar}>
                <img src={breed.image.url} className={classes.breedImg} />
              </div>
              <div className={classes.info}>
                <h3 className={classes.breedName}>{index + 1}. {breed.name}</h3>
                <p>{breed.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ListBreed;
