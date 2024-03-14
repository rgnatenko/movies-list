import { Movie } from '../types/Movie';

interface Arguments {
  getMovies: () => Promise<Movie[]>;
  setMovies: (movies: Movie[]) => void;
  setError: (arg: string) => void
}

type LoadMovies = (args: Arguments) => void;

export const loadMovies: LoadMovies = async ({
  getMovies,
  setMovies,
  setError,
}) => {

  const nameInStorage = 'movies';
  const moviesInStorage = localStorage.getItem(nameInStorage);

  if (moviesInStorage) {
    setMovies(JSON.parse(moviesInStorage));

    return;
  }

  try {
    const movies = await getMovies();

    setMovies(movies);
    localStorage.setItem(nameInStorage, JSON.stringify(movies));
  } catch {
    setError('Ooops error happened while loading movies, please try to reload page');
  }
};
