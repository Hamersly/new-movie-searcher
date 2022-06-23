import React, {FC} from "react";
import {TitleBox, TitleImgBox, TitleOneTopography, TitleTwoTopography} from "./TitlePage.styles";
import image from "../../assets/titlePoster.jpg"

export const TitlePage: FC = () => {
  return (
    <TitleBox>
      <TitleOneTopography variant="h2">
        ВидеоПоиск
      </TitleOneTopography>
      <TitleTwoTopography variant="h4">
        фильмы и сериалы
      </TitleTwoTopography>
      <TitleImgBox>
        <img
          width="100%"
          alt=''
          src={image}
        />
      </TitleImgBox>
    </TitleBox>
  );
};