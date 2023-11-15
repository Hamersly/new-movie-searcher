import React, {FC} from "react";
import {TitleBox, TitleLink, TitleOneTopography, TitleTwoTopography} from "./Title.styled";

export const Title: FC = () => {
  return (
    <TitleBox>
      <TitleOneTopography variant="h2">
        <TitleLink to="/">ВидеоПоиск</TitleLink>
      </TitleOneTopography>
      <TitleTwoTopography variant="h4">
        <TitleLink to="/movie">Фильмы</TitleLink> и <TitleLink to="/tv">Сериалы</TitleLink>
      </TitleTwoTopography>
    </TitleBox>
  );
};