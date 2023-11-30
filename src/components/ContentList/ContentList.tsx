import React, {FC} from "react";
import {ContentUnit} from "../ContentUnit/ContentUnit";
import {Loader} from "../UI/Loader/Loader";
import {CLBox, ContentBox} from "./ContentList.styled";
import {IHandleChangeFunc} from "../../types/types";
import {Scroll} from "../UI/Scroll/Scroll";
import {BasePagination} from "../BasePagination/BasePagination";


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
      {results &&
        <CLBox>
          <BasePagination page={page} total_pages={total_pages} handleChange={handleChange}/>
        </CLBox>
      }

      {results ?
        results.map((result: any) =>
          <ContentUnit format={format} content={result} key={result.id}/>)
        :
        <Loader/>
      }

      {results &&
        <CLBox>
          <BasePagination page={page} total_pages={total_pages} handleChange={handleChange}/>
        </CLBox>
      }

      <Scroll/>

    </ContentBox>
  );
};
