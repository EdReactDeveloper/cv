import React from 'react';
import {ProductConsumer} from './context'; 
const orderNow = (props) => {
    return (
        <ProductConsumer>
            {value=>{
                return <button className="productPage__right-order--button" onClick={value.orderNow(props.id)}>Order Now</button>
            }}
        </ProductConsumer>
        
    );
};

export default orderNow;