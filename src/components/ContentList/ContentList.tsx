import React, {FC} from "react";
import {ContentUnit} from "../ContentUnit/ContentUnit";
import Pagination from "@mui/material/Pagination";
import {Loader} from "../Loader/Loader";
import {Footer} from "../Footer/Footer";
import {CLBox} from "./ContentList.styles";
import {IHandleChangeFunc} from "../../types/types";
import ScrollToTop from "react-scroll-to-top";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {Box} from "@mui/material";

interface IProps {
  format: string;
  page: number;
  results: [];
  total_pages: number;
  handleChange: IHandleChangeFunc;
}

export const ContentList: FC<IProps> = ({format, page, results, total_pages, handleChange}) => {

  return (
    <Box>

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

      {results && <Footer/>}

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
