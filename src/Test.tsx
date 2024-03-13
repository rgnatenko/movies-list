import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { Rating } from './types/Rating';
import { useAppContext } from './App/AppContext';
import { StarsBlock } from './components/StarsBlock';

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 300,
    },
  },
};

type Props = {
  label: string,
  items: (string | Rating)[],
  selectedValue: number[] | string[]
}

export const SelectComponent: React.FC<Props> = ({ label, items, selectedValue }) => {
  const {
    setMovieRating,
    setMovieGenre,
  } = useAppContext();

  const handleChange = (event: SelectChangeEvent<number[] | string[]>) => {
    const { value } = event.target;

    if (typeof value[1] !== 'string') {
      setMovieRating(value as number[]);

      return;
    }

    setMovieGenre(value as string[]);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>

        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedValue}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {items.map((item) => {
            if (typeof item === 'string') {
              return (
                <MenuItem key={item} value={item}>
                  <Checkbox checked={(selectedValue as string[]).includes(item)} />
                  <ListItemText primary={item} />
                </MenuItem>
              );
            }

            return (
              <MenuItem key={item.rating} value={item.rating}>
                <Checkbox checked={(selectedValue as number[]).includes(item.rating)} />
                <StarsBlock stars={item.stars} />
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};
