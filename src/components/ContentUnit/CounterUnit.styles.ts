import {styled} from '@mui/material/styles';
import {Box, Container, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export const UnitBox = styled(Container)`
  display: flex;
  margin: 35px 0;
  padding-bottom: 35px;
  border-bottom: 1px solid black;
`

export const UnitInfoBox = styled(Box)`
  flex-direction: column;
  margin-left: 10px;
  width: 100%;
`

export const UnitTopography = styled(Typography)`
  color: black;
`

export const UnitLink = styled(Link)`
  text-decoration: none;
  color: #FFFFFF;
`;