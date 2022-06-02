import {FC} from "react";
import {RouterBox} from "./RouterComponent.styles";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import {Header} from "../Header/Header"
import {Footer} from "../Footer/Footer";
import {TitlePage} from "../../pages/TitlePage";
import {ContentListPage} from "../../pages/ContentListPage";

export const RouterComponent: FC = () => {
	return (
		<RouterBox>
			<HashRouter>
				<Header/>
				<Switch>

					<Route exact path="/">
						<TitlePage/>
					</Route>

					<Route exact path="/movie">
						<ContentListPage format={"movie"}/>
					</Route>

					<Route exact path="/tv">
						<ContentListPage format={"tv"}/>
					</Route>

					<Redirect to="/"/>
				</Switch>
				<Footer/>
			</HashRouter>
		</RouterBox>
	);
};