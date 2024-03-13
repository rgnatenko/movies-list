/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext, useMemo, useState } from 'react';
import { Movie } from '../types/Movie';
import { prepareMovies } from '../utils/prepareMovies';

interface AppContextType {
  movies: Movie[],
  moviesOnPage: Movie[],
  setMovies: (arg: Movie[]) => void,
  movieRating: number[],
  setMovieRating: (arg: number[]) => void,
  movieGenre: string[],
  setMovieGenre: (arg: string[]) => void,
  query: string,
  setQuery: (arg: string) => void,
}

const AppContext = createContext<AppContextType>({
  movies: [],
  moviesOnPage: [],
  setMovies: () => { },
  movieRating: [],
  setMovieRating: () => { },
  movieGenre: [],
  setMovieGenre: () => { },
  query: '',
  setQuery: () => { },
});

type AppContextProviderType = {
  children: React.ReactNode
};

export const AppContextProvider: React.FC<AppContextProviderType>
  = ({ children }) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [movieRating, setMovieRating] = useState<number[]>([]);
    const [movieGenre, setMovieGenre] = useState<string[]>([]);
    const [query, setQuery] = useState('');

    const moviesOnPage = prepareMovies({movies, movieGenre, movieRating, query});

    const value = useMemo(() => ({
      movies,
      setMovies,
      movieRating,
      setMovieRating,
      movieGenre,
      setMovieGenre,
      query,
      setQuery,
      moviesOnPage,
    }), [movies, movieGenre, movieRating, query]);

    return (
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    );
  };

export const useAppContext = () => useContext(AppContext);
