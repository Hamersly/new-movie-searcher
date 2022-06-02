import {Box} from "@mui/material";
import React, {FC} from "react";
import Backdrop from "@mui/material/Backdrop";
import {LinkStyle} from "../LinkStyle/LinkStyle";
import {UnitTopography} from "./CounterUnit.styles";

interface Props {
	format: string;
	result: any;
}

export const ContentUnit: FC<Props> = ({format, result}) => {
	const [open, setOpen] = React.useState(false);

	const handleClose = () => {
		setOpen(false);
	};
	const handleToggle = () => {
		setOpen(!open);
	};

	return (
		<Box sx={{borderBottom: "1px solid black"}}>
			<Box sx={{display: "flex", margin: "35px 0"}}>

				<Box>
					<img
						onClick={handleToggle}
						width="100px"
						src={`https://image.tmdb.org/t/p/w200${result.poster_path}`}
					/>
					<Backdrop
						sx={{color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1}}
						open={open}
						onClick={handleClose}
					>
						<img
							height="70%"
							src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
						/>
					</Backdrop>
				</Box>
				<LinkStyle to={`${format}_${result.id}`}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							marginLeft: "10px",
							width: "100%",
						}}
					>
						<UnitTopography variant="h6">
							{format === "movie" ? result.title :
								format === "tv" && result.name}
						</UnitTopography>
						<UnitTopography mt={2} variant="inherit">
							{format === "movie" ? result.original_title :
								format === "tv" && result.original_name}
						</UnitTopography>
						<UnitTopography mt={2} variant="inherit">
							Премьера: {format === "movie" ? result.release_date :
							format === "tv" && result.first_air_date}
						</UnitTopography>
						<UnitTopography mt={2} variant="inherit">
							Рейтинг: {result.popularity}
						</UnitTopography>
					</Box>
				</LinkStyle>
			</Box>
		</Box>
	);
};
