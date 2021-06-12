import React from 'react';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from "./containers/Checkout/Checkout";
import Layout from "./components/Layout/Layout";

const App = () => (
  <Layout>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </BrowserRouter>
  </Layout>
);

export default App;
