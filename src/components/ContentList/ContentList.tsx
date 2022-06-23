import React, {FC} from "react";
import {ContentUnit} from "../ContentUnit/ContentUnit";
import Pagination from "@mui/material/Pagination";
import {Loader} from "../Loader/Loader";
import {CLBox, CLContainer} from "./ContentList.styles";
import {HandleChangeFunc} from "../../types/types";
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {ScrollTop} from "../ScrollTop/ScrollTop";

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
      <ScrollTop>
        <Fab size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon/>
        </Fab>
      </ScrollTop>
    </CLContainer>
  );
};
