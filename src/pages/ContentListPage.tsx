import React, {FC, useEffect} from "react";
import {contentSelector} from "../store/movieLayer/selectors";
import {useDispatch, useSelector} from "react-redux";
import {getContentList} from "../store/movieLayer/actions";
import {Box, Container, Pagination} from "@mui/material";
import {Loader} from "../components/Loader/Loader";
import {ContentUnit} from "../components/ContentUnit/ContentUnit";

interface Props {
	format: string
}

export const ContentListPage: FC<Props> = ({format}) => {

	const {page, results, total_pages} = useSelector(contentSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getContentList({format, page}));
	}, [format]);

	const handleChange = (event: object, value: number) => {
		dispatch(getContentList({format, page: value}));
	};

	return (
		<Container sx={{
			minHeight: "100vh"
		}}>
			{results && <Box
        sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					margin: "35px 0",
				}}
      >
        <Pagination count={total_pages > 100 ? 100 : total_pages}
                    siblingCount={1}
                    page={page}
                    variant="outlined"
                    onChange={handleChange}/>
      </Box>}
			{results ? results.map((result: any) =>
					<ContentUnit format={format} result={result} key={result.id}/>)
				:
				<Loader/>
			}
			{results && <Box
        sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					margin: "35px 0",
				}}
      >
        <Pagination count={total_pages > 100 ? 100 : total_pages}
                    siblingCount={1}
                    page={page}
                    variant="outlined"
                    onChange={handleChange}/>
      </Box>}
		</Container>
	);
};
