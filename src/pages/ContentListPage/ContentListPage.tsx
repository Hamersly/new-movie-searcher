import React, {FC, useEffect} from "react";
import {contentSelector} from "../../store/movieLayer/selectors";
import {useDispatch, useSelector} from "react-redux";
import {getContentList} from "../../store/movieLayer/actions";
import {Pagination} from "@mui/material";
import {Loader} from "../../components/Loader/Loader";
import {ContentUnit} from "../../components/ContentUnit/ContentUnit";
import {CLBox, CLContainer} from "./ContentListPage.styles";
import {Content, ListResponse} from "../../types/types";

interface Props {
	format: string
}

export const ContentListPage: FC<Props> = ({format}) => {

	const {page, results, total_pages}: ListResponse = useSelector(contentSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getContentList({format, page}));
	}, [format]);

	const handleChange = (event: object, value: number) => {
		dispatch(getContentList({format, page: value}));
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
			{results ? results.map((result: Content) =>
					<ContentUnit format={format} content={result} key={result.id}/>)
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
