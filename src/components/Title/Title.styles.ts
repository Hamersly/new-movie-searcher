import {styled} from '@mui/material/styles';
import {Box, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export const TitleBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 25vh;
`

export const TitleOneTopography = styled(Typography)`
  text-align: center;
  color: #466FD5;
  text-shadow: 3px 3px 3px black;
  font-weight: bold;
`

export const TitleTwoTopography = styled(Typography)`
  text-align: center;
  color: #466FD5;
  text-shadow: 2px 2px 2px black;
  font-weight: bold;
`

export const TitleLink = styled(Link)`
  text-decoration: none;
  color: #466FD5;
  font-weight: bold;
`;
