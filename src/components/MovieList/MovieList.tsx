import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieItem } from '../MovieItem';

type Props = {
  movies: Movie[]
};

export const MovieList: React.FC<Props> = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieItem
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
  );
};
