import {FC} from "react";
import {RouterBox} from "./RouterComponent.styles";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import {Header} from "../Header/Header"
import {Footer} from "../Footer/Footer";
import {TitlePage} from "../../pages/TitlePage/TitlePage";
import {ContentListPage} from "../../pages/ContentListPage/ContentListPage";
import {DetailPage} from "../../pages/DetailPage/DetailPage";
import {SearchPage} from "../../pages/SearchPage/SearchPage";
import {ScrollToTop} from "../ScrollToTop/ScrollToTop";

export const RouterComponent: FC = () => {

  return (
    <RouterBox>
      <HashRouter>
        <Header/>
        <Switch>
          <Route exact path="/">
            <ScrollToTop>
              <TitlePage/>
            </ScrollToTop>
          </Route>

          <Route exact path="/movie">
            <ScrollToTop>
              <ContentListPage format={"movie"}/>
            </ScrollToTop>
          </Route>

          <Route exact path="/tv">
            <ScrollToTop>
              <ContentListPage format={"tv"}/>
            </ScrollToTop>
          </Route>

          <Route path="/search_results">
            <SearchPage/>
          </Route>

          <Route exact path="/:info">
            <ScrollToTop>
              <DetailPage/>
            </ScrollToTop>
          </Route>

          <Redirect to="/"/>
        </Switch>
        <Footer/>
      </HashRouter>
    </RouterBox>
  );
};