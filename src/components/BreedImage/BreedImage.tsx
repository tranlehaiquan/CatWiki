import React, { useState } from 'react';
import { useAsync } from 'react-use';
import isEmpty from 'lodash/isEmpty';
import { getImageById } from '../../api';
import { BreedImage as IBreedImage } from '../../api/types';

type Props = {
  id: string;
  className?: string;
};

const BreedImage: React.FC<Props> = ({ id, className = '' }) => {
  const [imageSearch, setImageSearch] = useState<IBreedImage>();
  const state = useAsync(async () => {
    const breedImg = await getImageById(id);
    setImageSearch(breedImg);
  });

  return (
    <>
      <div>{state.loading && 'loading'}</div>
      {!isEmpty(imageSearch) && (
        <img className={className} src={imageSearch?.url} width={imageSearch?.width} height={imageSearch?.height} />
      )}
    </>
  );
};

export default BreedImage;
