import {FC, useState} from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {FilterControl} from "./FilterContent.styles";

export const FilterContent: FC = () => {

  const [filter, setFilter] = useState('Рейтинг');

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <FilterControl>
        <InputLabel>Фильтр</InputLabel>
        <Select
          value={filter}
          onChange={handleChange}
          autoWidth
          label="Фильтр"
        >
          <MenuItem value={"Рейтинг"}>
            <em>Рейтинг</em>
          </MenuItem>
          <MenuItem value={"Дата"}>Дата</MenuItem>
          <MenuItem value={"Название"}>Название</MenuItem>
        </Select>
      </FilterControl>
    </div>
  );
};