import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Backdrop from "@mui/material/Backdrop";
import {useParams} from "react-router-dom";
import {getContentDetails} from "../../store/movieLayer/actions";
import {detailSelector} from "../../store/movieLayer/selectors";
import {clearDetail} from "../../store/movieLayer/slise";
import {DetailBox, DetailInfoBox} from "./DetailPage.styled";
import {IDetailResponse} from "../../types/types";
import {Loader} from "../../components/UI/Loader/Loader";
import {UnitTopography} from "../../components/ContentUnit/CounterUnit.styled";
import {ContentPageBox} from "../ContentListPage/ContentListPage.styled";

interface IParams {
  info: string
}

export const DetailPage: FC = () => {
  const [open, setOpen] = React.useState(false);
  const {info}: IParams = useParams();
  const value = info.split("_")
  const format = value[0]
  const id = value[1]

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearDetail({}))
    dispatch(getContentDetails({format, id}));
  }, [format, dispatch, id]);

  const detail = useSelector(detailSelector);
  const {title, original_title, name, original_name, backdrop_path, overview}: IDetailResponse = detail

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <ContentPageBox>
      {detail ?
        <DetailBox>
          <UnitTopography variant="h4" align="center" mb={2}>
            {format === "movie" ? title : name}
          </UnitTopography>
          <UnitTopography variant="h5" align="center">
            {format === "movie" ? original_title : original_name}
          </UnitTopography>
          <DetailInfoBox>
            <img
              onClick={handleToggle}
              alt=""
              src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
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
                width="100%"
                height="auto"
                alt=''
                src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
              />
            </Backdrop>
            {overview ? <UnitTopography variant="h6" align="center" mt={4}>{overview}</UnitTopography>
              :
              <Loader/>
            }
          </DetailInfoBox>
        </DetailBox>
        :
        <Loader/>
      }
    </ContentPageBox>
  );
};