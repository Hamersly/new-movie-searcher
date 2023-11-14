import React, {FC} from "react";
import {ContentUnit} from "../ContentUnit/ContentUnit";
import Pagination from "@mui/material/Pagination";
import {Loader} from "../UI/Loader/Loader";
import {CLBox, ContentBox} from "./ContentList.styles";
import {IHandleChangeFunc} from "../../types/types";
import {Scroll} from "../UI/Scroll/Scroll";

interface IProps {
  format: string;
  page: number;
  results: [];
  total_pages: number;
  handleChange: IHandleChangeFunc;
}

export const ContentList: FC<IProps> = ({format, page, results, total_pages, handleChange}) => {

  return (
    <ContentBox>
      {results && <CLBox>
        <Pagination
          color={'primary'}
          count={total_pages > 100 ? 100 : total_pages}
          siblingCount={0}
          page={page}
          onChange={handleChange}/>
      </CLBox>}
      {results ? results.map((result: any) =>
          <ContentUnit format={format} content={result} key={result.id}/>)
        :
        <Loader/>
      }
      {results && <CLBox>
        <Pagination
          color={'primary'}
          count={total_pages > 100 ? 100 : total_pages}
          siblingCount={0}
          page={page}
          onChange={handleChange}/>
      </CLBox>}

      <Scroll/>

    </ContentBox>
  );
};
