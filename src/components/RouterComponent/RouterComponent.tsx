import {FC} from "react";
import {RouterBox} from "./RouterComponent.styles";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import {Header} from "../Header/Header"
import {Footer} from "../Footer/Footer";
import {TitlePage} from "../../pages/TitlePage/TitlePage";
import {ContentListPage} from "../../pages/ContentListPage/ContentListPage";
import {DetailPage} from "../../pages/DetailPage/DetailPage";

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

					<Route exact path="/:info">
						<DetailPage/>
					</Route>

					<Redirect to="/"/>
				</Switch>
				<Footer/>
			</HashRouter>
		</RouterBox>
	);
};