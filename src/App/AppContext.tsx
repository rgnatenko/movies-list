/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext, useState } from 'react';
import { Movie } from '../types/Movie';

interface AppContextType {
  movies: Movie[],
  setMovies: (arg: Movie[]) => void,
  movieRating: number[],
  setMovieRating: (arg: number[]) => void,
  movieGenre: string[],
  setMovieGenre: (arg: string[]) => void,
}

const AppContext = createContext<AppContextType>({
  movies: [],
  setMovies: () => {},
  movieRating: [],
  setMovieRating: () => {},
  movieGenre: [],
  setMovieGenre: () => {},
});

type AppContextProviderType = {
  children: React.ReactNode
};

export const AppContextProvider: React.FC<AppContextProviderType>
= ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [movieRating, setMovieRating] = useState<number[]>([]);
  const [movieGenre, setMovieGenre] = useState<string[]>([]);

  const value = {
    movies,
    setMovies,
    movieRating,
    setMovieRating,
    movieGenre,
    setMovieGenre,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
