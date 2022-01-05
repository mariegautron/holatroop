import { BrowserRouter, Route, Switch } from "react-router-dom";
import Connection from "../pages/Connection";
import Tensions from "../pages/Tensions";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import PrivateRoute from "./privateRoute";
import Indicateurs from "../pages/Indicateurs";

const Router = ({ user }: any) => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path={"/"} component={Home} />
        <Route exact path={"/indicateurs"} component={Indicateurs} />
        <Route exact path={"/login"} component={Connection} />
        <Route exact path={"/tensions"} component={Tensions} />
        <PrivateRoute exact path={"/profile"} component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
