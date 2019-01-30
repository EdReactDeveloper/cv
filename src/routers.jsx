import React, { Component } from "react";
import Layout from "./components/layout";
import Main from "./components/main";
import Catalog from "./components/catalog";
import NotReady from "./components/notready"; 
import ProductPage from "./components/productPage";
import NotFound from "./components/notfound"; 
import Cart from './components/cart/cart'; 
import { Route, Switch } from "react-router-dom";
import { ProductProvider } from "./components/UI/context";
class Routers extends Component {
  render() {
    return (
      <ProductProvider>
        <Layout>
          <Switch>
            <Route path="/deals" exact component={NotReady} />
            <Route path="/about" exact component={NotReady} />
            <Route path="/contacts" exact component={NotReady} />
            <Route path="/cart" exact component={Cart}/>
            <Route path="/products" exact component={Catalog} />
            <Route path="/products/:id" exact component={ProductPage} />
            <Route path="/" exact component={Main} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </ProductProvider>
    );
  }
}

export default Routers;
