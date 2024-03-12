import { Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { Rating } from '../../types/Rating';
import { StarsBlock } from '../StarsBlock';

type Props = {
  label: string,
  items: (string | Rating)[]
}

export const SelectComponent: React.FC<Props> = ({ label, items }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>

      <Select className="w100">
        {items.map((item, index) => (
          <MenuItem key={typeof item === 'string' ? item : item.stars[index]}>
            <FormControlLabel
              control={<Checkbox onChange={(e) => e.preventDefault()}/>}
              label={typeof item === 'string'
                ? item
                : <StarsBlock stars={item.stars} />}
            />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
