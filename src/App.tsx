/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import './App.css';
import { SelectComponent } from './components/SelectComponent';
import { SearchField } from './components/SearchField';
import { generateRatingArray } from './utils/generateRatingArray';

const App = () => {

  return (
    <div className="App">
      <SearchField value="" onChange={() => { }} />

      <div className="select-region">
        <SelectComponent
          label="Rating"
          items={generateRatingArray()}
        />

        <SelectComponent
          label="Genre"
          items={[
            'Any genre',
            'Action',
            'Comedy',
            'Drama',
            'Thriller'
          ]}
        />
      </div>
    </div>
  );
};

export default App;
