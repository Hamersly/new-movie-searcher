import {Pagination} from "@mui/material";
import React, {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {searchListSelector, searchQuerySelector} from "../../store/movieLayer/selectors";
import {searchValue} from "../../store/movieLayer/actions";
import {CLBox, CLContainer} from "../../components/ContentList/ContentList.styles";
import {ContentUnit} from "../../components/ContentUnit/ContentUnit";
import {Loader} from "../../components/Loader/Loader";

export const SearchPage: FC = () => {
	const {page, results, total_pages} = useSelector(searchListSelector);
	const query = useSelector(searchQuerySelector)
	const dispatch = useDispatch();

	console.log(results)

	const handleChange = (event: object, value: number) => {
		dispatch(searchValue({query, page: value}));
	};
	return (
		<CLContainer>
			{results && <CLBox>
        <Pagination count={total_pages > 100 ? 100 : total_pages}
                    siblingCount={1}
                    page={page}
                    variant="outlined"
                    onChange={handleChange}/>
      </CLBox>}
			{results ? results.map((result: any) =>
					<ContentUnit format={"movie"} content={result} key={result.id}/>)
				:
				<Loader/>
			}
			{results && <CLBox>
        <Pagination count={total_pages > 100 ? 100 : total_pages}
                    siblingCount={1}
                    page={page}
                    variant="outlined"
                    onChange={handleChange}/>
      </CLBox>}
		</CLContainer>
	);
};
