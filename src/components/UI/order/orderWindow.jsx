import React from "react";
import Modal from "../misc/modal";
import {ProductConsumer} from '../../../container/context';
import Info from '../order/orderInfo';
const order = ({item}) => {
  return (
      <Modal>
      <div className="order__wrapper">
        <div className="order__image-wrapper">
          <img src={item.images[0]} alt="is missing" className="order__image" />
        </div>
          <h3 className="order__heading">{item.heading}</h3>
          <Info item={item}/>
          <ProductConsumer>
            { value =>{
              return <div className="order__btn">
            <button className="order__btn-back" onClick={()=>value.closeOrder()}>go back</button>
            <button className="order__btn-confirm" onClick={()=>value.confirmOrder(item.id)}>confirm</button>
          </div>

            }}
         
          </ProductConsumer>
      </div>
      </Modal>
  );
};

export default order;
