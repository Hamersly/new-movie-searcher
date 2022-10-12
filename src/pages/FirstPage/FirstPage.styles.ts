import {styled} from '@mui/material/styles';
import {Box, Typography} from "@mui/material";

export const FirstBox = styled(Box)`
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  //background-image: url("");
  //min-height: 85vh;
`

export const FirstTopography = styled(Typography)`
  text-align: center;
  margin-top: 30px;
  color: #A9A9A9;
  text-shadow: 2px 2px 2px black;
`
