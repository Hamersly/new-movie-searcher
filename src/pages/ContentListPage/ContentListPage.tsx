import React, {FC, useEffect} from "react";
import {contentSelector, sortedSelector} from "../../store/movieLayer/selectors";
import {useDispatch, useSelector} from "react-redux";
import {getContentList} from "../../store/movieLayer/actions";
import {HandleChangeFunc, ListResponse} from "../../types/types";
import {ContentList} from "../../components/ContentList/ContentList";
import {SortedContent} from "../../components/SortedContent/SortedContent";
import {CLBox} from "../../components/ContentList/ContentList.styles";
import {Box} from "@mui/material";

interface Props {
  format: string
}

export const ContentListPage: FC<Props> = ({format}) => {
  const sorted: string = useSelector(sortedSelector)
  const {page, results, total_pages}: ListResponse = useSelector(contentSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContentList({format, sorted, page}));
  }, [format, sorted]);

  const handleChange: HandleChangeFunc = (event: object, value: number) => {
    dispatch(getContentList({format, sorted, page: value}));
  };

  return (
    <Box>
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
    </Box>
  )
};
