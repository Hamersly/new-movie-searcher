import {FC, useState} from "react";
import Box from "@mui/material/Box";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import Typography from "@mui/material/Typography";
import {HeaderAppBar, HeaderLink, HeaderToolbar} from "./Header.styles";
import {Search} from "../Search/Search";
import {Title} from "../Title/Title";


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
    <Box>
      <Title/>
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
                sx: {backgroundColor: "gray"}
              }}
            >

              <MenuItem onClick={handleClose}>
                <HomeIcon/>
                <Typography ml={"10px"} variant="h6" component="div">
                  <HeaderLink to="/">Главная</HeaderLink>
                </Typography>
              </MenuItem>

              <MenuItem onClick={() => handleFormat("movie")}>
                <LocalMoviesIcon/>
                <Typography ml={"10px"} variant="h6" component="div">
                  <HeaderLink to="/movie">Фильмы</HeaderLink>
                </Typography>
              </MenuItem>

              <MenuItem onClick={() => handleFormat("tv")}>
                <LiveTvIcon/>
                <Typography ml={"10px"} variant="h6" component="div">
                  <HeaderLink to="/tv">Сериалы</HeaderLink>
                </Typography>
              </MenuItem>

            </Menu>
          </Box>

          <Box>
            <Search/>
          </Box>

        </HeaderToolbar>
      </HeaderAppBar>
    </Box>
  );
};