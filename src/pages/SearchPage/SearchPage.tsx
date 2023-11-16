import React, {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {searchListSelector, searchQuerySelector} from "../../store/movieLayer/selectors";
import {searchValue} from "../../store/movieLayer/actions";
import {IHandleChangeFunc, ISearchResponse} from "../../types/types";
import {ContentList} from "../../components/ContentList/ContentList";
import {ContentPageBox} from "../ContentListPage/ContentListPage.styled";
import {UnitTopography} from "../../components/ContentUnit/CounterUnit.styled";
import {Loader} from "../../components/UI/Loader/Loader";

export const SearchPage: FC = () => {
  const {page, results, total_pages}: ISearchResponse = useSelector(searchListSelector);
  const query = useSelector(searchQuerySelector)
  const dispatch = useDispatch();

  const handleChange: IHandleChangeFunc = (event: object, value: number) => {
    dispatch(searchValue({query, page: value}));
  };

  return (
    <ContentPageBox>
      {results !== undefined && results.length ?
        <ContentList
          format={'movie'}
          page={page}
          results={results}
          total_pages={total_pages}
          handleChange={handleChange}
        />
        :
        results !== undefined && !results.length ?
          <UnitTopography variant="h4" align="center" mb={2}>
            Ничего не найдено:(
          </UnitTopography>
        :
          <Loader/>
      }
    </ContentPageBox>
  )
};
