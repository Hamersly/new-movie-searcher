import {Box} from "@mui/material";
import React, {FC, useEffect} from "react";
import {FirstTopography} from "./FirstPage.styles";
import {useDispatch, useSelector} from "react-redux";
import {getTopList} from "../../store/movieLayer/actions";
import {topSelector} from "../../store/movieLayer/selectors";

export const FirstPage: FC = () => {
  const results = useSelector(topSelector)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopList());
  }, []);

  console.log(results)
  return (
    <Box>
      <FirstTopography variant="h4">Топ 10 фильмов</FirstTopography>

    </Box>
  );
};