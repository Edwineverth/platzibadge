import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BadgeNew from "../pages/BadgeNew.js";
import Badges from "../pages/Badges.js";
import Home from "../pages/Home";
import Layout from "./Layout";
import Notfound from "../pages/NoFound";
import BadgeEdit from "../pages/BadgeEdit";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId/Edit" component={BadgeEdit} />
          <Route component={Notfound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
