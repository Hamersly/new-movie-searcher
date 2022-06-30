import {styled} from '@mui/material/styles';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export const HeaderAppBar = styled(AppBar)`
  width: 100%;
  background: gray;
  min-height: 5vh;

`;

export const HeaderToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;