import axios from '../customAxios';
import { Breed } from './types';

type ListBreedParams = {
  attachBreed?: string;
  page?: number;
  limit?: number;
};

export const getListBreeds = async (params?: ListBreedParams): Promise<Breed[]> => {
  const { data } = await axios.get('/breeds', {
    params,
  });

  return data;
};

export const searchBreedsByName = async (name: string = ''): Promise<Breed[]> => {
  const { data } = await axios.get('/breeds/search', {
    params: { q: name },
  });

  return data;
};
