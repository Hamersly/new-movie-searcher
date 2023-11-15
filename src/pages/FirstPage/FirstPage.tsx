import React, {FC, useEffect} from "react";
import {FirstContent, FirstTopography} from "./FirstPage.styled";
import {useDispatch, useSelector} from "react-redux";
import {getTopList} from "../../store/movieLayer/actions";
import {topSelector} from "../../store/movieLayer/selectors";
import {ContentUnit} from "../../components/ContentUnit/ContentUnit";
import {Loader} from "../../components/UI/Loader/Loader";
import {ContentPageBox} from "../ContentListPage/ContentListPage.styled";
import {Scroll} from "../../components/UI/Scroll/Scroll";

export const FirstPage: FC = () => {
  const results = useSelector(topSelector)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopList());
  }, [dispatch]);

  return (
    <ContentPageBox>
      <FirstTopography variant="h4">Топ 10 фильмов</FirstTopography>
      <FirstContent>
        {results.length > 0 ? results.slice(0, 10).map((result: any) =>
            <ContentUnit format={'movie'} content={result} key={result.id}/>)
          :
          <Loader/>
        }
      </FirstContent>
      <Scroll/>
    </ContentPageBox>
  );
};