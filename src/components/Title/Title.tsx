import {Box} from "@mui/material";
import React, {FC} from "react";
import {TitleLink, TitleOneTopography, TitleTwoTopography} from "./Title.styles";

export const Title: FC = () => {
  return (
    <Box>
      <TitleOneTopography variant="h2">
        <TitleLink to="/">ВидеоПоиск</TitleLink>
      </TitleOneTopography>
      <TitleTwoTopography variant="h4">
        <TitleLink to="/movie">Фильмы</TitleLink> и <TitleLink to="/tv">Сериалы</TitleLink>
      </TitleTwoTopography>

    </Box>
  );
};