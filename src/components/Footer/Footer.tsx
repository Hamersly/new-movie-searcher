import {FooterBox} from "./Footer.styles";
import {FC} from "react";
import {UnitTopography} from "../ContentUnit/CounterUnit.styles";

export const Footer: FC = () => {
  return (
    <footer>
      <FooterBox>
        <UnitTopography variant="subtitle1">
          Все права защищены, но это не точно...
        </UnitTopography>
      </FooterBox>
    </footer>
  );
};