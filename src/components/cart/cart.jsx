import React, { Component } from "react";
import { ProductConsumer } from "../UI/context";
import OrderNow from '../UI/orderBtn'; 
import Icon from '../UI/Icon'; 
import {Product} from '../UI/Selection'; 
import Heading from '../UI/heading'; 
class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <div className="container">
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
                    
                      <h3 className="cart__item-heading">{item.heading}</h3>
                      <div className="cart__item-price">$ {item.price}</div>
                      <div className="cart__item-total">{item.total}</div>
                      <div className="cart__item-countbox">
                        <button className="cart__item-increment"
                        disabled={item.count < 2}
                        onClick={()=>value.decrement(item.id)}
                        >-</button>
                        <div className="cart__item-count">{item.count}</div>
                        <button className="cart__item-increment"
                        onClick={()=>value.increment(item.id)}
                        >+</button>
                      </div>
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
