import React, { Component } from "react";
import { data } from "./data";

const MyContext = React.createContext();
export default MyContext;

class ProductProvider extends Component {
  state = {
    products: [],
    cardDetails: null,
    cart: [],
    modal: false,
    order: null, 
    confirm: false
  };

  componentWillMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    data.forEach(item => {

      item.total = item.count * item.price;
      item.selectedSize = item.sizes[0].name
      item.sizes[0].active = true
      item.selectedColor = item.colors[0].name
      item.colors[0].active = true

      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState({
      products: tempProducts
    });
  };

  getItem = id => {
    const products = [...this.state.products];
    const item = products.find(item => item.id === Number(id));
    return item;
  };

  cardDetails = id => {
    const product = this.getItem(id);
    this.setState({
      cardDetails: product
    });
  };

  addToCart = id => {
    const products = [...this.state.products];
    const index = products.indexOf(this.getItem(id));
    const product = products[index];
    const cart = [...this.state.cart, product];
    product.inCart = true;
    product.total = product.count * product.price;

    products[index] = product;
    this.setState({
      products,
      cart
    });
  };

  removeFromCart = id => {
    const list = [...this.state.products];
    const index = list.indexOf(this.getItem(id));
    const item = list[index];
    item.inCart = false;
    item.count = 1;
    item.total = item.price;
    list[index] = item;

    const cart = this.state.cart.filter(item => item.id !== id);
    this.setState({
      products: list,
      cart
    });
  };

  counter = (id, type) => {
    const list = [...this.state.products];
    const index = list.indexOf(this.getItem(id));
    const item = list[index];
    if(type === 'plus'){
      item.count = item.count + 1;
    item.total = item.total + item.price;
    }
    if(type === 'minus'){
      item.count = item.count - 1;
    item.total = item.total - item.price;
    }
    
    list[index] = item;
    this.setState({
      products: list
    });
  };  

  choooseHandler = (id, item, type) => {
    const list = [...this.state.products];
    const index = list.indexOf(this.getItem(id));
    const card = list[index];
    if(type === 'sizes'){
      card.selectedSize = item.name;
    }else if(type=== 'colors'){
      card.selectedColor = item.name;
    }    
    const arr = [...card[type]];
    for (let key in arr) {
      if (arr[key].name === item.name) {
        arr[key].active = true;
      } else {
        arr[key].active = false;
      }
    }
    card[type] = arr;
    list[index] = card;
    this.setState({
      products: list
    });
  };  

  order = (id) => {
    const list = [...this.state.products];
    const index = list.indexOf(this.getItem(id));
    const card = list[index];
    this.setState({
      modal: true,
      order:card
    });
  };

  closeOrder=()=>{
    this.setState({
      order: null
    })
  }

  confirmOrder=(id)=>{
    setTimeout(()=>{
      this.setState({
        confirm: false
      })
    }, 1500)
    this.setState({
      confirm: true, 
      order: null, 
     
    })
    this.removeFromCart(id)
  }

  render() {
    return (
      <MyContext.Provider
        value={{
          ...this.state,
          inCart: this.addToCart,
          getItem: this.cardDetails,
          card: this.state.cardDetails,
          cart: this.state.cart,
          removeFromCart: this.removeFromCart,
          counter: this.counter,
          orderNow: this.orderNow,
          choooseHandler: this.choooseHandler,
          closeOrder: this.closeOrder,          
          confirmOrder: this.confirmOrder,
          orderHander: this.order,          
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

const ProductConsumer = MyContext.Consumer;
export { ProductProvider, ProductConsumer };
