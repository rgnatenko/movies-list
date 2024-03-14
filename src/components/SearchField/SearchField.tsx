import { TextField } from '@mui/material';
import React from 'react';
import { useAppContext } from '../../App/AppContext';

export const SearchField: React.FC = () => {
  const { error, query, setQuery, handleMoviesLoading } = useAppContext();

  return (
    <TextField
      id="outlined-basic"
      label="Enter Movie Name"
      variant="outlined"
      value={query}
      onChange={e => setQuery(e.target.value)}
      onClick={handleMoviesLoading}
      error={error !== ''}
      helperText={error}
    />
  );
};
