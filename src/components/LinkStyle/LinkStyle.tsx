import {FC} from "react";
import {RouterLink} from "./LinkStyle.styles"

interface Props {
  to: string,
  children: JSX.Element | string,
}

export const LinkStyle: FC<Props> = ({to, children}) => {
  return (
    <RouterLink to={to}>{children}</RouterLink>
  );
};