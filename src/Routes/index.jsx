import { Route, Switch } from "react-router-dom";
import { Cart } from "../pages/Cart";
import { Home } from "../pages/Home";

export const Routes = () => {
  return(
    <Switch>
      <Route exact path={"/"} component={Home}/>
      <Route exact path={"/Cart"} component={Cart}/>
    </Switch>
  );
}