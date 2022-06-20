import {Box} from "@mui/material";
import React, {FC} from "react";
import Backdrop from "@mui/material/Backdrop";
import {LinkStyle} from "../LinkStyle/LinkStyle";
import {UnitBox, UnitInfoBox, UnitTopography} from "./CounterUnit.styles";
import {Content} from "../../types/types";

interface Props {
	format: string;
	content: any;
}

export const ContentUnit: FC<Props> = ({format, content}) => {
	const [open, setOpen] = React.useState(false);
	const {
		poster_path,
		id,
		title,
		name,
		original_title,
		original_name,
		release_date,
		first_air_date,
		popularity
	}: Content = content

	const handleClose = () => {
		setOpen(false);
	};
	const handleToggle = () => {
		setOpen(!open);
	};

	return (
		<UnitBox>
			<Box>
				<img
					onClick={handleToggle}
					width="100px"
					alt=''
					src={`https://image.tmdb.org/t/p/w200${poster_path}`}
				/>
				<Backdrop
					sx={{color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1}}
					open={open}
					onClick={handleClose}
				>
					<img
						height="70%"
						alt=''
						src={`https://image.tmdb.org/t/p/w500${poster_path}`}
					/>
				</Backdrop>
			</Box>
			<LinkStyle to={`${format}_${id}`}>
				<UnitInfoBox>

					<UnitTopography variant="h6">
						{format === "movie" ? title :
							format === "tv" && name}
					</UnitTopography>

					<UnitTopography mt={2} variant="inherit">
						{format === "movie" ? original_title :
							format === "tv" && original_name}
					</UnitTopography>

					<UnitTopography mt={2} variant="inherit">
						Премьера: {format === "movie" ? release_date :
						format === "tv" && first_air_date}
					</UnitTopography>

					<UnitTopography mt={2} variant="inherit">
						Рейтинг: {popularity}
					</UnitTopography>

				</UnitInfoBox>
			</LinkStyle>
		</UnitBox>
	);
};
