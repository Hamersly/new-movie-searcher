import {styled} from '@mui/material/styles';
import {Box, Container, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export const UnitBox = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
  padding: 20px 0;
  background-color: #2A4380;
  border-radius: 30px;
`

export const UnitInfoBox = styled(Box)`
  text-align: center;
  width: 90%;

`

export const UnitImageBox = styled(Box)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  //background-color: yellow;
`

export const UnitTopography = styled(Typography)`
  color: white;
  font-weight: bold;
  line-height: 1.5em;
`

export const UnitLink = styled(Link)`
  text-decoration: none;
  //color: white;
  flex: 2;
`;