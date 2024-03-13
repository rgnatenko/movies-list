/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext, useState } from 'react';
import { Movie } from '../types/Movie';

interface AppContextType {
  movies: Movie[],
  setMovies: (arg: Movie[]) => void,
}

const AppContext = createContext<AppContextType>({
  movies: [],
  setMovies: () => {},
});

type AppContextProviderType = {
  children: React.ReactNode
};

export const AppContextProvider: React.FC<AppContextProviderType>
= ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const value = {
    movies,
    setMovies,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
