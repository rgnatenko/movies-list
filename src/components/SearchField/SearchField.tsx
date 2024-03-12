import { TextField } from '@mui/material';
import React from 'react';

type Props = {
  value: string
  onChange: (arg: string) => void
};

export const SearchField: React.FC<Props> = ({ value, onChange }) => {
  return (
    <TextField
      id="outlined-basic"
      label="Enter Movie Name"
      variant="outlined"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
};
