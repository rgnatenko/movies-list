import { TextField } from '@mui/material';
import React from 'react';
import { useAppContext } from '../../App/AppContext';
import { searchFieldStyle } from './SearchField.styles';

export const SearchField: React.FC = () => {
  const { error, query, setQuery, handleMoviesLoading } = useAppContext();

  return (
    <TextField
      sx={searchFieldStyle}
      label="Enter Movie Name"
      InputLabelProps={{ className: 'label' }}
      variant="outlined"
      value={query}
      onChange={e => setQuery(e.target.value)}
      onClick={handleMoviesLoading}
      error={error !== ''}
      helperText={error}
    />
  );
};
