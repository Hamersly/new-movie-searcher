import {FC} from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Loader: FC = () => {
  return (
    <Box sx={{display: 'flex'}}>
      <CircularProgress size={90}/>
    </Box>
  );
};