import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Typography from "@mui/material/Typography";
import {useParams} from "react-router-dom";
import {getContentDetails} from "../../store/movieLayer/actions";
import {detailSelector} from "../../store/movieLayer/selectors";
import {addContentDetail} from "../../store/movieLayer/slise";
import {DetailBox, DetailContainer, DetailInfoBox} from "./DetailPage.styles";

interface Params {
	info: string
}

export const DetailPage: FC = () => {
	const {info}: Params = useParams();
	const value = info.split("_")
	const format = value[0]
	const id = value[1]

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(addContentDetail({}))
		dispatch(getContentDetails({format, id}));
	}, []);

	const detail = useSelector(detailSelector);
	const {title, original_title, name, original_name, backdrop_path, overview} = detail

	return (
		<DetailContainer>
			<DetailBox>
				<Typography variant="h3" component="div">
					{format === "movie" ? title : name}
				</Typography>
				<Typography variant="h5" component="div">
					{format === "movie" ? original_title : original_name}
				</Typography>
				<DetailInfoBox>
					<img width="100%"
							 src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
					/>
				</DetailInfoBox>
				<DetailInfoBox>
					<Typography variant="h5" component="div">
						{overview}
					</Typography>
				</DetailInfoBox>
			</DetailBox>
		</DetailContainer>
	);
};