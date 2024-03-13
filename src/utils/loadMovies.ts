import { Movie } from '../types/Movie';

interface Arguments {
  getMovies: () => Promise<Movie[]>;
  setMovies: (movies: Movie[]) => void;
}

type LoadMovies = (args: Arguments) => void;

export const loadMovies: LoadMovies = async ({ getMovies, setMovies }) => {
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
  } catch (e) {
    console.log(e);
  }
};
