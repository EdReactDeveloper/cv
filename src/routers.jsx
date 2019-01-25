import React, { Component } from "react";
import Layout from "./components/layout";
import Main from './components/main';
import Catalog from "./components/catalog";
import ProductPage from "./components/productPage";
import { Route, Switch } from "react-router-dom";

class Routers extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/products" exact component={Catalog} />
          <Route path="/products/:id" exact component={ProductPage} />
          <Route path="/" exact component={Main} />
        </Switch>
      </Layout>
    );
  }
}

export default Routers;
