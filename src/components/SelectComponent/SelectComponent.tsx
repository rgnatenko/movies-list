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

      <Select>
        {items.map((item, index) => {
          const itemIsSring = typeof item === 'string';

          return (
            <MenuItem
              key={itemIsSring
                ? item
                : `rating-${item.rating}-${index}`}
            >
              <FormControlLabel
                control={<Checkbox onChange={(e) => e.preventDefault()} />}
                label={itemIsSring
                  ? item
                  : <StarsBlock stars={item.stars} />}
              />
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
