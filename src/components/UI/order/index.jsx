import React, { Component } from 'react';
import MyContext from '../../../container/context';
import OrderWindow from './orderWindow';
import Success from '../misc/success';
class Order extends Component {
    static contextType = MyContext
    render() {
        return (
            <React.Fragment>
            {this.context.order ? <OrderWindow item={this.context.order}/> : null } 
            {this.context.confirm ? <Success/> : null}  
           </React.Fragment>
        );
    }
}

export default Order;