import React, { useState } from 'react';
import { useAsyncFn, useDebounce } from 'react-use';
import { searchBreedsByName } from '../../api';
import { Breed } from '../../api/types';
import classes from './InputSearch.module.scss';

import Input from './Input';

const InputSearch = () => {
  const [searchResult, setSearchResult] = useState<Breed[]>([]);
  const [val, setVal] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const [asyncState, axiosFn] = useAsyncFn(async (breeds: string) => {
    if (!breeds) {
      setSearchResult([]);
      return;
    }
    const data = await searchBreedsByName(breeds);
    setSearchResult(data);
    setIsEmpty(data.length === 0);
  }, []);

  useDebounce(
    () => {
      setIsEmpty(false);
      axiosFn(val);
    },
    500,
    [val],
  );

  const handleBlur = () => {
    setSearchResult([]);
    setVal('');
  };

  return (
    <div className={classes.root}>
      <Input
        value={val}
        placeholder="Debounced input"
        onChange={({ currentTarget }) => {
          setVal(currentTarget.value);
        }}
        onBlur={handleBlur}
      />
      {asyncState.loading && <div className={classes.options}>Loading...</div>}
      {isEmpty && <div className={classes.options}>No result with <strong>{val}</strong></div>}
      {!!searchResult.length && !asyncState.loading && (
        <div className={classes.options}>
          {searchResult.map((breed) => (
            <div key={breed.id} className={classes.option}>
              {breed.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputSearch;
