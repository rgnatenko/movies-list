/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext, useMemo, useState } from 'react';
import { Movie } from '../types/Movie';
import { prepareMovies } from '../utils/prepareMovies';
import { loadMovies } from '../utils/loadMovies';
import { getMovies } from '../utils/getMovies';

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
  error: string,
  setError: (arg: string) => void,
  resetFilters: () => void,
  handleMoviesLoading: () => void
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
  error: '',
  setError: () => { },
  resetFilters: () => { },
  handleMoviesLoading: () => { },
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
    const [error, setError] = useState('');

    const moviesOnPage = prepareMovies({ movies, movieGenre, movieRating, query });

    const resetFilters = () => {
      setMovieGenre([]);
      setMovieRating([]);
      setQuery('');
    };

    const handleMoviesLoading = () => loadMovies({
      getMovies,
      setMovies,
      setError,
    });

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
      resetFilters,
      handleMoviesLoading,
      error,
      setError,
    }), [movies, movieGenre, movieRating, query]);

    return (
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    );
  };

export const useAppContext = () => useContext(AppContext);
