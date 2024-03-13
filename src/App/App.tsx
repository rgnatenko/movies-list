import React from 'react';
import './App.scss';
import { SelectComponent } from '../components/SelectComponent';
import { SearchField } from '../components/SearchField';
import { rating } from '../utils/rating';
import { useAppContext } from './AppContext';
import { MovieList } from '../components/MovieList';

export const App = () => {
  const { movies } = useAppContext();

  return (
    <div className="App">
      <SearchField />

      <div className="select-region">
        <SelectComponent
          label="Rating"
          items={rating.generateRatingArray()}
        />

        <SelectComponent
          label="Genre"
          items={['Any genre', 'Action', 'Comedy', 'Drama', 'Thriller']}
        />
      </div>

      {movies.length > 0 && (
        <MovieList movies={movies}/>
      )}
    </div>
  );
};
