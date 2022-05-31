import {FC, useState} from "react";
import Box from "@mui/material/Box";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import IconButton from "@mui/material/IconButton";
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import Typography from "@mui/material/Typography";
import {HeaderAppBar, HeaderToolbar} from "./Header.styles";


export const Header: FC = () => {

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleFormat = (value: string): void => {
		setAnchorEl(null);
	};

	return (
		<HeaderAppBar position="static">
			<HeaderToolbar>
				<Box>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{mr: 2}}
						onClick={handleClick}
					>
						<MenuIcon/>
					</IconButton>
					<Menu
						id="basic-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							'aria-labelledby': 'basic-button',
						}}
					>
						<Link className="link" to="/movie">
							<MenuItem onClick={() => handleFormat("movie")}>
								<LocalMoviesIcon/>
								<Typography ml={"10px"} variant="h6" component="div">
									Фильмы
								</Typography>
							</MenuItem>
						</Link>

						<Link className="link" to="/tv">
							<MenuItem onClick={() => handleFormat("tv")}>
								<LiveTvIcon/>
								<Typography ml={"10px"} variant="h6" component="div">
									Сериалы
								</Typography>
							</MenuItem>
						</Link>

						<Link className="link" to="/">
							<MenuItem onClick={handleClose}>
								<HomeIcon/>
								<Typography ml={"10px"} variant="h6" component="div">
									Главная
								</Typography>
							</MenuItem>
						</Link>
					</Menu>
				</Box>

				<Box>
				</Box>

			</HeaderToolbar>
		</HeaderAppBar>
	);
};