import { Movie } from '../types/Movie';

const BASE_URL = process.env.REACT_APP_BASE_URL as string;

export const getMovies = async(): Promise<Movie[]> => {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  return response.json();
};
