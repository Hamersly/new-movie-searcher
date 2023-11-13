import {styled} from '@mui/material/styles';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {Link} from "react-router-dom";
import {Box} from "@mui/material";

export const HeaderBox = styled(Box)`
  background-color: #1240AB;
`

export const HeaderAppBar = styled(AppBar)`
  width: 100%;
  background: #1240AB;
  min-height: 5vh;
`;

export const HeaderToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  background-color: #1240AB;
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: #FFFFFF;
`;