import React, {FC} from "react";
import Backdrop from "@mui/material/Backdrop";
import {UnitBox, UnitImageBox, UnitInfoBox, UnitLink, UnitTopography} from "./CounterUnit.styled";
import {IContent} from "../../types/types";

interface IProps {
  format?: string;
  content: any;
}

export const ContentUnit: FC<IProps> = ({format, content}) => {
  const [open, setOpen] = React.useState(false);
  const {
    poster_path,
    id,
    title,
    name,
    original_title,
    original_name,
    release_date,
    first_air_date,
    popularity
  }: IContent = content

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <UnitBox>
      <UnitImageBox>
        <img
          onClick={handleToggle}
          width="100px"
          alt=''
          src={`https://image.tmdb.org/t/p/w200${poster_path}`}
          onError={({currentTarget}) => {
            currentTarget.onerror = null
            currentTarget.src = `${process.env.REACT_APP_ERROR_IMG}`
          }}
        />
        <Backdrop
          sx={{color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1}}
          open={open}
          onClick={handleClose}

        >
          <img
            width="auto"
            height="100%"
            alt=''
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            onError={({currentTarget}) => {
              currentTarget.onerror = null
              currentTarget.src = `${process.env.REACT_APP_ERROR_IMG}`
            }}

          />
        </Backdrop>
      </UnitImageBox>
      <UnitLink to={`${format}_${id}`}>
        <UnitInfoBox>

          <UnitTopography variant="h6">
            {format === "movie" ? title :
              format === "tv" && name}
          </UnitTopography>

          <UnitTopography mt={2} variant="inherit">
            {format === "movie" ? original_title :
              format === "tv" && original_name}
          </UnitTopography>

          <UnitTopography mt={2} variant="inherit">
            Премьера: {format === "movie" ? release_date :
            format === "tv" && first_air_date}
          </UnitTopography>

          <UnitTopography mt={2} variant="inherit">
            Рейтинг: {popularity}
          </UnitTopography>

        </UnitInfoBox>
      </UnitLink>
    </UnitBox>
  );
};
