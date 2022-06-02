import {BoxPage} from "./TitleBox.styles";
import {FC} from "react";

interface Props {
	children: JSX.Element | string
}

export const TitleBox: FC<Props> = ({children}) => {
	return (
		<BoxPage>{children}</BoxPage>
	);
};