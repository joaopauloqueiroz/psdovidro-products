import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./Views/Login";
import Product from "./Views/Product";
import List from "./Views/List";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/create" exact component={Product} />
        <Route path="/list" exact component={List} />
      </Switch>
    </BrowserRouter>
  );
}
