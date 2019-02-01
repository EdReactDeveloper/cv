import React, { Component } from "react";
import MyContext, { ProductConsumer } from "../../container/context";
import {Link} from 'react-router-dom'; 
import OrderNow from '../UI/order/orderBtn'; 
import Icon from '../UI/icon/Icon'; 
import {Product} from '../UI/icon/Selection'; 
import Heading from '../UI/heading'; 
import Order from '../UI/order';
import Counter from '../UI/product/counter';
import Info from '../UI/order/orderInfo';

class Cart extends Component {

  static contextType = MyContext; 
  render() {
    return (
      <div className="cart">
        <div className="container">
        <Order item={this.context.order}/>
          <div className="cart__wrapper">
            <ul className="cart__list">
              <ProductConsumer>
                {value => {
                  return( 
                    value.cart < 1 ? <div className="cart__empty">
                  <Heading span="your cart is" main="empty" style={{margin: 0}}/>
                  </div> : value.cart.map((item, i) => (
                    <li className="cart__item" key={i}>
                    <div className="cart__item-imagebox"
                    >
                    <img src={item.images[0]} alt="is missing" className="cart__item-image"/>
                    </div>
                    
                      <h3 className="cart__item-heading"><Link to={`/products/${item.id}`}>{item.heading}</Link></h3>
                      <Info item={item}/>
                      
                        <Counter id={item.id} />
                      <OrderNow id={item.id} />                      
                      <button className="cart__item-remove" onClick={()=>value.removeFromCart(item.id)}>
                      <Icon d={Product.delete} className="cart__item-remove-icon"/>
                      </button>
                    </li>
                  ))
    )}}
              </ProductConsumer>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
