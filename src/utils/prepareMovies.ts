import { Movie } from '../types/Movie';
import { normalizeString } from './normalizeString';

interface Arguments {
  movies: Movie[],
  query: string,
  movieGenre: string[],
  movieRating: number[],
}

export const prepareMovies = ({
  movies,
  movieGenre,
  movieRating,
  query,
}: Arguments) => {
  return movies
    .filter(movie => {
      if (query) {
        const normalizedTitle = normalizeString(movie.title);
        const normalizedQuery = normalizeString(query);

        return normalizedTitle.includes(normalizedQuery);
      }

      return true;
    })
    .filter(movie => {
      if (movieGenre.length > 0) {
        const normalizedMovieGenre = normalizeString(movie.genre);

        return movieGenre
          .every(genre => normalizedMovieGenre
            .includes(normalizeString(genre)));
      }

      return true;
    })
    .filter(movie => {
      if (movieRating.length > 0) {
        return movieRating.includes(Math.round(movie.rating));
      }

      return true;
    });
};
