import {FC, useEffect} from "react";
import {RouteComponentProps, useLocation, withRouter} from "react-router-dom";

interface ISideBar extends RouteComponentProps {
  children: JSX.Element
}

const _ScrollToTop: FC<ISideBar> = ({children}) => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return children
}

export const ScrollToTop = withRouter(_ScrollToTop)