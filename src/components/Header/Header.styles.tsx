import {styled} from '@mui/material/styles';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {Link} from "react-router-dom";


export const HeaderAppBar = styled(AppBar)`
  width: 100%;
  background: gray;
  min-height: 5vh;

`;

export const HeaderToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;


export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: #FFFFFF;
`;