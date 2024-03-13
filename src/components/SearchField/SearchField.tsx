import { TextField } from '@mui/material';
import React from 'react';
import { useAppContext } from '../../App/AppContext';
import { loadMovies } from '../../utils/loadMovies';
import { getMovies } from '../../utils/getMovies';

export const SearchField: React.FC = () => {
  const { setMovies } = useAppContext();
  const handleClick = () => loadMovies({ getMovies, setMovies });

  return (
    <TextField
      id="outlined-basic"
      label="Enter Movie Name"
      variant="outlined"
      onClick={handleClick}
      onBlur={() => setMovies([])}
    />
  );
};
