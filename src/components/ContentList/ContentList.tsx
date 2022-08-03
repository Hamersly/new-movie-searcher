import React, {FC} from "react";
import {ContentUnit} from "../ContentUnit/ContentUnit";
import Pagination from "@mui/material/Pagination";
import {Loader} from "../Loader/Loader";
import {CLBox, CLContainer} from "./ContentList.styles";
import {HandleChangeFunc} from "../../types/types";
import ScrollToTop from "react-scroll-to-top";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {FilterContent} from "../FilterContent/FilterContent";

interface Props {
  format: string;
  page: number;
  results: [];
  total_pages: number;
  handleChange: HandleChangeFunc;
}

export const ContentList: FC<Props> = ({format, page, results, total_pages, handleChange}) => {

  return (
    <CLContainer>
      <CLBox>
        <FilterContent/>
      </CLBox>
      {results && <CLBox>
        <Pagination count={total_pages > 100 ? 100 : total_pages} siblingCount={0} page={page} onChange={handleChange}/>
      </CLBox>}
      {results ? results.map((result: any) =>
          <ContentUnit format={format} content={result} key={result.id}/>)
        :
        <Loader/>
      }
      {results && <CLBox>
        <Pagination count={total_pages > 100 ? 100 : total_pages} siblingCount={0} page={page} onChange={handleChange}/>
      </CLBox>}

      <ScrollToTop
        smooth
        component={<ArrowUpwardIcon
        fontSize="large"/>}
      />

    </CLContainer>
  );
};
