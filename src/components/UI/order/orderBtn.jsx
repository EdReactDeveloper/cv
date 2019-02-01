import React from 'react';
import {ProductConsumer} from '../../../container/context'; 
const orderNow = (props) => {
    return (
        <ProductConsumer>
            {value=>{
                return <button className="productPage__right-order--button"
                onClick={()=>value.orderHander(props.id)}
                >Order Now</button>
            }}
        </ProductConsumer>
        
    );
};

export default orderNow;