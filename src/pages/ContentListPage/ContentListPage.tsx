import React, {FC, useEffect} from "react";
import {contentSelector} from "../../store/movieLayer/selectors";
import {useDispatch, useSelector} from "react-redux";
import {getContentList} from "../../store/movieLayer/actions";
import {HandleChangeFunc, ListResponse} from "../../types/types";
import {ContentList} from "../../components/ContentList/ContentList";

interface Props {
  format: string
}

export const ContentListPage: FC<Props> = ({format}) => {

  const {page, results, total_pages}: ListResponse = useSelector(contentSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContentList({format, page}));
  }, [format]);

  const handleChange: HandleChangeFunc = (event: object, value: number) => {
    dispatch(getContentList({format, page: value}));
  };

  return <ContentList
    format={format}
    page={page}
    results={results}
    total_pages={total_pages}
    handleChange={handleChange}
  />
};
