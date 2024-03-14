import React, { useEffect } from 'react';
import './App.scss';
import { SelectComponent } from '../components/SelectComponent';
import { SearchField } from '../components/SearchField';
import { rating } from '../utils/rating';
import { useAppContext } from './AppContext';
import { MovieList } from '../components/MovieList';
import { Button } from '@mui/material';
import MoviesNotFound from '../components/MoviesNotFound/MoviesNotFound';

export const App = () => {
  const {
    movies,
    moviesOnPage,
    movieRating,
    movieGenre,
    setMovieGenre,
    setMovieRating,
    resetFilters,
    handleMoviesLoading,
  } = useAppContext();

  const movieNotFound = movies.length > 0 && !moviesOnPage.length;

  useEffect(() => {
    const filtersAreChosen = movieGenre.length > 0 || movieRating.length > 0;

    if (filtersAreChosen) {
      handleMoviesLoading();
    }

  }, [movieGenre, movieRating]);

  return (
    <div className="App">
      <SearchField />

      <div className="App__select-region">
        <SelectComponent
          label="Rating"
          items={rating.generateRatingArray()}
          selectedValue={movieRating}
          setSelectedValue={setMovieRating}
        />

        <SelectComponent
          label="Genre"
          items={['Action', 'Comedy', 'Drama', 'Thriller']}
          selectedValue={movieGenre}
          setSelectedValue={setMovieGenre}
        />
      </div>

      <Button
        onClick={() => resetFilters()}
        variant="contained"
        style={{ height: '100%' }}
      >
        Reset Filters
      </Button>

      {moviesOnPage.length > 0 && (
        <MovieList movies={moviesOnPage} />
      )}

      {movieNotFound && <MoviesNotFound />}
    </div>
  );
};
