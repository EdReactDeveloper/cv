import React, { Component } from "react";
import { data } from "../data";

const MyContext = React.createContext();
export default MyContext;

class ProductProvider extends Component {
  state = {
    products: [...data],
    cardDetails: null,
    cart: []
  };

  getItem = id => {
    const item = this.state.products.find(item => item.id === Number(id));
    return item;
  };

  cardDetails = id => {
    const product = this.getItem(id);
    this.setState({
      cardDetails: product
    });
  };

  addToCart = id => {
    console.log('addToCart id: ', id)
    const products = [...this.state.products];
    const index = products.indexOf(this.getItem(id));
    const product = products[index];
    const cart = [...this.state.cart, product];
    product.inCart = true;
    product.total = product.price;
    product.count = 1;
    products[index] = product;
    this.setState({
      products,
      cart
    });
  };
  render() {
    console.log("context state products: ", this.state.products);
    console.log("context state cart: ", this.state.cart);
    return (
      <MyContext.Provider
        value={{
          ...this.state,
          inCart: this.addToCart,
          getItem: this.cardDetails,
          card: this.state.cardDetails
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

const ProductConsumer = MyContext.Consumer;
export { ProductProvider, ProductConsumer };
