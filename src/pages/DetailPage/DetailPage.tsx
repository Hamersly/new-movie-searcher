import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import {useParams} from "react-router-dom";
import {getContentDetails} from "../../store/movieLayer/actions";
import {detailSelector} from "../../store/movieLayer/selectors";
import {clearDetail} from "../../store/movieLayer/slise";
import {DetailBox, DetailContainer, DetailInfoBox} from "./DetailPage.styles";
import {DetailResponse} from "../../types/types";
import {Loader} from "../../components/Loader/Loader";

interface Params {
  info: string
}

export const DetailPage: FC = () => {
  const [open, setOpen] = React.useState(false);
  const {info}: Params = useParams();
  const value = info.split("_")
  const format = value[0]
  const id = value[1]

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearDetail({}))
    dispatch(getContentDetails({format, id}));
  }, [format]);

  const detail = useSelector(detailSelector);
  const {title, original_title, name, original_name, backdrop_path, overview}: DetailResponse = detail

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <DetailContainer>
      {detail ?
        <DetailBox>
          <Typography variant="h4" align="center" mb={2}>
            {format === "movie" ? title : name}
          </Typography>
          <Typography variant="h5" align="center">
            {format === "movie" ? original_title : original_name}
          </Typography>
          <DetailInfoBox>
            <img
              onClick={handleToggle}
              width="100%"
              alt=""
              src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            />
            <Backdrop
              sx={{color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1}}
              open={open}
              onClick={handleClose}
            >
              <img
                width="100%"
                alt=''
                src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
              />
            </Backdrop>
          </DetailInfoBox>
          <DetailInfoBox>
            {overview ? <Typography variant="h6" align="center">{overview}</Typography>
              :
              <Typography variant="h6" align="center">Нет информации о сюжете</Typography>
            }
          </DetailInfoBox>
        </DetailBox>
        :
        <Loader/>
      }
    </DetailContainer>
  );
};