import React from "react";
import Icon from "../UI/Icon";
import { Product } from "../UI/Selection";
const iconbox = (props) => {
   
  return (
    <div className={`iconbox ${props.className}-iconbox`}>
      <Icon d={Product.internet} className="iconbox-icon" />
      <Icon d={Product.cart} className="iconbox-icon" />
      <Icon d={Product.heart} className="iconbox-icon" />
    </div>
  );
};

export default iconbox;
