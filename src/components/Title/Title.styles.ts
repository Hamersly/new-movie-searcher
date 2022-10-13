import {styled} from '@mui/material/styles';
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";


export const TitleOneTopography = styled(Typography)`
  text-align: center;
  margin-top: 30px;
  color: #A9A9A9;
  text-shadow: 3px 3px 3px black;
`

export const TitleTwoTopography = styled(Typography)`
  text-align: center;
  margin: 30px;
  color: #A9A9A9;
  text-shadow: 2px 2px 2px black;
`

export const TitleLink = styled(Link)`
  text-decoration: none;
  color: #A9A9A9;
`;
