import {FC, useEffect, useState} from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {FilterControl} from "./SortedContent.styles";
import {useDispatch} from "react-redux";
import {changeSort} from "../../store/movieLayer/slise";

export const SortedContent: FC = () => {
  const [sorted, setSorted] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    setSorted(event.target.value);
  };

  useEffect(() => {
    if (sorted.length > 0) dispatch(changeSort(sorted));

  }, [sorted]);

  return (
    <div>
      <FilterControl>
        <InputLabel>Отображать</InputLabel>
        <Select
          value={sorted}
          onChange={handleChange}
          autoWidth
          label="Отображать"
        >
          <MenuItem value={"popularity"}>
            <em>По популярности</em>
          </MenuItem>
          <MenuItem value={"release_date"}>По дате</MenuItem>
          <MenuItem value={"title"}>По названию</MenuItem>
        </Select>
      </FilterControl>
    </div>
  );
};