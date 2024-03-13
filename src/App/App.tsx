import React from 'react';
import './App.scss';
import { SelectComponent } from '../components/SelectComponent';
import { SearchField } from '../components/SearchField';
import { rating } from '../utils/rating';
import { useAppContext } from './AppContext';
import { MovieList } from '../components/MovieList';

export const App = () => {
  const { moviesOnPage, movieRating, movieGenre, setMovieGenre, setMovieRating } = useAppContext();

  return (
    <div className="App">
      <SearchField />

      <div className="select-region">
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

      {moviesOnPage.length > 0 && (
        <MovieList movies={moviesOnPage} />
      )}
    </div>
  );
};
