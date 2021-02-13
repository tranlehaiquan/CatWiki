import axios from '../customAxios';
import { Breed, BreedImage, BreedWithImg, BreedWithImgRef } from './types';

type ListBreedParams = {
  attachBreed?: string;
  page?: number;
  limit?: number;
};

export const getListBreeds = async (params?: ListBreedParams): Promise<BreedWithImg[]> => {
  const { data } = await axios.get('/breeds', {
    params,
  });

  return data;
};

export const getBreedsByName = async (name: string = ''): Promise<BreedWithImgRef[]> => {
  const { data } = await axios.get('/breeds/search', {
    params: { q: name },
  });

  return data;
};

export const getImageById = async (id: string): Promise<BreedImage> => {
  const { data } = await axios.get(`/images/${id}`);

  return data;
};