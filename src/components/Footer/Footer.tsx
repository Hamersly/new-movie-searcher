import {Typography} from "@mui/material";
import {FooterBox} from "./Footer.styles";
import {FC} from "react";

export const Footer: FC = () => {
  return (
    <footer>
      <FooterBox>
        <Typography variant="subtitle1">
          Все права защищены, но это не точно...
        </Typography>
      </FooterBox>
    </footer>
  );
};