import React from 'react';
import { Movie } from '../../types/Movie';
import { StarsBlock } from '../StarsBlock';
import { rating } from '../../utils/rating';

type Props = {
  movie: Movie
}

export const MovieItem: React.FC<Props> = ({ movie }) => {
  const stars = rating.createMovieRating(movie.rating);

  return (
    <div className="movie">
      <div className="movie__main-info">
        <h5>{movie.title}</h5>
        <StarsBlock stars={stars} />
      </div>

      <div className="movie__genre">{movie.genre}</div>
    </div>
  );
};
