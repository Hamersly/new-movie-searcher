import {Box} from "@mui/material";
import React, {FC, useEffect} from "react";
import {FirstTopography} from "./FirstPage.styles";
import {useDispatch, useSelector} from "react-redux";
import {getTopList} from "../../store/movieLayer/actions";
import {topSelector} from "../../store/movieLayer/selectors";
import {ContentUnit} from "../../components/ContentUnit/ContentUnit";
import {Loader} from "../../components/Loader/Loader";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ScrollToTop from "react-scroll-to-top";
import {Footer} from "../../components/Footer/Footer";

export const FirstPage: FC = () => {
  const results = useSelector(topSelector)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopList());
  }, []);

  return (
    <Box>
      <FirstTopography variant="h4">Топ 10 фильмов</FirstTopography>

      {results.length > 0 ? results.slice(0, 10).map((result: any) =>
          <ContentUnit format={'movie'} content={result} key={result.id}/>)
        :
        <Loader/>
      }

      {results.length > 0 && <Footer/>}

      <ScrollToTop
        smooth
        component={<ArrowUpwardIcon
          fontSize="large"/>}
        width={'50'}
        height={'50'}
        style={{
          borderRadius: '50%',
          backgroundColor: 'grey',
          width: '50px',
          height: '50px',
          boxShadow: '0 0 10px 2px black'
        }}
      />

    </Box>
  );
};