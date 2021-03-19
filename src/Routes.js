import React from "react";
import { Switch, Redirect, Route, BrowserRouter } from "react-router-dom";

import MainPage from "./pages/MainPage";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={MainPage} />
      </Switch>
    </div>
  );
};

export default Routes;
