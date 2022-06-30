import React, {FC} from "react";
import {TitleBox, TitleOneTopography, TitleTwoTopography} from "./TitlePage.styles";

export const TitlePage: FC = () => {
  return (
    <TitleBox>
      <TitleOneTopography variant="h2">
        ВидеоПоиск
      </TitleOneTopography>
      <TitleTwoTopography variant="h4">
        фильмы и сериалы
      </TitleTwoTopography>

    </TitleBox>
  );
};