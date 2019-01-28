import React, { Component } from "react";
import Layout from "./components/layout";
import Main from "./components/main";
import Catalog from "./components/catalog";
import ProductPage from "./components/productPage";
import { Route, Switch } from "react-router-dom";
import { ProductProvider } from "./components/UI/context";
class Routers extends Component {
  render() {
    return (
      <ProductProvider>
        <Layout>
          <Switch>
            <Route path="/products" exact component={Catalog} />
            <Route path="/products/:id" exact component={ProductPage} />
            <Route path="/" exact component={Main} />
          </Switch>
        </Layout>
      </ProductProvider>
    );
  }
}

export default Routers;
