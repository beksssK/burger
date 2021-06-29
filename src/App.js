import React from 'react';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import { Switch, Route } from "react-router-dom";
import Checkout from "./containers/Checkout/Checkout";
import Layout from "./components/Layout/Layout";
import Orders from "./containers/Orders/Orders";

const App = () => (
    <Layout>
      <Switch>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
      </Switch>
    </Layout>
);

export default App;
