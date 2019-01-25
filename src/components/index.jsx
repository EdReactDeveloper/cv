import React from "react";
import Main from "./main";
import Catalog from "./catalog";
import Header from "./header";
import ProductPage from "./productPage";
import Footer from "./footer";
import { Route, Switch } from "react-router-dom";

const Index = () => (
  <div className="wrapper">
    <Header />

    <Switch>
      <Route path="/products" exact component={Catalog} />
      <Route path="/products/:id" exact component={ProductPage} />
      <Route path="/" exact component={Main} />
    </Switch>

    <Footer />
  </div>
);

export default Index;
