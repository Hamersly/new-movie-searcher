import {FC} from "react";
import {RouterBox} from "./RouterComponent.styles";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import {Header} from "../Header/Header"

export const RouterComponent: FC = () => {
	return (
		<RouterBox>
			<HashRouter>
				<Header/>
				<Switch>

					<Route exact path="/">
					</Route>

					<Redirect to="/"/>
				</Switch>

			</HashRouter>
		</RouterBox>
	);
};