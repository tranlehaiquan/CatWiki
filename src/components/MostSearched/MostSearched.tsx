import React, { useState } from 'react';
import { Link } from 'gatsby';
import classes from './MostSearched.module.scss';
import Container from '../Container';
import { getListBreeds } from '../../api';
import { useAsync } from 'react-use';
import { Breed } from '../../api/types';

const MostSearched: React.FC = () => {
  const [searchResult, setSearchResult] = useState<Breed[]>([]);
  const state = useAsync(async () => {
    const breeds = await getListBreeds();
    setSearchResult(breeds);
  });

  return (
    <Container className={classes.root}>
      <p className={classes.title}>Most Searched breeds</p>
      <div className={classes.headingWrapper}>
        <p className={classes.heading}>66+ Breeds For you to discover</p>
        <Link to="/">SEE MORE</Link>
      </div>
      <div>
        {state.loading && 'loading...'}
        <div className={classes.breeds}>
          {searchResult.slice(0, 4).map((breed) => (
            <div key={breed.id} className={classes.breed}>
              <img src={breed.image.url} className={classes.breedImg} />
              <p>{breed.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default MostSearched;
