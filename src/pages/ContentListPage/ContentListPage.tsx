import React, {FC, useEffect} from "react";
import {contentSelector, sortedSelector} from "../../store/movieLayer/selectors";
import {useDispatch, useSelector} from "react-redux";
import {getContentList} from "../../store/movieLayer/actions";
import {IHandleChangeFunc, IListResponse} from "../../types/types";
import {ContentList} from "../../components/ContentList/ContentList";
import {SortedContent} from "../../components/SortedContent/SortedContent";
import {CLBox} from "../../components/ContentList/ContentList.styled";
import {ContentPageBox} from "./ContentListPage.styled";

interface IProps {
  format: string
}

export const ContentListPage: FC<IProps> = ({format}) => {
  const sorted: string = useSelector(sortedSelector)
  const {page, results, total_pages}: IListResponse = useSelector(contentSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContentList({format, sorted, page}));
  }, [format, sorted, dispatch, page]);

  const handleChange: IHandleChangeFunc = (event: object, value: number) => {
    dispatch(getContentList({format, sorted, page: value}));
  };

  return (
    <ContentPageBox>
      <CLBox>
        <SortedContent/>
      </CLBox>

      <ContentList
        format={format}
        page={page}
        results={results}
        total_pages={total_pages}
        handleChange={handleChange}
      />
    </ContentPageBox>
  )
};
