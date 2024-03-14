//#region IMPORTS
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { Rating } from '../../types/Rating';
import { StarsBlock } from '../StarsBlock';
import { MenuProps, selectStyle } from './Select.styles';
//#endregion

type Props = {
  label: string,
  items: (string | Rating)[],
  selectedValue: number[] | string[],
  setSelectedValue: ((arg: number[]) => void) | ((arg: string[]) => void)
}

export const SelectComponent: React.FC<Props> = ({
  label,
  items,
  selectedValue,
  setSelectedValue
}) => {
  const valueIsNumeric = (selectedValue as number[])
    .every((el: number) => typeof el === 'number');

  const handleChange = (event: SelectChangeEvent<number[] | string[]>) => {
    const { value } = event.target;

    setSelectedValue(value as string[] & number[]);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel className="label">{label}</InputLabel>

        <Select
          multiple
          sx={selectStyle}
          value={selectedValue}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          renderValue={(selected) => valueIsNumeric
            ? selected.map(el => (`${el}/10`)).join(', ')
            : selected.join(', ')}
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
