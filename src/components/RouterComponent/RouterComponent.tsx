import React, {FC} from "react";
import {RouterBox} from "./RouterComponent.styled";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import {Header} from "../Header/Header"
import {FirstPage} from "../../pages/FirstPage/FirstPage";
import {ContentListPage} from "../../pages/ContentListPage/ContentListPage";
import {DetailPage} from "../../pages/DetailPage/DetailPage";
import {SearchPage} from "../../pages/SearchPage/SearchPage";
import {Footer} from "../Footer/Footer";

export const RouterComponent: FC = () => {

  return (
    <RouterBox>
      <HashRouter>
        <Header/>
        <Switch>
          <Route exact path="/">
            <FirstPage/>
          </Route>

          <Route exact path="/movie">
            <ContentListPage format={"movie"}/>
          </Route>

          <Route exact path="/tv">
            <ContentListPage format={"tv"}/>
          </Route>

          <Route path="/search_results">
            <SearchPage/>
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